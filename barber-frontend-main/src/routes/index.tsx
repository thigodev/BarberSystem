import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateSigned from "./PrivateSigned";
import PrivateUnsigned from "./PrivateUnsigned";

import { Signin } from "../pages/Signin/index";
import { Landing } from "../pages/Landing/index";
import { SignUp } from "../pages/Signup";
import { ForgortPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";

import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import Providers from "../pages/ListProviders";
import CreateAppointment from "../pages/CreateAppointment";
import PrivateRouteBarber from "./PrivateRoutesBarber";

const Router: React.FC = () => (
  <Routes>
    <Route element={<PrivateSigned />}>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgortPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Route>

    <Route element={<PrivateUnsigned />}>
      <Route element={<PrivateRouteBarber />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/createAppointment/:id" element={<CreateAppointment />} />
    </Route>

    <Route element={<PrivateUnsigned />}></Route>
  </Routes>
);

export default Router;
