// eslint-disable-next-line ts/ban-types
export type ApiResponse<T = {}> = T & {
  success: boolean;
  code: number;
  message?: string;
};

export function responseOk<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    code: 0,
    ...data,
  };
}

export function responseError(message: string): ApiResponse {
  return {
    success: false,
    code: -1,
    message,
  };
}

export function responseErrorCode<T>(code: number, message: string, data: T): ApiResponse<T> {
  return {
    success: false,
    code,
    message,
    ...data,
  };
}
