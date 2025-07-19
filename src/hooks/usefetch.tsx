"use client";
import { useEffect, useState } from "react";

type UseMutate = <T, R>(
  fetcher: (args: T) => Promise<R>
) => {
  mutate: (arg0: {
    args: T;
    fn?: {
      onSuccess?: (response: R) => void;
      onError?: (error: R) => void;
    };
  }) => Promise<void>;
  isLoading: boolean;
};

export const useMutate: UseMutate = (fetcher) => {
  const [isLoading, setIsLoading] = useState(false);
  const mutate: ReturnType<UseMutate>["mutate"] = async (payload) => {
    try {
      setIsLoading(true);
      const result = await fetcher(payload.args as any);
      //@ts-ignore
      if (result.code < 400 && result.code >= 200) {
        payload?.fn?.onSuccess && payload.fn.onSuccess(result);
      } else {
        payload?.fn?.onError && payload.fn.onError(result);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    isLoading,
  } as any;
};

type UseGet = <T extends any[], R>(
  fetcher: (...args: T) => Promise<R>,
  config?: {
    enable?: boolean;
    onSuccess?: (res: R) => void;
  },
  ...args: Partial<Parameters<typeof fetcher>>
) => {
  data?: Awaited<R> | undefined;
  error: any;
  refetch: () => void;
  isLoading: boolean;
};
export const useGet: UseGet = (fetcher, config, ...args) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<
    Awaited<ReturnType<typeof fetcher>> | undefined
  >(undefined);
  const [error, setError] = useState<any>("");
  const request = () => {
    return fetcher(...(args as any));
  };
  const requester = () => {
    setIsLoading(true);
    request()
      ?.then((res) => {
        config?.onSuccess && config.onSuccess(res);

        setData(res as Awaited<ReturnType<typeof fetcher>>);
      })
      ?.catch((err) => setError(err))
      ?.finally(() => setIsLoading(false));
  };
  useEffect(() => {
    if (config?.enable !== false && !!fetcher) {
      requester();
    }
  }, [config?.enable, fetcher]);

  return {
    data,
    error,
    refetch: requester,
    isLoading,
  };
};
