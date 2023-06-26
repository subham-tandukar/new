import React, { useContext } from "react";
import { RiAdminLine } from "react-icons/ri";
import NavbarContext from "../../context/navbar-context";
import DataTable from "react-data-table-component";
import { AiOutlineEdit, AiOutlineReload } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import $ from "jquery";
import AdminUserPopup from "./AdminUserPopup";

const AdminUser = () => {
  const { customStyles } = useContext(NavbarContext);

  const columns = [
    {
      name: "S.N.",
      grow: 0,
      center: true,
      width: "70px",
      cell: (row, index) => index + 1,
    },
    {
      name: "User Name",
      // center: true,

      selector: (row) => row.Property,
    },
    {
      name: "Status",
      // grow: 0,
      center: true,
      width: "140px",
      selector: (row) => {
        return (
          <>
            <div className="d-flex">
              <span
                className="bg-success uk-badge"
                style={{ fontSize: "11px" }}
              >
                {/* {checkStatus(row.IsActive)} */}
                Activate
              </span>
            </div>
          </>
        );
      },
    },
    {
      name: "Action",
      // grow: 0,
      center: true,
      width: "100px",
      selector: (row) => {
        return (
          <>
            <div className="action_btns uk-flex">
              <span
                className="action_btn uk-margin-small-right"
                // onClick={() => editPop(row)}
                uk-tooltip="Edit"
              >
                <AiOutlineEdit />
              </span>
              <span
                className="action_btn mr_10"
                // onClick={() => editPop(row)}
                uk-tooltip="Reset Password"
              >
                <AiOutlineReload />
              </span>
            </div>
          </>
        );
      },
    },
  ];

  const data = [
    {
      id: 1,
      Property: "Ram",
      Quantity: "2",
    },
    {
      id: 2,
      Property: "Sita",
      Quantity: "3",
    },
    {
      id: 3,
      Property: "Aadi Purush",
      Quantity: "9",
    },
    {
      id: 4,
      Property: "Rajesh Dai",
      Quantity: "4",
    },
  ];

  const handleAdd = () => {
    $(".repairPopBg").fadeIn(300);
    $(".repairPop").slideDown(500);
  };

  return (
    <div>
      <AdminUserPopup />
      <div className="content-title">
        <RiAdminLine size="1.2rem" color="var(--secondary)" />
        <h4>Admin User</h4>
      </div>

      <div className="table">
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="350px"
          highlightOnHover
          pointerOnHover
          responsive
          dense
          striped
          subHeader
          subHeaderComponent={
            <>
              <div className=" w-100 ">
                <div className="uk-flex uk-flex-middle uk-flex-right">
                  <button className="uk-button bg-btn">
                    <Link onClick={handleAdd}>Add</Link>
                  </button>
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default AdminUser;
