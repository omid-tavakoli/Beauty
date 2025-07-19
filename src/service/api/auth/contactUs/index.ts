import { getFetcher } from "@/service/config/fetcher";

interface ContactUsResponse {
  title: string;
  value: string;
  picture: string;
}

export const contactUs = (): global.GlobalResponse<ContactUsResponse> => {
  return getFetcher(`api/contactus`);
};
