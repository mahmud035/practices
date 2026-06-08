import { ChangeEvent, DragEvent, useRef, useState } from 'react'
import { useUploadMedia } from '../hooks/useGallery'

const ACCEPTED_MIMES = ['image/jpeg', 'image/png', 'image/webp']

const UploadZone = () => {
  const { mutate: upload, isPending, uploadProgress, error, reset } = useUploadMedia()
  const [dragActive, setDragActive] = useState(false)
  const [clientError, setClientError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    setClientError(null)
    reset()
    if (!ACCEPTED_MIMES.includes(file.type)) {
      setClientError(`"${file.name}" is not supported. Only JPEG, PNG, and WebP are allowed.`)
      return
    }
    upload(file)
  }

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    e.target.value = ''
  }

  const displayError = clientError ?? (error as Error | null)?.message ?? null

  return (
    <div className="mb-8">
      <div
        role="button"
        tabIndex={0}
        aria-label="Upload image"
        className={[
          'border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors select-none',
          dragActive ? 'border-violet-500 bg-violet-500/10' : 'border-zinc-700 hover:border-zinc-500',
          isPending ? 'pointer-events-none opacity-50' : '',
        ].join(' ')}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={onInputChange}
        />
        <UploadIcon />
        <p className="text-zinc-300 text-sm mt-3">
          {isPending ? 'Uploading…' : 'Drag & drop or click to upload'}
        </p>
        <p className="text-zinc-600 text-xs mt-1">JPEG · PNG · WebP</p>
      </div>

      {isPending && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-zinc-400 mb-1">
            <span>Uploading</span>
            <span>{uploadProgress}%</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-violet-500 transition-all duration-100 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {displayError && (
        <p className="mt-3 text-sm text-red-400">{displayError}</p>
      )}
    </div>
  )
}

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 mx-auto text-zinc-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
)

export default UploadZone
