"use client"
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FC } from "react";
import { gatewayUrl } from "@/service/config/variables";

  interface GalleryPic {
    imageAddress : []
  }
const GalleryPic: FC<GalleryPic> = (props) => {
    const {imageAddress} = props
    return (
        <Swiper
            className="w-full cursor-grab !px-5"
            modules={[FreeMode]}
            freeMode
            spaceBetween={16}
            slidesPerView={"auto"}
        >
            {imageAddress?.map((item , key) => (
                <SwiperSlide key={key} className="!w-auto">
                    <div className="relative w-[10.875rem] h-[11.875rem]">
                        <Image
                            src={gatewayUrl + item}
                            alt=""
                            className="rounded-3xl object-cover"
                            fill
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default GalleryPic