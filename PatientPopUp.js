import React, { Component, Fragment } from "react";

import "./Style.css";
import DateTimeField from "../DateTimeField";
import styled, { ThemeProvider } from "styled-components";
import { device, country } from "./exportables";
import * as mytheme from "./Colors";
import { BsSearch, BsFillCaretDownFill } from "react-icons/bs";
import Tooltip from "@material-ui/core/Tooltip";

import TextFieldGroup from "../TextFieldGroup";
import SelectFieldGroup from "../SelectFieldGroup";
import TextAreaFieldGroup from "../TextAreaFieldGroup";
import DateFieldGroup from "../DateFieldGroup";

function PatientPopUp(props) {
  const styles = {
    patient: {
      active_button_colour: "rgb(67, 149, 166)",
      passive_button_colour: "#a9a9a9",
      button_text_colour: "#FFFFFF",
      button_text_size: "10px",
      button_border_radius: "5px",
      label_text_colour: "#666",
      label_text_size: "10px",
      error_text_size: "10px",
      error_text_colour: "#ff0000",
      input_border_colour: "#666",
      search_border_colour: "#666",
      count_text_colour: "#009999",
      count_text_size: "10px",
      advanced_border_colour: "#fcba03",
    },
    popup: {},
    icons: {},
  };
  const length = props.patients.length;
  const Button = styled.button({
    width: "80%",
    height: "25px",
    borderRadius: styles.patient.button_border_radius,
    backgroundColor: styles.patient.active_button_colour,
    borderWidth: 0,
    margin: "10px 0px",
    color: styles.patient.button_text_colour,
    fontSize: styles.patient.button_text_size,
    fontWeight: "bold",
    cursor: "pointer",
  });
  const Radio = styled.input`
    width: 20px;
    height: 20px;
  `;
  const Label = styled.label`
    display: flex;
    color: ${styles.patient.label_text_colour};
    font-size: ${styles.patient.label_text_size};
  `;
  const Errortext = styled.p({
    color: styles.patient.error_text_colour,
    margin: 0,
    fontSize: styles.patient.error_text_size,
  });
  return (
    <Styles
      theme={styles.patient}
      themes={styles}
      inputColor={styles.patient.input_border_colour}
    >
      <div className="popup" style={{ zIndex: "1", marginTop: "100px" }}>
        <div className="popup-header">
          <h3 style={{ color: "#fff" }}>Patient Search</h3>
          <div className="toggle_btn">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <span className="filterLabel">Filter Mode</span>
          </div>
          <span className="close" style={{ color: "#fff" }} onClick="">
            X
          </span>
        </div>
        <div className="popup-body">
          <div className="main-box">
            <div className="content-box1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: 70,
                }}
              >
                <h3 style={{ color: "#000" }} className="header">
                  Selection
                </h3>
              </div>
              <Label>Name </Label>
              <div style={{ position: "relative" }}>
                <div className="search-box">
                  <input
                    disabled={true ? props.advancedSearch === true : false}
                    onFocus={() => null}
                    // value={this.state.search}
                    // onChange={(e) => this.setSearchString(e.target.value)}
                    className="search"
                    placeholder="Enter Patient Name"
                  />
                  {props.advancedSearch ? (
                    <BsFillCaretDownFill
                      style={{
                        cursor: "pointer",
                        color: "#ccc",
                        fontSize: 20,
                      }}
                    />
                  ) : styles.icons.patient_search ? (
                    <img
                      src={styles.icons.patient_search}
                      style={{ width: 20 }}
                      alt=".."
                    />
                  ) : (
                    <BsSearch
                      style={{
                        cursor: "pointer",
                        color: "#ccc",
                        fontSize: 20,
                      }}
                    />
                  )}
                </div>
                {props.select || props.advancedSearch ? (
                  <div className="search-panel">
                    <div className="count">
                      {props.patients.length || 0} of {props.totalRecord} values
                    </div>
                    {length > 0 &&
                      props.patients.map((patient) => (
                        <div
                          className="dropdown-item"
                          key={patient.primaryId + ""}
                          // onClick={(e) => {
                          //   props;
                          //   this.changePatient(patient);
                          // }}
                          // onMouseEnter={() => this.changePatient(patient)}
                        >
                          <span
                            id="search-display"
                            dangerouslySetInnerHTML={{
                              __html: this.highlightQuery(
                                patient.firstname +
                                  " " +
                                  patient.middlename +
                                  " " +
                                  patient.lastname
                                // this.state.search
                              ),
                            }}
                          ></span>
                          <span>
                            {", "}
                            {patient.title}
                          </span>
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
              <div className="space"></div>
            </div>
            <div className="toolbar">
              <div className="content">
                <div className="content-box">
                  <div className="row">
                    <div className="sub-content">
                      <h3 className="heading">Identity</h3>
                      <TextFieldGroup
                        className="input"
                        value={props.patientid}
                        labelProps={{
                          label: "Patient id",
                          error: props.patientidError ? "!" : "",
                        }}
                        inputProps={{
                          //disabled: this.state.primaryIdDisabled,
                          value: props.patientid,
                          name: "patientid",
                          placeholder: "Enter Patient ID",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.setState({
                          //         patientid: e.target.value,
                          //         save: true,
                          //         idError: false,
                          //       }),
                        }}
                      />
                      <SelectFieldGroup
                        className="input"
                        labelProps={{
                          label: "Gender",
                        }}
                        inputProps={{
                          value: "",
                          type: "select",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleGender(e),
                          options: [],
                        }}
                      />
                      <SelectFieldGroup
                        className="input"
                        labelProps={{
                          label: "Title",
                        }}
                        inputProps={{
                          value: "",
                          type: "select",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handletitle(e),
                          options: [],
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "First Name",
                          error: props.firstNameError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "firstname",
                          placeholder: "Enter First Name",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleFirstName(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "Middle Name",
                          error: props.firstNameError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "middlename",
                          placeholder: "Enter Middle Name",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleMiddleName(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "Last Name",
                          error: props.firstNameError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "lastname",
                          placeholder: "Enter Last Name",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleLastName(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <DateFieldGroup
                        className="date-input"
                        labelProps={{
                          label: "Date of Birth",
                          error: props.firstNameError ? "!" : "",
                        }}
                        inputProps={{
                          title: "Date Of Birth",
                          name: "dateofbirth",
                          selected: "",
                          // onChange: (date) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString({
                          //         target: {
                          //           name: 'dateofbirth',
                          //           value: date ? date.toISOString() : '',
                          //         },
                          //       })
                          //     : this.handleChange(date),
                          maxDate: new Date(),
                        }}
                      />
                      <TextFieldGroup
                        className="email"
                        labelProps={{
                          label: "E-mail",
                          error: props.emailError ? props.emailErrortext : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "email",
                          placeholder: "Enter Email",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.setState({
                          //         email: e.target.value,
                          //         copy: e.target.value,
                          //         save: true,
                          //         emailError: false,
                          //       }),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                    </div>
                    <div className="sub-content">
                      <h3 className="heading">Contact</h3>
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "Phone Day",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "phoneday",
                          placeholder: "Enter Phone Number",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handlePhoneDay(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "Phone Night",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "phonenight",
                          placeholder: "Enter Phone Number",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handlePhoneNight(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        // style={{ marginBottom: "0px" }}
                        className="input"
                        labelProps={{
                          label: "Address line1",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "addressline1",
                          placeholder: "Enter Address Line1",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleAddress1(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "City",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          value: "",
                          name: "city",
                          placeholder: "Enter City",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleCity(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "State / Country / Province",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          name: "state",
                          placeholder: "Enter State",
                          value: "",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleState(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <TextFieldGroup
                        className="input"
                        labelProps={{
                          label: "Zip / Post Code",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          name: "zipcode",
                          placeholder: "Enter Zip Code",
                          value: "",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleZip(e),
                          // onFocus: (e) => this.setCopy(e),
                        }}
                      />
                      <SelectFieldGroup
                        className="input"
                        labelProps={{
                          label: "Country",
                          error: props.phoneDayError ? "!" : "",
                        }}
                        inputProps={{
                          name: "country",
                          value: "",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.handleCountry(e),
                          options: country,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="row">
                    <div
                      className="sub-content"
                      style={{
                        flexDirection: "column",
                        display: "flex",
                      }}
                    >
                      <div className="inside-subContent">
                        <h3 className="heading">Clinical</h3>
                        <div style={{ position: "relative" }}>
                          <img
                            //style={this.state.formFields.isGroupUser?{position: 'absolute', marginTop:'20px', marginLeft:'160px', zIndex:'2', display: 'unset'}:{display: 'none'}}
                            //src={icons.input_field_stretch}
                            // className={
                            //   // this.state.isGroupUser
                            //   //   ? "input-icon doubleHeadIcon"
                            //   //   : "input-icon hidedoubleHeadIcon"
                            // }
                            alt="..."
                            // onClick={() =>
                            //   // this.setState({
                            //   //   isGroupUser: true,
                            //   //   doctorSearchPopup: true,
                            //  // })
                            // }
                          />
                          <TextFieldGroup
                            className="input"
                            labelProps={{
                              label: "Doctor",
                              // error: this.state.doctorError ? "!" : "",
                            }}
                            inputProps={{
                              value: "",
                              name: "doctor",
                              placeholder: "Enter Doctor Name",
                              // onChange: (e) =>
                              //   this.state.advancedSearch
                              //     ? this.setAdvancedString(e)
                              //     : this.handleDoctor(e),
                              // onFocus: (e) => this.setCopy(e),
                            }}
                          />
                        </div>
                        <SelectFieldGroup
                          className="input"
                          labelProps={{
                            label: "Practice Location",
                            // error: this.state.locationError ? '!' : '',
                          }}
                          inputProps={{
                            value: "",
                            name: "location",
                            // onChange: (e) =>
                            //   this.state.advancedSearch
                            //     ? this.setAdvancedString(e)
                            //     : this.handleLocation(e),
                            // options: this.state.locations,
                          }}
                        />
                        <DateFieldGroup
                          className="date-input inputdate_Align"
                          labelProps={{
                            label: "Registration Date",
                            // error: this.state.registerError ? '!' : false,
                          }}
                          inputProps={{
                            title: "Registration Date",
                            name: "registrationdate",
                            // selected: this.state.registrationdate,
                            // onChange: (date) =>
                            //   this.state.advancedSearch
                            //     ? this.setAdvancedString({
                            //         target: {
                            //           name: "registrationdate",
                            //           value: date ? date.toISOString() : "",
                            //         },
                            //       })
                            //     : this.handleRegister(date),
                            minDate: props.advancedSearch ? "" : new Date(),
                          }}
                        />
                        <TextFieldGroup
                          className="input"
                          labelProps={{
                            label: "ID 1",
                            // error: this.state.secID1Error ? '!' : '',
                          }}
                          inputProps={{
                            value: "",
                            name: "secId1",
                            placeholder: "Enter ID 1",
                            // onChange: (e) =>
                            //   this.state.advancedSearch
                            //     ? this.setAdvancedString(e)
                            //     : this.onInputChange(e),
                            // onFocus: (e) => this.setCopy(e),
                          }}
                        />
                        <TextFieldGroup
                          className="input"
                          labelProps={{
                            label: "ID 2",
                            // error: this.state.secID2Error ? '!' : '',
                          }}
                          inputProps={{
                            value: "",
                            name: "secId2",
                            placeholder: "Enter ID 2",
                            // onChange: (e) =>
                            //   this.state.advancedSearch
                            //     ? this.setAdvancedString(e)
                            //     : this.onInputChange(e),
                            // onFocus: (e) => this.setCopy(e),
                          }}
                        />
                        <TextFieldGroup
                          className="input"
                          labelProps={{
                            label: "ID 3",
                            // error: this.state.secID3Error ? '!' : '',
                          }}
                          inputProps={{
                            value: "",
                            name: "secId3",
                            placeholder: "Enter ID 3",
                            // onChange: (e) =>
                            //   this.state.advancedSearch
                            //     ? this.setAdvancedString(e)
                            //     : this.onInputChange(e),
                            // onFocus: (e) => this.setCopy(e),
                          }}
                        />
                        <TextFieldGroup
                          className="input"
                          labelProps={{
                            label: "ID 4",
                            //error: this.state.secID4Error ? '!' : '',
                          }}
                          inputProps={{
                            value: "",
                            name: "secId4",
                            placeholder: "Enter ID 4",
                            // onChange: (e) =>
                            //   this.state.advancedSearch
                            //     ? this.setAdvancedString(e)
                            //     : this.onInputChange(e),
                            // onFocus: (e) => this.setCopy(e),
                          }}
                        />
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="heading">Additional</h3>
                      <TextAreaFieldGroup
                        className="text-area"
                        labelProps={{
                          label: "Note",
                          // error: this.state.noteError ? "!" : "",
                        }}
                        inputProps={{
                          rows: 12,
                          name: "note",
                          placeholder: "Enter Additional Notes Here",
                          // onChange: (e) =>
                          //   this.state.advancedSearch
                          //     ? this.setAdvancedString(e)
                          //     : this.onInputChange(e),
                          // onFocus: (e) => this.setCopy(e),
                          value: "",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  alignItems: "center",
                  // justifyContent: "space-between",
                  padding: "8px 20px",
                }}
              >
                <ButtomBottun>
                  <div className="icons-action row">
                    <div
                      className="button-btn"
                      title="Select"
                      // onClick={() => selectPopup()}
                      //  isActive={this.state.primaryId != ""}
                    >
                      Select
                    </div>
                    <div
                      className="button-btn"
                      title="New Record"
                      //onClick={() => this.newPatient()}
                      // isActive={
                      //   this.state.save ||
                      //   this.state.primaryId ||
                      //   this.state.patientid
                      // }
                    >
                      New
                    </div>
                    <div
                      className="button-btn"
                      title="Duplicate Record"
                      // onClick={() => this.duplicateRecord()}
                      // isActive={this.state.primaryId != ''}
                    >
                      Duplicate
                    </div>
                    <div
                      className="button-btn"
                      title="Delete Record"
                      //onClick={() => deletePatient()}
                      //isActive={this.state.primaryId != ''}
                    >
                      Delete
                    </div>
                    <Tooltip
                      placement={"top"}
                      //open={this.state.open}
                      enterDelay={500}
                      leaveDelay={200}
                      // title={
                      //   "Saved @ " +
                      //   this.state.timeString[0] +
                      //   ":" +
                      //   this.state.timeString[1]
                      // }
                      arrow
                    >
                      <div
                        className="button-btn"
                        title="Save Record"
                        //onClick={() => this.addPatient()}
                        //onClick={() => this.setState({ open: !this.state.open })}
                        // isActive={this.state.save}
                      >
                        Save
                      </div>
                    </Tooltip>
                  </div>
                </ButtomBottun>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
export default PatientPopUp;

const Styles = styled.div`
  height: calc(100vh - 30px);
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  color: #666;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: calc(0.9vh + 6px);
  background: rgb(0, 0, 0, 0.5);
  .popup .popup-body .react-datepicker select {
    width: 18px !important;
    height: 15px;
  }
  .popup .popup-body .react-datepicker-popper {
    left: 40px !important;
  }
  .toggle_btn {
    position: relative;
    display: flex;
    align-self: flex-end;
    width: 59%;
  }
  .filterLabel {
    margin-left: 8px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .toggle_btn .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transition: 0.4s;
  }

  .toggle_btn .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3px;
    border: 1px solid #999;
    background-color: #ebf7ff;
    transition: 0.4s;
  }
  span:first-child span {
    background: #ffffff00;
    bottom: -7px;
    left: 10px;
    padding-left: 0;
  }
  .toggle_btn input:checked + .slider {
    background-color: #2196f3;
  }
  .toggle_btn input:checked + .slider::after {
    content: "";
    position: absolute;
    left: 7px;
    top: 7px;
    height: 5px;
    width: 1px;
    background: #fff;
  }

  .toggle_btn input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  .toggle_btn input:checked + .slider:before {
    transform: translateX(19px) !important;
  }

  /* Rounded sliders */
  .toggle_btn .slider.round {
    border-radius: 34px;
  }

  .toggle_btn .slider.round:before {
    border-radius: 50%;
  }

  .button-btn {
    background-color: #14cccc;
    border-radius: 16px;
    color: #fff;
    min-width: 90px;
    padding: 3px;
    text-align: center;
    font-weight: 600;
    box-shadow: 0px 0px 6px 2px #0e8a8b1a;
    font-size: 14px;
  }

  .button-btn:hover {
    background-color: #16dfdf !important;
    cursor: pointer;
    font-weight: 700;
  }

  .button-btn.disabled,
  button-btn.disabled:hover {
    border: 1px solid #e0e0e0;
    color: #e0e0e0;
    cursor: not-allowed;
    pointer-events: none;
  }

  .button-btn:focus,
  .button-btn:focus-within,
  .button-btn:active {
    background-color: #0e8a8b !important;
    font-weight: 700;
  }
  .doubleHeadIcon {
    width: 15px;
    height: 12px;
    display: unset;
    position: absolute;
    top: 12px;
    right: 23px;
    z-index: 2;
  }

  .hidedoubleHeadIcon {
    display: none;
  }

  .widthSpace .popup {
    min-width: 500px;
    .close {
      display: none;
    }
  }

  .widthSpace2 .popup {
    margin-left: 50%;
    .close {
      display: unset;
    }
  }

  .widthSpace2 .popup-header {
    width: 400px;
  }

  .widthSpace2 .popup-body {
    height: 200px;
    width: 400px;
  }

  label span span {
    font-weight: 400 !important;
  }

  label {
    font-weight: 400 !important;
    font-size: 12px;
  }

  // input{
  //   padding:0px !important;
  // }

  .icons-action {
    padding-bottom: 5px;
  }

  .popup {
    height: 89%;
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 1082px;
    width: 70%;
    .popup-body {
      .main-box {
        .toolbar {
          margin: 0 auto;
          width: 100%;
          .content {
            height: calc(68vh - 35px);
            overflow-y: auto;
          }
        }
      }
    }

    button {
      // border: 0;
    }

    .popup-header {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #80d7d8;
      color: ${(props) =>
        props.themes.popup.active_in_focus_banner_text_colour};
      padding: 5px 10px;
      border-radius: 12px 12px 0 0;
      border: solid 1px #80d7d8;

      h3 {
        margin: 0;
        font-weight: 500;
        padding: 0;
        font-family: "Titillium Web";
        font-size: calc(80% + 5px);
        color: #102d27;
      }
      .close {
        font-weight: 300;
        cursor: pointer;
        font-size: 18px;
      }
    }
    .popup-body {
      position: relative;
      // border: 1.5px solid ${(props) =>
        props.themes.popup.active_in_focus_border_colour};
      border-radius: 0 0
        ${(props) => props.themes.popup.active_in_focus_corner_radius}
        ${(props) => props.themes.popup.active_in_focus_corner_radius};
      padding: 0px 5px;
      background: white;
      .row {
        flex-direction: row;
        display: flex;
      }

      .sub-content > div,
      .inside-subContent > div {
        margin-bottom: 20px;
      }
      div label {
        color: #8fa39f !important;
      }
      .inside-subContent {
        margin-bottom: -20px !important;
      }

      .main-box {
        flex-direction: row;
        display: flex;
        padding: 2px 0 5px 0;
      }
      .space {
        height: 180px;
      }
      .content {
        flex-direction: row;
        display: flex;
        padding: 0 20px;
        width: 100%;
      }
      .email {
        width: 94%;
        padding: 0px;
        outline: 0px;
        font-size: 13px;
        box-sizing: border-box;
        margin-top: 0px;
      }
      .input {
        padding: 0px;
        width: 90%;
      }
      .date-input {
        width: 90%;
      }
      .search-box {
        height: 27px;
        border: none;
        box-shadow: none;
        border-bottom: 1px solid #8fa39f;
        border-radius: 0;
        padding: 6px 0 2px 0;
        position: relative;
        overflow: hidden;
        font-size: 14px;
        width: 92%;
        margin: 0 auto;
        svg {
          font-size: 15px !important;
          position: absolute;
          right: 3px;
          top: 7px;
        }
      }
      .search-panel {
        position: absolute;
        background-color: #ffffff;
        padding: 0px 5px;
        width: 100%;
        border: 1px solid ${(props) => props.theme.search_border_colour};
        min-height: 100px;
      }
      .count {
        color: rgb(67, 149, 166);
        padding: 1%;
        font-size: 10px;
      }
      .filter {
        color: ${(props) => props.inputColor};
        font-size: 20px;
        z-index: 99;
      }
      .search {
        width: 90%;
        border-radius: 5px;
        height: 20px;
        border: 0;
        padding: 2px 0;
        outline: 0px;
        font-size: 100%;
        box-sizing: border-box;
        box-shadow: 0px 0px 0px #999;
        margin-left: 0;
      }
      .search:disabled {
        background-color: #ffffff;
      }
      .label-error {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 5px;
        align-items: center;
        height: 10px;
        padding-right: 10%;
      }
      > div > input,
      > div > select {
        width: 90%;
        border-radius: 5px;
        border: 1px solid ${(props) => props.inputColor};
        outline: 0px;
        font-size: 10px;
        box-sizing: border-box;
        margin-top: 0px;
        box-shadow: 0px 0px 2px #999;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      select {
        // border-radius: 5px;
        box-shadow: none;
        border: none;
        border-bottom: 1px solid #c4c4c4;
        padding: 5px 10px !important;
        // border-bottom: 1px solid ${(props) => props.inputColor};
        outline: 0px;
        font-size: 13px;
        box-sizing: border-box;
        margin-top: 0px;
        background-color: #ffffff;
        border-radius: 0px;
        width: 94%;
        margin-left: 6%;
        padding-left: 0 !important;
        // box-shadow: 0px 0px 2px #999;
      }
      input {
        box-shadow: none;
        border-bottom: 1px solid #c4c4c4;
        // border-bottom: 1px solid ${(props) => props.inputColor};
        border-radius: 0px;
        // margin-left: 0;
        padding-left: 0;
      }
      textarea {
        box-shadow: none;
        // border:none;
        border: 1px solid #c4c4c4;
        // border-bottom: 1px solid ${(props) => props.inputColor};
        border-radius: 0px;
      }
      .header {
        // font-size: calc(0.9vh + 8px);
        // margin: 0;
        // font-weight: bolder;
        // margin-top: 10px;
      }
      .heading {
        font-family: "Titillium Web";
        font-size: calc(0.9vh + 8px);
        margin: 0;
        margin-left: 10px;
        font-weight: bolder;
        color: #102d27;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      .address {
        width: 90%;
        border-radius: 0px;
        height: 30px;
        border-bottom: 1px solid #8fa39f;
        // border-bottom: 1px solid ${(props) => props.inputColor};
        outline: 0px;
        font-size: 13px;
        box-sizing: border-box;
        margin-top: 12px;
        // box-shadow: 0px 0px 2px #999;
        box-shadow: unset;
        padding: 5px;
      }
      .row {
        flex-direction: row;
        display: flex;
      }
      .dropdown-item {
        font-size: 10px;
      }
      .dropdown-item:hover {
        background-color: #ccc;
      }
      .content-box1 {
        border-right: 1px solid #ccc;
        padding: 0 10px;
        margin-right: 5px;
        min-width: 25%;
        margin: 10px 5px 12px 0;
        max-height: calc(100vh - 192px);
        & > label {
          padding-left: 4.3%;
        }
      }
      .content-box {
        padding: 0 0 5px 5px;
        margin: 0 auto;
        width: 100%;
        height: 100% !important;
        overflow: unset !important;
        .sub-content {
          width: 48%;
          // margin-right: 5px;
          .radio {
            width: 12px;
            height: 12px;
            box-shadow: 0px 0px 0px #999;
          }
        }
        .sub-content1 {
          width: 50%;
          .radio {
            margin-left: 2px;
            width: 20px;
            height: 10px;
            box-shadow: 0px 0px 0px #999;
          }
        }
      }
    }
  }
  .datefield {
    width: 94%;
    input[type="text"] {
      margin-left: 6%;
      width: 100%;
    }
    & > span {
      background: url(https://lh3.googleusercontent.com/-D_sFTfaTQ4s/YIAkNZ6g9gI/AAAAAAAAArU/Wkho_lhqGZoawlFrAXO6tQ2Oc3_oegRjgCK8BGAsYHg/s0/2021-04-21.png);
      background-size: 16px 16px;
      position: absolute;
      right: 0 !important;
      left: initial !important;
      background-repeat: no-repeat;
      width: 16px;
      svg {
        opacity: 0;
      }
    }
  }
  .sub-content .text-area textarea {
    height: calc(68vh - 112px);
  }
  @media ${device.tablet} {
    right: 2.5%;
    .popup {
      margin-top: 50%;
      max-width: 700px;
      margin-right: 0;
      .popup-body {
        .main-box {
          flex-direction: column;
          display: flex;
          max-width: 350px;
        }
        .content {
          flex-direction: column;
          display: flex;
        }
        .space {
          height: 30px;
        }
        .content-box1 {
          max-width: 350px;
        }
        .content-box {
          min-width: 350px;
          max-width: 350px;
        }
      }
    }
  }

  .genderContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;

    input {
      margin-top: -1px;
    }
    .row {
      width: 50%;
      display: flex;
      padding: 5px;
      height: 30px;
      align-items: center;
      label {
        padding-right: 4px;
        font-weight: 400 !important;
      }
    }
  }
`;
const ButtomBottun = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  // border-bottom: 1px solid #4395a6;
  width: 80%;
  .breadcrumb {
    display: flex;
    color: gray;
    font-size: 12px;
    align-items: center;
  }
  .icons-action {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // align-items: flex-end;
  }
`;
