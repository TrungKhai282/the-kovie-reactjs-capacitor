import React from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import useStar from "@/utils/useStar";

const TopMovie = () => {
  const { getStar } = useStar();
  const data = [
    {
      image_url:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/d/r/drm24_-_poster.jpg",
      name: "NOBITA VÀ BẢN GIAO HƯỞNG ĐỊA CẦU",
      star: 4,
    },
    {
      image_url:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_opt1_gia_tai_cua_ngoai_3.jpg",
      name: "Gia tài của ngoại",
      star: 3,
    },
    {
      image_url:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/1/2/1200x1800-garfield.jpg",
      name: "Mèo béo siêu quậy",
      star: 3,
    },
    {
      image_url:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/t/h/the-plot_main_poster_1717467017_1_.jpg",
      name: "Bẫy nuốt mạng",
      star: 5,
    },
  ];

  return (
    <div className={style.topMovie}>
      <div className={style.title}>
        Top movies
        <button className={style.seeall}>See more</button>
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={18}
        loop={true}
        className={style.slide}
        id="swiper-top-movie"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.name} className={style.item}>
            <div className={style.image}>
              <img src={item.image_url} alt={item.name} />
            </div>
            <div className={style.info}>
              <p>{item.name}</p>
              <div className={style.star}>{getStar(item.star)}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopMovie;
