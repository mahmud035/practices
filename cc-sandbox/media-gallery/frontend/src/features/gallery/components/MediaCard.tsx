import { type IMedia, getThumbUrl } from '../types/media.types'

interface Props {
  media: IMedia
  onSelect: (media: IMedia) => void
  onDelete: (id: string) => void
  isDeleting: boolean
}

const MediaCard = ({ media, onSelect, onDelete, isDeleting }: Props) => (
  <div className="relative group aspect-square overflow-hidden rounded-lg bg-zinc-900">
    <img
      src={getThumbUrl(media.secure_url)}
      alt=""
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-pointer"
      onClick={() => onSelect(media)}
    />
    <button
      className={[
        'absolute top-2 right-2 p-1.5 rounded-md bg-black/60 text-zinc-300',
        'opacity-0 group-hover:opacity-100 transition-all duration-150',
        'hover:bg-red-600 hover:text-white disabled:opacity-40 disabled:pointer-events-none',
      ].join(' ')}
      onClick={(e) => { e.stopPropagation(); onDelete(media._id) }}
      disabled={isDeleting}
      aria-label="Delete image"
    >
      {isDeleting
        ? <span className="block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        : <TrashIcon />
      }
    </button>
  </div>
)

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
)

export default MediaCard
