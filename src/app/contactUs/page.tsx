import Footer from "@/components/footer";
import { getBranch } from "@/service/api/branch";
import Image from "next/image";
import ContactUsBranch from "@/components/contactUsBranch/contactUsBranch";
import Header from "@/components/Header";

const contactUs = async () => {
  const { entity: GetBranch } = await getBranch();
  return (
    <>
      <div className="w-full max-w-beauty mx-auto flex flex-col">
        <Header wrapperClassName="mt-[3.75rem]" />
        <span className="hidden lg:block w-full custom-divider mb-[3.75rem]" />
        <p className="hidden sm:block text-[1.625rem] leading-[1.875rem] font-bold text-black text-center mb-[2.188rem] mx-5 beauty:mx-0 ">
          ارتباط با سالن های بیوتی
        </p>
        <div className="relative h-60 md:h-[24.375rem]  w-80 mx-auto md:w-auto rounded-tl-[2.25rem] rounded-br-[2.25rem] md:mx-5 beauty:mx-0 mb-[2.25rem] sm:mb-0">
          <Image src={"/assets/images/contactUs-image.png"} alt="" fill />
        </div>
        <div className="sm:relative sm:-top-[3.125rem] sm:z-10 w-full max-w-[58.125rem] mx-auto flex flex-col gap-y-[1.375rem] sm:gap-y-5 pb-[2.25rem] sm:pb-[11rem] px-5 beauty:px-0">
          <ContactUsBranch data={GetBranch} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contactUs;
