import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import style from "./style.module.scss";
import CommingSoon from "./CommingSoon";
import CinemaNear from "./CinemaNear";
const Home = () => {
  return (
    <div className={style.homescreen}>
      <div className={style.welcome}>
        <div className={style.text}>
          <span>Welcome Back,</span>
          <p>Trung Khai Hello</p>
        </div>
        <div className={style.avatar}>
          <img src="/Khai.png" alt="" />
        </div>
      </div>
      <div className={style.searchbar}>
        <IonIcon icon={search} className={style.icon}></IonIcon>
        <input type="text" placeholder="Search your favourite movie" />
      </div>
      <CommingSoon />
      <CinemaNear />
    </div>
  );
};

export default Home;
