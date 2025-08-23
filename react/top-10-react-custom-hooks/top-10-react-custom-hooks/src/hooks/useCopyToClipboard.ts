/**
 * A custom hook to copy text to the clipboard
 *
 * @returns {{
 *  copiedText: string | null,
 *  copy: (text: string) => void
 * }} The copied text and copy function
 */

import { useState } from 'react';

export default function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return { copiedText, copy };
}
