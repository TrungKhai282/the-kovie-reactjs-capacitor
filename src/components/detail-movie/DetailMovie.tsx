import { IonContent, IonIcon } from "@ionic/react";
import SafeAreaPage from "../safe-area-page";
import style from "./style.module.scss";
import { close, bookmarkOutline, star } from "ionicons/icons";
import clsx from "clsx";
import { memo } from "react";

type Props = {
  movieCode: string | null | undefined;
  closeDetail: () => void;
};

const DetailMovie = memo(({ movieCode, closeDetail }: Props) => {
  console.log("movieCode", movieCode);
  return (
    <SafeAreaPage>
      <IonContent className={clsx(style.detailMovie, "contentPage")}>
        <div className={style.toolbar}>
          <button className={style.actionIcon} onClick={closeDetail}>
            <IonIcon icon={close} />
          </button>
          <div className={style.title}>Details Movie</div>
          <button className={style.actionIcon}>
            <IonIcon icon={bookmarkOutline} />
          </button>
        </div>
        <div className={style.poster}>
          <img
            src="https://i0.wp.com/bloganchoi.com/wp-content/uploads/2021/11/shang-chi-poster.jpg"
            alt=""
          />
        </div>
        <div className={style.name}>Shang - Chi</div>
        <div className={style.director}>
          <p>Director: Destin Daniel Cretton</p>
          <div className={style.star}>
            <IonIcon icon={star} className={style.icon} /> 4
          </div>
        </div>
        <div className={style.groupTag}>
          <div className={style.tag}>02h 43m</div>

          <div className={style.row}>
            <div className={style.tag}>Action</div>
            <div className={style.tag}>Fiction Fantasy</div>
          </div>
        </div>
        <div className={style.description}>
          <div className={style.title}>Description</div>
          <p>
            Martial-arts master Shang-Chi confronts the past he thought he left
            behind when he is drawn into <span>Read more</span>
          </p>
        </div>
        <div className={style.bookTicket}>
          <button>Book Ticket</button>
        </div>
      </IonContent>
    </SafeAreaPage>
  );
});

export default DetailMovie;
