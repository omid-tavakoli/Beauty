import { getFetcher } from "@/service/config/fetcher";

interface serviceResponse {
  id: string;
  title: String;
  categoryTitle: String;
  duration: String;
  description: String;
  details: [serviceDetailesResponse];
}
interface serviceDetailesResponse {
  id: String;
  name: String;
  displayName: String;
  value: String;
}

interface serviceDetailesParams {
  Index: string;
  Size: String;
  Id: String;
}
export const getServiseDetailes = (
  params: serviceDetailesParams
): Promise<serviceResponse> => {
  return getFetcher(
    `api/Services?Index=${params.Index}&Size=${params.Size}&Id=${params.Id}`
  );
};
