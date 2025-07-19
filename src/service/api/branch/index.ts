import { getFetcher } from "@/service/config/fetcher";

export interface workTimes {
    date:null
    dayOfWeek: string
    from: string
    id: string
    isClosed: boolean
    isClosedCompletely:boolean
    isCycle:boolean
    to: string
}
export interface GetBranchResponse {
  id: string;
  title: string;
  description: string;
  longitude: number;
  latitude: number;
  tel: string;
  distance: string;
  status: number;
  address: string;
  iconAddress: string;
  isOrigin: boolean
  workTimes : [workTimes]
}
interface LoginResponse {
  Token: string;
  FirstName: string;
  LastName: string;
  Picture: string;
}
interface GetCategoryByBranchResponse {
  [key: string]: GetBranchResponse[];
}

export const getBranch = (): global.GlobalResponse<GetBranchResponse[]> => {
  return getFetcher(`api/branches`);
};

export const getCategoryByBranch = ({
  id,
}: {
  id: string;
}): global.GlobalResponse<GetCategoryByBranchResponse> => {
  return getFetcher(`api/category/filterbybranchId?id=${id}`);
};

interface GetExpertByIdParams {
  serviceId: string;
  branchId: string;
}

interface GetExpertByIdResponse {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
}
export const getExpertById = (
  params: GetExpertByIdParams
): global.GlobalResponse<GetExpertByIdResponse[]> => {
  return getFetcher(
    `api/services/users?${params.branchId ? `branchId=${params.branchId}` : ""
    }${params.branchId ? `&serviceId=${params.serviceId}` : ""}`
  );
};
