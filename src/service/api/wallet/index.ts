import { getFetcher } from "@/service/config/fetcher";
interface GetWalletTransactionsResponse {
  amount: number;
  transactions: {
    amount: number;
    date: string;
    descirption: string;
    id: string;
    status: number;
    type: number;
  }[];
}
export const getWalletTransactions = (
  params: global.PaginationParams
): global.GlobalResponse<GetWalletTransactionsResponse> => {
  return getFetcher(
    `api/wallet/transactions?${`index=${params.index}`}${`&size=${params.size}`}`
  );
};
