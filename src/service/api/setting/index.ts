import { getFetcher } from "@/service/config/fetcher";
import { workTimes } from "../branch";
interface GetSiteSettingResponse {}

export interface SettingProps {
  discount?: { discount: string; discountDecs: string };
  introduction?: {
    title?: string;
    description?: string;
    instaTitle?: string;
    instaId?: string;
    isActive?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
  };
  ownerInfo?: {
    title?: string;
    description?: string;
    jobPosition?: string;
    image?: string;
  };
  service?: {
    title?: string;
    titleDes?: string;
    name?: string;
    description?: string;
    telLink?: string;
    whatLink?: string;
    instaLik?: string;
    video: string;
  };
  footer?: {
    title1?: string;
    description1?: string;
    title2?: string;
    description2?: string;
    title3?: string;
    description3?: string;
    brandImages?: string[];
  };
  setting: {
    primaryColor: string;
    secondaryColor: string;
    primaryColorRgb: string;
    secondaryColorRgb: string;
  };
  contactUs: ContactUs;
}
export interface SettingService {
  categoryTitle: string;
  discount: number;
  icon: string;
  id: string;
  isActive: boolean;
  prepay: number;
  title: string;
}
interface Comment {
  description: string;
  serviceSamplePictures: string[];
  serviceTitle: string;
  userFirstName: string;
  userLastName: string;
}
interface ContactUs {
  address: string;
  id: string;
  isOrigin: boolean;
  itemHoliday: { id: string; weeks: number }[];
  items: {
    id: number;
    icon: string;
    title: string;
    value: string;
    markup: string;
  }[];
  latitude: number;
  longitude: number;
  workingTimes: [workTimes];
  name: string;
}
export interface GetSiteSettingParams {
  settings: { Key?: number; value?: string }[];
  services?: SettingService[];
  comments: Comment[];
  serviceSamples: string[];
  contactUs: ContactUs[];
}

export const getSiteSetting = (
  Key: number
): global.GlobalResponse<GetSiteSettingParams> => {
  return getFetcher(`api/settings?Key=${Key}`);
};
