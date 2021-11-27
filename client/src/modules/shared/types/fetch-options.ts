export interface IFetchOptions<T = any> {
  url: RequestInfo;
  onError?: (error: any) => void;
  onSuccess?: (data: T) => void;
  options?: RequestInit | undefined;
}
