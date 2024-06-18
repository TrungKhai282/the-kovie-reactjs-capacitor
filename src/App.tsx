import { IonApp, setupIonicReact } from "@ionic/react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout";
import { lazy } from "react";
import SuspenseScreen from "@/components/suspense-screen";

setupIonicReact();

const Home = lazy(() => import("@/components/home"));
const Explore = lazy(() => import("@/components/explore"));
const Login = lazy(() => import("@/components/login"));

function App() {
  return (
    <IonApp>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            index
            element={
              <SuspenseScreen>
                <Home />
              </SuspenseScreen>
            }
          />
          <Route
            path="explore"
            element={
              <SuspenseScreen>
                <Explore />
              </SuspenseScreen>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <SuspenseScreen>
              <Login />
            </SuspenseScreen>
          }
        />
      </Routes>
    </IonApp>
  );
}

export default App;
