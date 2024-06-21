import { errorCodes } from "#imports";

export type ApiResponseSuccess<T = void> = {
  success: true;
  code: string;
} & T;
export interface ApiResponseError {
  success: false;
  code: string;
}

export type ApiResponse<T = void> = ApiResponseSuccess<T> | ApiResponseError;

export function responseOk<T = void>() {
  return {
    success: true,
    code: "SUCCESS",
  } as ApiResponseSuccess<T>;
}

export function responseData<T>(data: T) {
  return {
    success: true,
    code: "SUCCESS",
    ...data,
  } as ApiResponseSuccess<T>;
}

export function responseErrorCode(code: string) {
  return {
    success: false,
    code,
  } as ApiResponseError;
}

export function responseError(e: any) {
  if (e instanceof Error) {
    return responseErrorCode(e.message);
  }
  if (typeof e === "string") {
    return responseErrorCode(e);
  }
  return responseErrorCode(errorCodes.UNKNOWN_ERROR);
}
