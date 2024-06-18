import React, { Suspense } from "react";

const SuspenseScreen = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<></>}>{children}</Suspense>;
};

export default SuspenseScreen;
