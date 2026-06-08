export interface IMedia {
  _id: string;
  public_id: string;
  secure_url: string;
  resource_type: string;
  width: number;
  height: number;
  bytes: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

/** Inserts Cloudinary URL transformation params after /upload/ */
export const getThumbUrl = (secureUrl: string): string =>
  secureUrl.replace('/upload/', '/upload/w_300,h_300,c_fill/');
