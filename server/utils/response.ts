type ApiResponse<T = void> = {
  success: boolean;
  code: string;
} & T;

export function responseOk<T = void>() {
  return {
    success: true,
    code: "SUCCESS",
  } as ApiResponse<T>;
}

export function responseData<T>(data: T) {
  return {
    success: true,
    code: "SUCCESS",
    ...data,
  } as ApiResponse<T>;
}

export function responseErrorCode<T = void>(code: string) {
  return {
    success: false,
    code,
  } as ApiResponse<T>;
}
