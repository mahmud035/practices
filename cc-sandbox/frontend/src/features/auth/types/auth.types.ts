export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
