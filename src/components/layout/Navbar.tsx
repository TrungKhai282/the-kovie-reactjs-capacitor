import { IonIcon } from "@ionic/react";
import { home, bookmark, planet, person } from "ionicons/icons";
import style from "./style.module.scss";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const listMenu = [
    {
      url: "/",
      icon: home,
    },
    {
      url: "/explore",
      icon: planet,
    },
    {
      url: "/bookmark",
      icon: bookmark,
    },
    {
      url: "/person",
      icon: person,
    },
  ];

  return (
    <div className={style.navBar}>
      {listMenu.map((item, index) => (
        <Link key={index} to={item.url} className={style.item}>
          <IonIcon
            icon={item.icon}
            className={clsx({ [style.active]: pathname === item.url })}
          ></IonIcon>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
