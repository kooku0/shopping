import { AxiosResponse } from "axios";

export interface Response<T> {
  rsltCode: string;
  rsltMsg: string;
  body: T;
}

export type ApiResponse<T> = AxiosResponse<Response<T>>;
