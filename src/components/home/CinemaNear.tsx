import React from "react";
import style from "./style.module.scss";
import { IonIcon } from "@ionic/react";
import { star, location } from "ionicons/icons";

const CinemaNear = () => {
  return (
    <div className={style.cinemanear}>
      <div className={style.title}>
        Cinema Near You
        <button className={style.seeall}>See all</button>
      </div>
      <div className={style.list}>
        <div className={style.item}>
          <div className={style.image}>
            <img
              src="https://homepage.momocdn.net/img/momo-upload-api-210907102204-637666069244403461.png"
              alt=""
            />
          </div>
          <div className={style.info}>
            <div className={style.location}>
              <IonIcon icon={location} className={style.icon} />
              <span>5,2 Kilometers</span>
            </div>
            <div className={style.name}>Beta Quang Trung</div>
            <div className={style.time}>Closed 10.00 PM</div>
          </div>
          <div className={style.star}>
            <IonIcon icon={star} className={style.icon} />
            <span>4.9</span>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.image}>
            <img
              src="https://homepage.momocdn.net/img/momo-upload-api-210907102204-637666069244403461.png"
              alt=""
            />
          </div>
          <div className={style.info}>
            <div className={style.location}>
              <IonIcon icon={location} className={style.icon} />
              <span>5,2 Kilometers</span>
            </div>
            <div className={style.name}>Beta Quang Trung</div>
            <div className={style.time}>Closed 10.00 PM</div>
          </div>
          <div className={style.star}>
            <IonIcon icon={star} className={style.icon} />
            <span>4.9</span>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.image}>
            <img
              src="https://homepage.momocdn.net/img/momo-upload-api-210907102204-637666069244403461.png"
              alt=""
            />
          </div>
          <div className={style.info}>
            <div className={style.location}>
              <IonIcon icon={location} className={style.icon} />
              <span>5,2 Kilometers</span>
            </div>
            <div className={style.name}>Beta Quang Trung</div>
            <div className={style.time}>Closed 10.00 PM</div>
          </div>
          <div className={style.star}>
            <IonIcon icon={star} className={style.icon} />
            <span>4.9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaNear;
