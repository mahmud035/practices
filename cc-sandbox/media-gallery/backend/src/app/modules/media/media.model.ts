import { model, Schema } from 'mongoose';
import { IMedia } from './media.interface';

const mediaSchema = new Schema<IMedia>(
  {
    public_id: { type: String, required: true, unique: true },
    secure_url: { type: String, required: true },
    resource_type: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    bytes: { type: Number, required: true },
  },
  { timestamps: true }
);

const Media = model<IMedia>('Media', mediaSchema);

export default Media;
