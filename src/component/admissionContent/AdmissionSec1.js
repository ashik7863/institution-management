import React from "react";
import { Link } from "react-router-dom";
const AdmissionSec1 = (props) => {
  return (
    <div class="container">
      <form action="#">
        <div class="form first">
          <div className="head">
            <div>
              <header>Admission</header>
            </div>
            <div class="admission-date">
              <label>Admission Date</label>
              <input
                type="date"
                name="admdate"
                onChange={(e) => props.changeData(e)}
              />
            </div>
          </div>
          <div class="details personal">
            <span class="title">Student Details</span>
            <div className="upper">
              <div className="upper-child">
                <label>Form No</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="formno"
                  onChange={(e) => props.changeData(e)}
                />
              </div>

              <div className="upper-child">
                <label>Course</label>
                <select
                  name="course"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Course
                  </option>
                  <option>CITA</option>
                  <option>DITA</option>
                  <option>CFAS</option>
                </select>
              </div>
              <div className="upper-child">
                <label>Session</label>
                <select
                  name="session"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Session
                  </option>
                  <option>40th</option>
                  <option>41th</option>
                  <option>42nd</option>
                </select>
              </div>
              <div className="upper-child">
                <label>Batch</label>
                <select
                  name="batch"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Batch
                  </option>
                  <option>AM-01</option>
                  <option>AM-02</option>
                  <option>AM-03</option>
                </select>
              </div>
            </div>
            <div class="fields">
              <div class="input-field">
                <label>Student Name</label>
                <input
                  type="text"
                  name="studentname"
                  placeholder="Enter Student Name"
                  onChange={(e) => props.changeData(e)}
                />
              </div>
              <div class="input-field">
                <label>Father Name</label>
                <input
                  type="text"
                  name="fathername"
                  placeholder="Enter Father Name"
                  onChange={(e) => props.changeData(e)}
                />
              </div>
              <div class="input-field">
                <label>Village</label>
                <select
                  name="village"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Village
                  </option>
                  <option>Mathbari</option>
                  <option>Bachra</option>
                  <option>Minakhan</option>
                </select>
              </div>
              <div class="input-field">
                <label>Post Office</label>
                <select
                  name="postoffice"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Post Office
                  </option>
                  <option>Malancha</option>
                  <option>Mohanpur</option>
                  <option>Minakhan</option>
                </select>
              </div>
              <div class="input-field">
                <label>Police Station</label>
                <select
                  name="policestation"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Police Station
                  </option>
                  <option>Minakhan</option>
                  <option>Basirhat</option>
                  <option>Kolkata</option>
                </select>
              </div>
              <div class="input-field">
                <label>Block</label>
                <select
                  name="block"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Block
                  </option>
                  <option>Minakhan</option>
                  <option>Haroa</option>
                  <option>SDK-I</option>
                </select>
              </div>
              <div class="input-field">
                <label>Panchayet</label>
                <select
                  name="panchayet"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Panchayet
                  </option>
                  <option>Minakhan</option>
                  <option>Basirhat</option>
                  <option>Kolkata</option>
                </select>
              </div>
              <div class="input-field">
                <label>District</label>
                <input
                  type="text"
                  name="district"
                  placeholder="Enter District"
                  onChange={(e) => props.changeData(e)}
                />
              </div>
              <div class="input-field">
                <label>Pin</label>
                <input
                  type="text"
                  name="pin"
                  placeholder="Enter Pin"
                  onChange={(e) => props.changeData(e)}
                />
              </div>
              <div class="input-field">
                <label>Caste</label>
                <select
                  name="caste"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select Caste
                  </option>
                  <option>SC</option>
                  <option>ST</option>
                  <option>OBC</option>
                </select>
              </div>
              <div class="input-field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  placeholder="Enter birth date"
                  onChange={(e) => props.changeData(e)}
                />
              </div>

              <div class="input-field">
                <label>Gender</label>
                <select
                  name="gender"
                  onChange={(e) => props.changeData(e)}
                  required
                >
                  <option disabled selected>
                    Select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionSec1;
