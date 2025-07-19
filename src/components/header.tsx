"use client";
import { openModalHandler } from "@/service/utils/modalHandler";
import { Italiana } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import LoginModal from "./Auth";
import UserAccountManagement from "./UserAccountManagement";

export const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const menuItemsModal = [
  { id: "0", title: "خدمات", link: "/services" },
  // { id: "1", title: "نمونه کارها" },
  { id: "2", title: "درباره ما", link: "/contactUs" },
  // { id: "3", title: "آموزش" },
  // { id: "4", title: "استخدام" },
  {
    id: "5",
    title: "حساب کاربری",
    isActive: true,
    loginUser: true,
    link: "dashboard/account",
  },
  { id: "6", title: "رزرو آنلاین", link: "/reservation/branches" },
];

interface IProps {
  wrapperClassName?: string;
  userInfo?: any;
}

const Header: FC<IProps> = (props) => {
  const pathName = usePathname();
  const router = useRouter();

  const [userLogin, setUserLogin] = useState(props?.userInfo?.payload);
  const authHandler = () => {
    if (!userLogin) {
      openModalHandler("loginModal");
    }
  };

  useEffect(() => {
    setUserLogin(props?.userInfo?.payload ?? props?.userInfo);
  }, [props.userInfo]);

  return (
    <>
      <header
        className={`relative w-full flex h-[2.5rem] justify-between items-center mb-[2.75rem] max-w-beauty mx-auto lg:mb-[1.875rem] ${props?.wrapperClassName}`}
      >
        <svg
          onClick={() => {
            openModalHandler("menuModal");
          }}
          width="24"
          height="24"
          className="absolute top-2/4 -translate-y-2/4 right-0 fill-black stroke-transparent ms-5 beauty:ms-0 cursor-pointer"
        >
          <use href={"/assets/images/icons/landing.svg#menu"}></use>
        </svg>

        <Link
          href="/"
          className={`text-[2rem] lg:text-[2.5rem] mx-auto font-normal ${italiana.className}`}
        >
          Beauty
        </Link>
        <div className="absolute z-10 top-2/4 -translate-y-2/4 left-0 hidden lg:flex items-center gap-2 me-5 beauty:me-0">
          <div className="w-11 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center">
            <svg width="24" height="24" className="fill-black stroke-black ">
              <use href={"/assets/images/icons/landing.svg#card"}></use>
            </svg>
          </div>

          <div
            className={` ${
              !!userLogin
                ? "!min-w-[9.375rem] dropdown dropdown-bottom"
                : "w-11 "
            } `}
            onClick={authHandler}
          >
            <div
              tabIndex={0}
              role="button"
              className="hidden px-[0.625rem] py-2 h-10 rounded-lg bg-white border border-gray-100 lg:flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                className="fill-transparent stroke-black"
              >
                <use href={"/assets/images/icons/landing.svg#profile"}></use>
              </svg>
              {!!props.userInfo && (
                <>
                  <p className="text-[0.875rem] leading-[1.625rem] font-medium text-black ms-[0.313rem] me-[1.125rem]">
                    سلام {userLogin?.firstName} عزیز
                  </p>
                  <svg
                    width="12"
                    height="12"
                    className="fill-transparent stroke-black"
                  >
                    <use
                      href={"/assets/images/icons/landing.svg#arrow-down"}
                    ></use>
                  </svg>

                  <ul
                    tabIndex={0}
                    className="dropdown-content !top-full mt-0.5 bg-white px-3 pt-5 pb-[0.938rem] shadow-beauty_lg rounded-lg w-full"
                  >
                    <UserAccountManagement />
                  </ul>
                </>
              )}
            </div>
          </div>

          <Link
            href={"/reservation/branches"}
            className="hidden h-10 w-24 sm:flex items-center justify-center text-white text-sm rounded-3xl bg-pink-primary"
          >
            رزرو آنلاین
          </Link>
        </div>
      </header>

      <dialog id="menuModal" className="modal backdrop:!bg-transparent">
        <div className="lg:fixed lg:top-0 modal-box !shadow-md lg:!flex lg:!items-center !h-full !max-h-full lg:!h-[8.75rem] lg:!max-h-none !w-full lg:!max-w-full !rounded-none !overflow-hidden">
          <form method="dialog" className="lg:me-[7.25rem] lg:ms-[7.5rem]">
            <button>
              <svg
                width="24"
                height="24"
                className="fill-black stroke-transparent mb-[6.75rem] lg:mb-0"
              >
                <use href={"/assets/images/icons/auth.svg#close"}></use>
              </svg>
            </button>
          </form>
          <div className="flex flex-col lg:flex-row items-center gap-y-[2.75rem] lg:gap-y-0 lg:gap-x-20">
            {menuItemsModal?.map((item) => (
              <>
                {item.loginUser ? (
                  <>
                    <div
                      key={item.id}
                      className={`text-xl lg:text-base leading-[1.625rem] font-medium text-black cursor-pointer ${
                        pathName === item?.link && "!text-pink-primary "
                      } ${item?.isActive && "lg:hidden"}`}
                      onClick={() => {
                        if (item?.loginUser) {
                          if (!!props?.userInfo) {
                            router.push(item.link);
                            console.log("push");
                          } else {
                            authHandler();
                          }
                        }
                      }}
                    >
                      {item?.title}
                    </div>
                  </>
                ) : (
                  <Link
                    key={item?.id}
                    href={item?.link ?? ""}
                    className={`text-xl lg:text-base leading-[1.625rem] font-medium text-black cursor-pointer ${
                      pathName === item?.link && "!text-pink-primary "
                    } ${item?.isActive && "lg:hidden"}`}
                  >
                    {item?.title}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </dialog>
      <LoginModal
        userLogin={(user) => {
          setUserLogin(user.token);
        }}
      />
    </>
  );
};
export default Header;
