import { getFetcher, postFetcher } from "@/service/config/fetcher";

export interface CommentResponse {
  Title: string;
  Description: string;
  Score: number;
  Id: string;
  ReservationId?: string;
  SalonId?: string;
  ServiceId?: string;
  BranchUserId?: string;
  PostId?: number;
  ServiceSampleFiles?: null;
  user: {
    firstName: string;
    id: string;
    lastName: string;
  };
}
interface CommentParams {
  Id?: string;
  Title?: string;
  Description?: string;
  Score?: number;
  ReservationId?: string;
  SalonId?: string;
  ServiceId?: string;
  BranchUserId?: string;
  PostId?: string;
  ServiceSampleFiles?: string[];
}
interface GetCommentByFilterParams {
  GetAll?: boolean;
  index: number;
  size: number;
}
export const sendComment = (
  params: CommentParams
): global.GlobalResponse<CommentResponse[]> => {
  return postFetcher(`api/comment`, params);
};

export const getCommentById = (
  id: string
): global.GlobalResponse<CommentResponse> => {
  return getFetcher(`api/comment?id=${id}`);
};
export const getCommentByFilter = (
  params: GetCommentByFilterParams
): global.GlobalResponse<CommentResponse[]> => {
  return getFetcher(
    `api/comment?${params.size ? `size=${params.size}` : ""}${
      params.index ? `&index=${params.index}` : ""
    }${params.GetAll ? `&GetAll=${params.GetAll}` : ""}`
  );
};
