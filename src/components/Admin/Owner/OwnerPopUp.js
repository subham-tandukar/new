import React, { useState } from "react";
import $ from "jquery";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  AiFillPlusCircle,
  AiFillCloseSquare,
  AiOutlinePlus,
} from "react-icons/ai";
import "../../../css/property.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const OwnerPopUp = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [image, setImage] = useState("");
  const handleClose = () => {
    $(".tenantPopBg").fadeOut(300);
    $(".tenantPop").slideUp(500);
    setImage("");
    setIsUploaded(false);
  };
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <section className="popup-bg tenantPopBg">
        <div className="popup tenantPop">
          <div className="popup-head">
            <h4>Owner</h4>

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
                      label="Email*"
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
                      label="Contact*"
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
                <div>
                  <div className="input-field">
                    <TextField
                      fullWidth
                      autoComplete="off"
                      id="outlined-basic"
                      label="House Number*"
                      variant="outlined"
                      size="small"
                      name="bed"
                      //   onChange={handleChange}
                      //   value={formValue.bed}
                    />
                  </div>
                </div>
              </div>
              <div className="input-field">
                {isUploaded ? (
                  <div className="inputfield">
                    <img src={image} alt="" style={{ height: "100%" }} />
                    <span
                      className="close"
                      onClick={() => {
                        setImage("");
                        setIsUploaded(false);
                      }}
                    >
                      <AiFillCloseSquare />
                    </span>
                  </div>
                ) : (
                  <div className="inputfield">
                    <input type="file" onChange={handleImage} id="image" />
                    <label className="image_box" htmlFor="image">
                      {/* <img src={imageplus} alt="" style={{ height: "100px" }} /> */}
                      <AiOutlinePlus size="10rem" color="var(--primary)" />
                    </label>
                  </div>
                )}
                <div className="mb-1 uk-margin-top">
                  <input
                    id="allow"
                    className="uk-checkbox"
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="allow"
                    className="pointer uk-margin-small-left uk-margin-right"
                  >
                    Allow
                  </label>
                  <input
                    id="verified"
                    className="uk-checkbox"
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="verified"
                    className="pointer uk-margin-small-left uk-margin-right"
                  >
                    Verified
                  </label>
                </div>
              </div>
              <div className="popup-footer buttons">
                <button className="uk-button bg-btn uk-margin-right">
                  <Link>Add</Link>
                </button>
                <button
                  className="uk-button transparent-btn"
                  onClick={handleClose}
                >
                  <Link>Cancel</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnerPopUp;
