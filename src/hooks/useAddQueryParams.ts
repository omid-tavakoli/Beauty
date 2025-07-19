import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useCallback } from "react";

const useAddQueryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      router.push(pathname + "?" + params.toString());
    },
    [searchParams]
  );

  return createQueryString;
};
export default useAddQueryParams;
