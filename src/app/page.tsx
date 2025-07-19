import IntroSection from "@/components/landing/IntroSection";
import OwnerInfoSection from "@/components/landing/OwnerInfoSection";
import { SettingProps, getSiteSetting } from "@/service/api/setting";
import { getUserLoginInfo } from "@/service/utils/serverAuth";
import CustomersOpinion from "@/components/landing/CustomersOpinion";
import Footer from "@/components/footer";
import ServicesSection from "@/components/landing/ServicesSection";
import Header from "@/components/Header";

export default async function Home(props: any) {
  console.log(props);

  const siteSetting = await getSiteSetting(1);
  const userInfo = await getUserLoginInfo();
  let parseSetting: SettingProps | undefined;
  try {
    parseSetting = JSON.parse(siteSetting?.entity?.settings?.[0]?.value ?? "");
  } catch (error) {}

  return (
    <main className="w-full bg-gray-200 hide-scrollbar max-w-global mx-auto">
      <Header wrapperClassName="mt-[3.75rem]" userInfo={userInfo} />
      <IntroSection IntroSection={parseSetting?.introduction} />
      <OwnerInfoSection ownerInfo={parseSetting?.ownerInfo} />
      <ServicesSection
        serviceInfo={parseSetting?.service}
        services={siteSetting?.entity?.services}
        gallery={siteSetting?.entity?.serviceSamples}
      />
      <CustomersOpinion comments={siteSetting?.entity?.comments} />
      <Footer
        footer={parseSetting?.footer}
        serviceInfo={parseSetting?.service}
        contactUs={siteSetting?.entity?.contactUs}
      />
    </main>
  );
}
