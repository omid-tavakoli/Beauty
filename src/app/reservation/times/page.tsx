import Header from "@/components/Header";
import SelectTimeCard from "@/components/reservation/times/SelectTimeCard";
import Steps from "@/components/Steps";
import { getUserLoginInfo } from "@/service/utils/serverAuth";

const Page = async () => {
  const userInfo = await getUserLoginInfo();

  return (
    <section className="flex flex-col w-full h-full sm:h-fit max-w-beauty mx-auto pt-10 sm:pb-10">
      <Header />
      <span className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <Steps step={4} wrapperClassName="!mb-[3.125rem] lg:!mb-[2.25rem]" />
      <SelectTimeCard userInfo={userInfo} />
    </section>
  );
};

export default Page;
