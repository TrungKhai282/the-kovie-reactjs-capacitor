import { IonContent, IonFooter } from "@ionic/react";
import Navbar from "./Navbar";
import style from "./style.module.scss";
import SafeAreaPage from "../safe-area-page";
import { Outlet } from "react-router-dom";
import MovieDetailModal from "../detail-movie";

const AppLayout = () => {
  return (
    <>
      <SafeAreaPage className={style.appLayout}>
        <IonContent className="contentPage">
          <Outlet />
        </IonContent>
        <IonFooter className={style.footer}>
          <Navbar />
        </IonFooter>
      </SafeAreaPage>
      <MovieDetailModal />
    </>
  );
};

export default AppLayout;
