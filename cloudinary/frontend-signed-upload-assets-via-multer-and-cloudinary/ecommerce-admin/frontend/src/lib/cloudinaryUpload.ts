type SignedParams = {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  signature: string;
  folder: string;
  publicId: string;
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Progress-enabled XHR upload because fetch doesn't support upload progress.
 * Includes timeout + retry.
 */
export async function uploadToCloudinaryWithRetry(
  file: File,
  signed: SignedParams,
  opts?: {
    maxRetries?: number;
    timeoutMs?: number;
    onProgress?: (pct: number) => void;
  }
) {
  const maxRetries = opts?.maxRetries ?? 2;
  const timeoutMs = opts?.timeoutMs ?? 20_000;

  const url = `https://api.cloudinary.com/v1_1/${signed.cloudName}/image/upload`;

  let lastError: any;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const started = performance.now();
    try {
      const result = await uploadOnceXHR(
        file,
        signed,
        url,
        timeoutMs,
        opts?.onProgress
      );

      const elapsed = performance.now() - started;
      if (elapsed > 2500)
        console.warn(`🐢 Cloudinary upload slow: ${elapsed.toFixed(0)}ms`);

      return result;
    } catch (e) {
      lastError = e;
      await sleep(400 * (attempt + 1));
    }
  }

  throw lastError;
}

function uploadOnceXHR(
  file: File,
  signed: SignedParams,
  url: string,
  timeoutMs: number,
  onProgress?: (pct: number) => void
) {
  return new Promise<{
    public_id: string;
    secure_url: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
  }>((resolve, reject) => {
    const form = new FormData();
    form.append('file', file);
    form.append('api_key', signed.apiKey);
    form.append('timestamp', String(signed.timestamp));
    form.append('signature', signed.signature);
    form.append('folder', signed.folder);
    form.append('public_id', signed.publicId);
    form.append('tags', 'product,ecommerce');
    form.append('resource_type', 'image');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.timeout = timeoutMs;

    xhr.upload.onprogress = (evt) => {
      if (!evt.lengthComputable) return;
      const pct = Math.round((evt.loaded / evt.total) * 100);
      onProgress?.(pct);
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const json = JSON.parse(xhr.responseText);
          resolve({
            public_id: json.public_id,
            secure_url: json.secure_url,
            width: json.width,
            height: json.height,
            format: json.format,
            bytes: json.bytes,
          });
        } catch {
          reject(new Error('Cloudinary: invalid JSON response'));
        }
        return;
      }

      reject(
        new Error(
          `Cloudinary upload failed: ${xhr.status} ${xhr.responseText}`.slice(
            0,
            500
          )
        )
      );
    };

    xhr.ontimeout = () => reject(new Error('Cloudinary upload timed out'));
    xhr.onerror = () => reject(new Error('Cloudinary upload network error'));

    xhr.send(form);
  });
}
