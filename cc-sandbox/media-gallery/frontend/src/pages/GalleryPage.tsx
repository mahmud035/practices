import { useState } from 'react'
import GalleryGrid from '../features/gallery/components/GalleryGrid'
import Lightbox from '../features/gallery/components/Lightbox'
import UploadZone from '../features/gallery/components/UploadZone'
import type { IMedia } from '../features/gallery/types/media.types'

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<IMedia | null>(null)

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-white mb-8 tracking-tight">Media Gallery</h1>
      <UploadZone />
      <GalleryGrid onSelect={setSelectedMedia} />
      {selectedMedia && (
        <Lightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
      )}
    </main>
  )
}

export default GalleryPage
