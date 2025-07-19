import { getFetcher } from "@/service/config/fetcher";

interface GetPaymentParams {
  id: string | null;
}

interface PaymentDataParams {
  id: string | null;
}
interface GetPaymentInfoResponse {
  amount: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  status: 0 | 1 | 2;
  trackingNumber: string;
  transactionCode: string | null;
  date: string;
}

export const getPaymentInfo = (
  params: GetPaymentParams
): global.GlobalResponse<GetPaymentInfoResponse> => {
  return getFetcher(`api/wallet/transaction/get?id=${params.id}`);
};
