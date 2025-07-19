import Header from "@/components/Header";
import Image from "next/image";
import image from "../../../public/assets/images/model-9.jpg";
import userImg from "../../../public/assets/images/hair-stylist.png";
import Footer from "@/components/footer";

const BlogDetailes = () => {
  return (
    <section className="max-w-beauty w-full mx-auto">
      <div className=" py-5 border-b border-gray-200 h-fit">
        <Header />
      </div>
      <div className="flex flex-col items-center content-center pt-10">
        <h3 className="text-black text-center text-[22px] font-semibold">
          بهترین برند رنگ مو که باعث آسیب به مو نمی‌شود{" "}
        </h3>
        <div className="flex flex-row w-fit justify-between items-center gap-x-5 py-4">
          <Image
            alt="user"
            width={500}
            height={500}
            src={image}
            className="rounded-full bg-slate-200 size-8 border-2 border-pink-primary"
          />
          <p className="text-black px-2 text-base font-medium ">محسن ظریف</p>
          <span className="bg-pink-primary size-1.5 rounded-full" />
          <p className="text-base text-black font-medium">کامنت (4)</p>
          <span className="bg-pink-primary size-1.5 rounded-full" />
          <p className="text-base text-black font-medium">1403/5/3</p>
          <span className="bg-pink-primary size-1.5 rounded-full" />
          <p className="text-base text-black font-medium">1K</p>
          <span className="bg-pink-primary size-1.5 rounded-full" />
          <p className="text-pink-primary bg-pink-200 font-medium h-fit w-fit text-base px-7 py-1 rounded-2xl">
            ناخن
          </p>
        </div>
        <div className="flex flex-col  text-start">
          <Image
            alt=""
            width={1120}
            height={10000}
            src={image}
            className="w-[1120px] rounded-3xl h-[360px] mb-8 mx-auto"
          />
          <p className="text-xl text-black font-semibold py-6 text-start">
            بهترین برندهای رنگ مو{" "}
          </p>
          <p className="text-base font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <p className="text-base font-normal py-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <div className="flex flex-row py-5 gap-x-4">
            <Image
              src={image}
              width={600}
              height={600}
              alt=""
              className="w-[457px] h-[257px] rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl"
            />
            <p className="text-base text-black font-normal leading-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <p className="text-xl text-black font-semibold py-6 text-start">
            بهترین برندهای رنگ مو{" "}
          </p>
          <p className="text-base font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <p className="text-base font-normal py-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <div className="grid grid-rows-2 grid-cols-2 justify-items-center items-center gap-3 max-w-beauty w-full mx-auto  ">
            <Image
              src={image}
              width={600}
              height={600}
              alt=""
              className="w-[457px] h-[250px] col-span-1 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl"
            />
            <Image
              src={image}
              width={600}
              height={600}
              alt=""
              className="w-[646px] h-[518px] row-span-2 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl me-24"
            />
            <Image
              src={image}
              width={600}
              height={600}
              alt=""
              className="w-[457px] h-[250px] col-span-1 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl "
            />
          </div>
          <div className="w-full pt-6  px-20 py-10">
            <div className="flex flex-row justify-between py-8 ">
              <div className="flex flex-col">
                <p className="text-xl font-bold w-44">آخرین مقاله‌ها</p>
                <p className="text-sm">چندتا از آخرین مقاله‌های ما</p>
              </div>
              <p className="text-pink-primary">
                {" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    className="fill-pink-primary stroke-transparent"
                  >
                    <use
                      href={"assets/images/icons/arrow-left3.svg2#arrow-left"}
                    ></use>
                  </svg>
                </span>
                مشاهده همه
              </p>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
              {Array.from({ length: 3 }).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[363px] h-fit bg-white p-8 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl border border-gray-100"
                >
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={userImg}
                    className="w-[300px] h-[180px] rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl border"
                  />
                  <div className="flex flex-row justify-between py-3 items-center border-b border-gray-100">
                    <div className="flex flex-row items-center">
                      <Image
                        alt="user"
                        width={500}
                        height={500}
                        src={userImg}
                        className="rounded-full bg-slate-200 size-8 border-2 border-pink-primary"
                      />
                      <p className="text-black px-2 text-xs font-medium ">
                        محسن ظریف
                      </p>
                    </div>
                    <p className="text-sm font-medium  text-pink-primary">
                      محتوای آموزشی
                    </p>
                  </div>
                  <div className="flex flex-col justify-between py-3 leading-relaxed text-start border-b border-gray-100">
                    <p className="text-black text-base font-semibold pb-1.5">
                      بهترین برند رنگ مو که باعث آسیب به مو نمی‌شود
                    </p>
                    <p className="text-black font-normal text-xs pb-1.5 opacity-80 ">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است...
                    </p>
                    <p className="text-xs font-medium  text-pink-primary">
                      نمایش بیشتر{" "}
                    </p>
                  </div>
                  <div className="flex flex-row gap-9 items-center text-center pt-5">
                    <p className="text-sm text-black font-medium">کامنت (4)</p>
                    <span className="bg-pink-primary size-1 rounded-full" />
                    <p className="text-sm text-black font-medium">1403/5/3</p>
                    <span className="bg-pink-primary size-1 rounded-full" />
                    <p className="text-sm text-black font-medium">1K</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-6  px-20 py-10 ">
            <div className="flex flex-row justify-between py-8 ">
              <div className="flex flex-col w-[456px]">
                <p className="text-xl font-semibold w-fit text-black py-2">
                  نظر خود را با ما به اشتراک بگذارید
                </p>
                <p className="text-sm font-normal  text-black opacity-80">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="bg-white border border-gray-300 w-[458px] h-[330px] rounded-xl p-4">
                <p className="text-black font-normal text-sm opacity-80 h-full -mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <p className="text-sm font-normal text-pink-primary w-full text-end justify-end pb-8">
                  100
                  <span className="text-black ">/900</span>
                </p>
                <button className="w-full bg-pink-primary rounded-[30px] text-white py-2 font-semibold text-sm text-center">
                  ثبت دیدگاه
                </button>
              </div>
              <div className="bg-white h-[385px] w-[621px] shadow-inner overflow-y-auto">
                <div className="relative p-10 h-fit ">
                  <div className="border-2 absolute border-opacity-50 border-pink-primary  h-full  start-16"></div>
                  {/* {data.map((item, index) => ( */}
                  {Array.from({ length: 10 }).map((item, index) => (
                    <div key={index}>
                      {/* <!-- right and left timeline --> */}
                      <div className="mb-8 flex flex-row items-start w-full ">
                        {/* <div className="order-1 w-fit"></div> */}
                        <div className="z-20 flex items-start order-1 shadow-xl w-12 h-12 rounded-full me-3">
                          <Image
                            className="rounded-full size-12 mx-auto "
                            src={userImg}
                            width={300}
                            height={300}
                            alt=""
                          />
                        </div>
                        <div className="order-1 rounded-lg  w-full lg:px-6 lg:py-4 px-2 py-3 text-start">
                          <div className="flex flex-row gap-6 items-center">
                            <p className="pb-3 text-base text-black font-medium">
                              خانم کمالی{" "}
                            </p>
                            <p className="text-xs font-medium text-black opacity-60">
                              1403/5/6
                            </p>
                            <p className="text-xs font-medium opacity-60">
                              15:30 بعد از ظهر
                            </p>
                          </div>
                          <div className="order-1 bg-white border rounded-ss-2xl hover:bg-[#ECF0F3] rounded-es-[2px] rounded-ee-2xl rounded-se-[2px] border-input rounded-lg  w-full lg:px-6 lg:py-4 px-2 py-3 text-start">
                            <p className="text-base font-normal text-black">
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است.لورم
                              ایپسوم متن ساختگی با تولید سادگی
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};
export default BlogDetailes;
