import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";

const AdminDashboard = () => {
  return (
    <>
      <div className="content-title">
        <AiOutlineDashboard size="1.2rem" color="var(--secondary)" />
        <h4>Dashboard</h4>
      </div>
    </>
  );
};

export default AdminDashboard;
