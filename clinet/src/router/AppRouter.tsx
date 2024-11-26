import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../pages/register/Register";
import AboutPage from "../pages/AboutPage";
import ParentPage from "../pages/parentPage/ParentPage";
import { BaybisitterHomePage } from "../pages/baybisitterHomePage/BaybisitterHomePage";
import { EditBabysitter } from "../componnets/EditBabysitter";
import DisplayBabisitterPage from "../pages/DisplayBabisitterPage";
import ErrorPage from "../pages/ErrorPage";
import GardsUser from "../gards/GerdsUser";
import GardsIsAdmin from "../gards/GardsIsAdmin";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/babysitter/*"
          element={<GardsUser children={<BaybisitterHomePage />} />}
        />

        <Route path="/Edit/:id" element={<EditBabysitter />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="/parent"
          element={<GardsIsAdmin children={<ParentPage />} />}
        />
        <Route path="/display/:id" element={<DisplayBabisitterPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
