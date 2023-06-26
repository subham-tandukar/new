import React, { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import AuthContext from "./components/context/auth-context";
import MainLayout from "./components/Layout/MainLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminUser from "./components/Admin/AdminUser/AdminUser";
import Tenant from "./components/Admin/Tenant/Tenant";
import Owner from "./components/Admin/Owner/Owner";
import AdminLogin from "./components/AdminLogin/AdminLogin";

const App = () => {
  const { User } = useContext(AuthContext);
  console.log("User", User);

  return (
    <>
      <ScrollToTop />

      {!User && (
        <Routes>
          <Route path="/" element={<AdminLogin />} />
        </Routes>
      )}

      <div className="App">
        {User && (
          <MainLayout>
            <Routes>
              {/* After Logged in */}
              {/* admin */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-user" element={<AdminUser />} />
              <Route path="/admin-tenant" element={<Tenant />} />
              <Route path="/admin-owner" element={<Owner />} />
            </Routes>
          </MainLayout>
        )}
      </div>
    </>
  );
};

export default App;
