export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

// Teaches: the frontend mirrors the backend envelope 1:1 — API contract defines UI shape.
