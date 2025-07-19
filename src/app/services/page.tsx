import Header from "@/components/Header";
import Services from "@/components/Services/Services";
import { getFilterByBranchId } from "@/service/api/service";

const Page = async () => {
    const { entity: GetServices } = await getFilterByBranchId();
    return (
        <>

            <div className="w-full max-w-beauty mx-auto flex flex-col text-black">
                <Header wrapperClassName="mt-[3.75rem]" />
                <span className="hidden lg:block w-full custom-divider mb-[3.75rem]" />
                <p className="text-[1.625rem] leading-[1.875rem] font-bold  text-center mb-[1.875rem] mx-5 beauty:mx-0 ">
                    خدمات و نمونه‌کارها
                </p>
                <Services Services={GetServices}/>
            </div>  
        </>
    )
}
export default Page