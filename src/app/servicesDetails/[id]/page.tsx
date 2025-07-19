import Header from "@/components/Header";
import Footer from "@/components/footer";
import { getServiceDetails } from "@/service/api/service";
import ServiceDetail from "@/components/serviceDetail/serviceDetail";
import { FC } from "react";
import GalleryPic from "@/components/GalleryPic/GalleryPic";

interface ServiceItem {
  params: { id: string }
}
const ServicesDetails: FC<ServiceItem> = async (props) => {
  const { entity: GetServices } = await getServiceDetails(props.params.id);
  console.log(GetServices)
  return (
    <section className="flex flex-col w-full h-fit sm:py-[2.5rem] py-6">
      <Header wrapperClassName="!mb-5 sm:!mb-[1.875rem]" />
      <span className="w-full max-w-beauty mx-auto custom-divider mb-8 sm:mb-8" />
      <div className="relative flex flex-col gap-y-12 mb-[1.875rem] sm:mb-[13.563rem]">
        <div className="hidden lg:block">
          <GalleryPic imageAddress={GetServices.pictures}/>
        </div>
        <ServiceDetail Services={GetServices} />
        <div className="hidden lg:block pink-gradient absolute -bottom-[27rem] right-20 w-[19rem] h-[19rem] rounded-full blur-3xl z-0" />
      </div>
      <Footer />
    </section>
  );
};

export default ServicesDetails;
