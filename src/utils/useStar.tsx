import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

const useStar = () => {
  const getStar = (starNum: number) => {
    const display = [];
    for (let index = 1; index <= 5; index++) {
      display.push(
        <IonIcon
          key={`${starNum}-${index}`}
          icon={star}
          style={{
            color: index <= starNum ? "#ffa235" : "#e0e0e0",
          }}
        />
      );
    }

    return display;
  };
  return {
    getStar,
  };
};

export default useStar;
