import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import useDetailMovie from "../detail-movie/useDetailMovie";

const CommingSoon = () => {
  const { openDetail } = useDetailMovie();
  return (
    <div className={style.comingsoon}>
      <div className={style.title}>Coming Soon</div>
      <Swiper spaceBetween={18} slidesPerView={1} className={style.slide}>
        <SwiperSlide className={style.item} onClick={() => openDetail("abc")}>
          <div className={style.image}>
            <img
              src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-exorcism.jpg"
              alt=""
            />
          </div>
          <p>Thầy trừ tà - 2024</p>
          <span>Tháng 8 2024</span>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <div className={style.image}>
            <img
              src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-exorcism.jpg"
              alt=""
            />
          </div>
          <p>Thầy trừ tà - 2024</p>
          <span>Tháng 8 2024</span>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <div className={style.image}>
            <img
              src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-exorcism.jpg"
              alt=""
            />
          </div>
          <p>Thầy trừ tà - 2024</p>
          <span>Tháng 8 2024</span>
        </SwiperSlide>
        <SwiperSlide className={style.item}>
          <div className={style.image}>
            <img
              src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-exorcism.jpg"
              alt=""
            />
          </div>
          <p>Thầy trừ tà - 2024</p>
          <span>Tháng 8 2024</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommingSoon;
