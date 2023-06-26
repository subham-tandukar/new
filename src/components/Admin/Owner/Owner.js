import React, { useContext } from "react";
import { FiUser } from "react-icons/fi";
import NavbarContext from "../../context/navbar-context";
import DataTable from "react-data-table-component";
import { AiOutlineEdit, AiOutlineReload } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import $ from "jquery";
import OwnerPopUp from "./OwnerPopUp";

const Owner = () => {
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
      name: "House Number",
      // center: true,

      selector: (row) => row.Property,
    },
    {
      name: "User Verification",
      // center: true,

      selector: (row) => row.Property,
    },
    {
      name: "Allow App",
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
    $(".tenantPopBg").fadeIn(300);
    $(".tenantPop").slideDown(500);
  };

  return (
    <div>
      <OwnerPopUp />
      <div className="content-title">
        <FiUser size="1.2rem" color="var(--secondary)" />
        <h4>Owner</h4>
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

export default Owner;
