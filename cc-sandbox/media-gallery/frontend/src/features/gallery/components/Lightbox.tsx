import { useEffect } from 'react'
import type { IMedia } from '../types/media.types'

interface Props {
  media: IMedia
  onClose: () => void
}

const Lightbox = ({ media, onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={media.secure_url}
          alt=""
          className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl"
        />

        <button
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-xl leading-none transition-colors"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ×
        </button>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
          <p className="text-xs text-zinc-400">
            {media.width} × {media.height}px &nbsp;·&nbsp; {(media.bytes / 1024).toFixed(1)} KB
          </p>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
