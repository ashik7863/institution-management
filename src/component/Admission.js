import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AdmissionSec1 from "./admissionContent/AdmissionSec1";
import AdmissionSec2 from "./admissionContent/AdmissionSec2";
import AdmissionSec3 from "./admissionContent/AdmissionSec3";
const Admission = () => {
  const [addmissionPage, setAdmisisionPage] = useState(1);
  const [val, setVal] = useState({
    formno: "",
    course: "",
    session: "",
    batch: "",
    studentname: "",
    fathername: "",
    village: "",
    postoffice: "",
    policestation: "",
    block: "",
    panchayet: "",
    district: "",
    pin: "",
    caste: "",
    dob: "",
    gender: "",
    stdcontact: "",
    guardcontact: "",
    stdaadhaar: "",
    stdwhatsapp: "",
    email: "",
  });
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const successNotification = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function validateForm() {
    const {
      formno,
      course,
      session,
      batch,
      studentname,
      fathername,
      village,
      postoffice,
      policestation,
      block,
      panchayet,
      district,
      pin,
      caste,
      dob,
      gender,
      stdcontact,
      guardcontact,
      stdaadhaar,
      stdwhatsapp,
      email,
    } = val;
    if (studentname === "") {
      toast.error("Name is required!", toastOption);
      return false;
    } else if (fathername === "") {
      toast.error("Fathers Name is required!", toastOption);
      return false;
    } else if (formno === "") {
      toast.error("Form No is required!", toastOption);
      return false;
    }
    return true;
  }
  const PostData = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const {
        admdate,
        formno,
        course,
        session,
        batch,
        studentname,
        fathername,
        village,
        postoffice,
        policestation,
        block,
        panchayet,
        district,
        pin,
        caste,
        dob,
        gender,
        stdcontact,
        guardcontact,
        stdaadhaar,
        stdwhatsapp,
        email,
      } = val;
      const { data } = await axios.post("http://localhost:4000/admission", {
        admdate,
        formno,
        course,
        session,
        batch,
        studentname,
        fathername,
        village,
        postoffice,
        policestation,
        block,
        panchayet,
        district,
        pin,
        caste,
        dob,
        gender,
        stdcontact,
        guardcontact,
        stdaadhaar,
        stdwhatsapp,
        email,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }
      if (data.status) {
        toast(data.msg, successNotification);
      }
    }
  };
  function changeData(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="main-content">
        {addmissionPage === 1 ? (
          <AdmissionSec1 changeData={changeData} />
        ) : addmissionPage === 2 ? (
          <AdmissionSec2 changeData={changeData} />
        ) : (
          <AdmissionSec3 changeData={changeData} />
        )}
        <div className="buttons">
          {addmissionPage !== 3 && (
            <button
              class="nextBtn"
              onClick={() => setAdmisisionPage(addmissionPage + 1)}
            >
              Next
            </button>
          )}
          {addmissionPage !== 1 && (
            <button
              class="nextBtn"
              onClick={() => setAdmisisionPage(addmissionPage - 1)}
            >
              Prev
            </button>
          )}
          {addmissionPage === 3 && (
            <button class="saveBtn" onClick={(e) => PostData(e)}>
              Submit
            </button>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Admission;
