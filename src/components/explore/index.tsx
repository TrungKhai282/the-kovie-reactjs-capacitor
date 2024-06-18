import React from "react";
import style from "./style.module.scss";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import clsx from "clsx";
import TopMovie from "./TopMovie";
import Recommended from "./Recommended";

const ExploreScreen = () => {
  return (
    <div className={style.exploreScreen}>
      <div className={style.toolbar}>
        <div className={style.title}>Explore Movie</div>
        <button className={style.search}>
          <IonIcon icon={search} />
        </button>
      </div>
      <div className={style.tab}>
        <div className={style.tabItem}>Now Showing</div>
        <div className={clsx(style.tabItem, style.active)}>Upcomming</div>
      </div>
      <TopMovie />
      <Recommended />
    </div>
  );
};

export default ExploreScreen;
