# Media Gallery

A full-stack image gallery built to drill **direct-to-Cloudinary media handling**:
streaming multipart uploads straight to Cloudinary, persisting only metadata in
MongoDB, and deriving every visual variant (thumbnails, lightbox) from **URL
transformations** rather than duplicate files.

No auth — the focus is the media pipeline and a clean feature-driven layout.

## Stack

| Layer | Tech |
|---|---|
| Backend | Node, Express 4, TypeScript, Mongoose 8, Zod, Multer, Cloudinary |
| Frontend | React 19, TypeScript, Vite, TanStack Query v5, Axios, Tailwind v4 |
| Database | MongoDB |

Backend runs on **:5000**, frontend on **:5173**.

## Architecture

Feature-driven, with the frontend mirroring the backend `media` domain 1:1.

```
backend/src/
  app.ts, server.ts
  config/cloudinary.ts
  app/
    middlewares/   validateRequest
    modules/
      media/   route · controller · service · validation · model · interface

frontend/src/
  lib/        axios
  features/
    gallery/
      types/       media.types (envelope types + getThumbUrl helper)
      hooks/       useGallery (useMediaList · useUploadMedia · useDeleteMedia)
      components/  UploadZone · GalleryGrid · MediaCard · Lightbox
  pages/      GalleryPage
```

**Media pipeline**

- Multer uses **memory storage** — the file buffer is piped directly into
  `cloudinary.uploader.upload_stream`, never touching disk.
- MIME validation is whitelist-only (JPEG, PNG, WebP), enforced in the service.
- MongoDB stores **metadata only** (`public_id`, `secure_url`, dimensions, bytes);
  the bytes themselves live in Cloudinary.
- Uploads land in the `clients/mahmud/media-gallery` folder (`resource_type: image`).
- **Delete is Cloudinary-first**: the asset is destroyed remotely and the Mongo doc
  is removed only on a confirmed `ok` — no orphaned records or dangling assets.
- Thumbnails come from `getThumbUrl` (`w_300,h_300,c_fill` injected after `/upload/`),
  so a single stored URL serves both grid and lightbox.
- Every endpoint returns the envelope `{ statusCode, success, message, data }`.
- Validation is defence-in-depth: Zod (`validateRequest`) → service → model.

## API

All responses use the `{ statusCode, success, message, data }` envelope.

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/api/media/upload` | `multipart/form-data`, field `image` | Validate, stream to Cloudinary, persist metadata |
| `GET` | `/api/media` | — | List all media, newest first |
| `DELETE` | `/api/media/:id` | — | Destroy Cloudinary asset, then delete the doc |

## Getting started

### Prerequisites

- Node 18+
- A running MongoDB instance
- A Cloudinary account (cloud name, API key, API secret)

### Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/media-gallery
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
npm run dev      # ts-node-dev, watch mode
npm run build    # tsc → dist/
npm start        # run compiled build
```

### Frontend

```bash
cd frontend
npm install
npm run dev      # Vite on :5173
```

The frontend expects the API at `http://localhost:5000/api` (see `src/lib/axios.ts`).
