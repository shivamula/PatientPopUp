import React, { useState } from "react";
import Modals from "hypaiq-rc/Modals";
import PatientPopUp from "hypaiq-rc/PatientPopUp";
// import Popups from 'hypaiq-rc/Popups'
import Moment from "moment";
import styled, { ThemeProvider } from "styled-components";
export default function ExampleComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datetime, setDateTime] = useState("");
  const [offsettime, setOffset] = useState("");
  const [offsettimeError, showOffsetError] = useState(false);
  const [duration, setDuration] = useState("");
  const [durationError, showDurationError] = useState(false);
  const [nameError, showUsernameError] = useState(false);
  const [processError, showProcessError] = useState(false);
  const [offsettimeErrorText, setOffsetErrorText] = useState("");
  const [durationErrorText, setDurationErrorText] = useState("");
  const [new_selectedDate, setNew_selectedDate] = useState(null);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [totalRecord, setTotalRecord] = useState(0);
  const [patients, setPatients] = useState([]);
  const [select, setSelect] = useState(false);
  const [patientid, setPatientid] = useState();
  const [patientidError, setPatientidError] = useState(false);
  const [gender, setGender] = useState();
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrortext, setEmailErrortext] = useState();
  const [phoneDayError, setPhoneDayError] = useState(false);

  const nameValue = "Name";

  const processtitle = "process";
  const durationvalue = "Duration";
  const Locationid = "Location";
  const commentid = "comment";

  const togglePopups = (props) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input
        type="button"
        value="Create New Appointment"
        onClick={togglePopups}
        onSave={togglePopups}
        onDiscard={togglePopups}
      />
      {isOpen && (
        <PatientPopUp
          advancedSearch={advancedSearch}
          totalRecord={totalRecord}
          select={select}
          patients={patients}
          firstNameError={firstNameError}
        />
      )}
      {/* {isOpen && (
        <Popup>
          <Modals
            id="myModalappoinment"
            nameerror={nameError}
            processerror={processError}
            durationerror={durationError}
            onClick={togglePopups}
            onSave={togglePopups}
            onDiscard={togglePopups}
            name={nameValue}
            patient={patientid}
            process={processtitle}
            durationError={durationError}
            durationErrorText={durationErrorText}
            Location={Locationid}
            offsettimeErrorText={offsettimeErrorText}
            offsettimeError={offsettimeError}
            comment={commentid}
            selected={selectedDate}
            selected={new_selectedDate}
            title="create appointment"
            buttonName="Save"
            onChange={(date) => {
              setSelectedDate(date);
              let d = date;

              let alt_d =
                Moment(d).format("dddd") +
                ", " +
                Moment(d).date() +
                " " +
                Moment(d).format("MMM") +
                " " +
                Moment(d).format("LT");
              setDateTime(alt_d);
              let nd = Moment(d).format();
              setOffset(nd);
              showOffsetError(false);
            }}
          />
        </Popup>
      )} */}
    </div>
  );
}

const Popup = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  min-width: 350px;
  z-index: 2;
`;
