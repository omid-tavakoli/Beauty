import { getFetcher, postFetcher, putFetcher } from "@/service/config/fetcher";

export enum ReservationStatus {
  PreReserve = 0,
  RequestToOrder = 1,
  Paid = 2,
  Canceled = 3,
  CanceledWithCashBack = 4,
  CanceledByAdmin = 5,
  Accepted = 6,
  Rejected = 7,
  finish = 8,
  id = 10,
}

interface FreeTime {
  details: [];
  from: string;
  to: string;
}
interface ReservationTimesParams {
  Services: { branchUserId: string; userServiceId: string }[];
  BranchId: string;
  From: Date;
  To: Date;
  TeloranceToRelaxTimePerMinute: number;
}
interface ReservationTimesResponse {
  branchUserFirstName: string;
  branchUserLastName: string;
  serviceTitle: string;
  prepay: number;
  freeTimes: {
    [key: string]: FreeTime[];
  };
}
interface preReserveResponse {
  id: string;
  startTime: string;
  endTime: string;
  reservationFields: {
    id: string;
    branchTitle: string;
    branchAddress: string;
    branchUserFirstName: string;
    branchUserLastName: string;
    serviceTitle: string;
    prePay: string;
    date: string;
  }[];
}
interface GetReservationPayLinkParams {
  ReservationId: string;
  UrlToCallbackIfWalletNeedToCharge: string;
}

interface PreReservePrams {
  Services: { branchUserId: string; serviceId: string; date: string }[];
  BranchId: string;
}
export interface GetReservationPayLinkResponse {
  paymentDetail: {
    amount: number;
    url: string;
    form: {
      CommandType: string;
      trackingNumber: string;
      amount: string;
      redirectUrl: string;
    };
    transportType: number;
  };
}

interface CancelReserveByUserParams {
  ReservationId: string;
}
export interface GetUserReservationResponse {
  branchTitle: string;
  createDate: string;
  date: string;
  id: string;
  fields: preReserveResponse["reservationFields"];
  paymentGateway: string;
  paymentStatus: string | boolean;
  personnelFirstName: string;
  personnelLastName: string;
  prepay: number;
  transactionCode: null | null;
  step: number;
  isCommentWrited: boolean;
}
export const reservationTimes = (
  params: ReservationTimesParams
): global.GlobalResponse<ReservationTimesResponse> => {
  console.log("params", params);

  return postFetcher("api/reservation/filtertimes", params);
};
export const preReserve = (
  params: PreReservePrams
): global.GlobalResponse<preReserveResponse[]> => {
  return putFetcher("api/reservation", params);
};

export const getReservationInfoById = (
  id: string
): global.GlobalResponse<preReserveResponse> => {
  return getFetcher(`api/reservation/getById?id=${id}`);
};
export const getReservationPayLink = (
  params: GetReservationPayLinkParams
): global.GlobalResponse<GetReservationPayLinkResponse> => {
  return getFetcher(
    `api/reservation/pay?ReservationId=${params.ReservationId}&UrlToCallbackIfWalletNeedToCharge=${params.UrlToCallbackIfWalletNeedToCharge}`
  );
};

export const getUserReservation = (
  step: string
): global.GlobalResponse<GetUserReservationResponse[]> => {
  return getFetcher(`api/reservation/getbytoken?step=${step}`);
};
export const cancelReserveByUser = (
  params: CancelReserveByUserParams
): global.GlobalResponse<GetUserReservationResponse[]> => {
  return postFetcher(`api/reservation/cancel`, params);
};
