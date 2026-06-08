import { useDeleteMedia, useMediaList } from '../hooks/useGallery'
import type { IMedia } from '../types/media.types'
import MediaCard from './MediaCard'

interface Props {
  onSelect: (media: IMedia) => void
}

const GalleryGrid = ({ onSelect }: Props) => {
  const { data: mediaList, isLoading, isError, refetch } = useMediaList()
  const { mutate: deleteMedia, isPending: isDeleting, variables: deletingId } = useDeleteMedia()

  if (isLoading) return <SkeletonGrid />

  if (isError) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-400 text-sm">Failed to load images.</p>
        <button
          className="mt-3 text-sm text-violet-400 hover:text-violet-300 underline underline-offset-2"
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
    )
  }

  if (!mediaList || mediaList.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-600 text-sm">No images yet. Upload one above.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {mediaList.map((media) => (
        <MediaCard
          key={media._id}
          media={media}
          onSelect={onSelect}
          onDelete={(id) => deleteMedia(id)}
          isDeleting={isDeleting && deletingId === media._id}
        />
      ))}
    </div>
  )
}

const SkeletonGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="aspect-square rounded-lg bg-zinc-800 animate-pulse" />
    ))}
  </div>
)

export default GalleryGrid
