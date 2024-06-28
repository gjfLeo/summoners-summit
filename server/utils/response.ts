export type ApiResponseSuccess<T = void> = {
  success: true;
  code: string;
  timestamp: number;
} & T;
export interface ApiResponseError {
  success: false;
  code: string;
  timestamp: number;
}

export type ApiResponse<T = void> = ApiResponseSuccess<T> | ApiResponseError;

export function responseOk<T = void>(): ApiResponseSuccess<T> {
  return {
    success: true,
    code: "SUCCESS",
  } as ApiResponseSuccess<T>;
}

export function responseData<T>(data: T): ApiResponseSuccess<T> {
  return {
    success: true,
    code: "SUCCESS",
    timestamp: Date.now(),
    ...data,
  } as ApiResponseSuccess<T>;
}

export function responseErrorCode(code: string): ApiResponseError {
  return {
    success: false,
    code,
    timestamp: Date.now(),
  } as ApiResponseError;
}

export function responseError(e: any): ApiResponseError {
  if (e instanceof Error) {
    return responseErrorCode(e.message);
  }
  if (typeof e === "string") {
    return responseErrorCode(e);
  }
  return responseErrorCode(errorCodes.UNKNOWN_ERROR);
}
