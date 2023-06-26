import React from "react";
import $ from "jquery";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const AdminUserPopup = () => {
  const handleClose = () => {
    $(".repairPopBg").fadeOut(300);
    $(".repairPop").slideUp(500);
  };
  return (
    <>
      <section className="popup-bg repairPopBg">
        <div className="popup repairPop">
          <div className="popup-head">
            <h4>Add Admin User</h4>

            <div className="popup-close hamburger-menu">
              <button onClick={handleClose} className="uk-button bg-btn">
                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
              </button>
            </div>
          </div>

          <div className="popup-body">
            <div className="form-wrapper">
              <div className="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s">
                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="First Name*"
                      variant="outlined"
                      size="small"
                      name="propertyName"
                      //   onChange={handleChange}
                      //   value={formValue.propertyName}
                    />
                    {/* <p className="errormsg">{formError.email}</p> */}
                  </div>
                </div>

                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Middle Name*"
                      variant="outlined"
                      size="small"
                      name="maintenanceType"
                      //   onChange={handleChange}
                      //   value={formValue.maintenanceType}
                    />
                  </div>
                </div>

                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="last Name*"
                      variant="outlined"
                      size="small"
                      name="quantity"
                      //   onChange={handleChange}
                      //   value={formValue.quantity}
                    />
                  </div>
                </div>

                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Contact*"
                      variant="outlined"
                      size="small"
                      name="parts"
                      //   onChange={handleChange}
                      //   value={formValue.parts}
                    />
                  </div>
                </div>

                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Phone no*"
                      variant="outlined"
                      size="small"
                      name="bath"
                      //   onChange={handleChange}
                      //   value={formValue.bath}
                    />
                  </div>
                </div>

                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Password*"
                      variant="outlined"
                      size="small"
                      name="amount"
                      type="password"
                      //   onChange={handleChange}
                      //   value={formValue.amount}
                    />
                  </div>
                </div>

                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Username*"
                      variant="outlined"
                      size="small"
                      name="bed"
                      //   onChange={handleChange}
                      //   value={formValue.bed}
                    />
                  </div>
                </div>
                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Email*"
                      variant="outlined"
                      size="small"
                      name="bed"
                      //   onChange={handleChange}
                      //   value={formValue.bed}
                    />
                  </div>
                </div>
                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="Address*"
                      variant="outlined"
                      size="small"
                      name="bed"
                      //   onChange={handleChange}
                      //   value={formValue.bed}
                    />
                  </div>
                </div>
                <div>
                  <div className="input-field">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        District
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="District"
                        size="small"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Ktm</MenuItem>
                        <MenuItem value={20}>ktm</MenuItem>
                        <MenuItem value={30}>lkfhg</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="popup-footer buttons">
            <button className="uk-button bg-btn uk-margin-right">
              <Link>Add</Link>
            </button>
            <button className="uk-button transparent-btn" onClick={handleClose}>
              <Link>Cancel</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUserPopup;
