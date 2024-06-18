import React, { useEffect, useState } from "react";
import { Plugins } from "@capacitor/core";
import { IonPage } from "@ionic/react";
const { SafeArea } = Plugins;
type SafeAreaInsetType = {
  insets: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeAreaPage = ({ children, ...props }: any) => {
  const [safeAreaInsets, setSafeAreaInsets] = useState<
    SafeAreaInsetType["insets"]
  >({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    if (SafeArea) {
      SafeArea.getSafeAreaInsets().then((result: SafeAreaInsetType) => {
        setSafeAreaInsets(result.insets);
      });
    }
  }, []);
  return (
    <IonPage
      style={{
        paddingTop: `${safeAreaInsets.top}px`,
        paddingBottom: `${safeAreaInsets.bottom}px`,
      }}
      {...props}
    >
      {children}
    </IonPage>
  );
};

export default SafeAreaPage;
