import { useCallback, useMemo, useState } from "react";
import { IFetchOptions } from "../types";

export type UseFetchType<T> = [
  () => void,
  {
    data: T | null;
    isLoading: boolean;
    errors: any;
  }
];

export function useFetch<T = any>(options: IFetchOptions<T>): UseFetchType<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>(null);

  const optionsMemo = useMemo(() => options, [options]);

  const { url, onError, onSuccess } = optionsMemo;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedOptions = useMemo(() => optionsMemo.options, []);

  const onSuccessCallback = useCallback(
    (data) => {
      if (onSuccess) return onSuccess(data);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onErrorCallback = useCallback(
    (data) => {
      if (onError) return onError(data);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchCallback = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchData = await fetch(url, memoizedOptions);
      const dataJson = await fetchData.json();

      setData(dataJson);
      onSuccessCallback(dataJson);
    } catch (error) {
      onErrorCallback(error);
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  }, [onSuccessCallback, onErrorCallback, memoizedOptions, url]);

  return [fetchCallback, { data, isLoading, errors }];
}
