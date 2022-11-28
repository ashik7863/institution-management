import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UpdateSecStyle.css";
const UpdateSec1 = ({ editData, date }) => {
  return (
    <div class="container-main">
      <div class="form first">
        <div className="head">
          <div class="admission-date">
            <label>Admission Date</label>
            <input
              type="date"
              value={date}
              placeholder="Enter expiry date"
              name="admdate"
            />
          </div>
        </div>
        <div class="details personal">
          <span class="title">Student Details</span>
          <div className="upper">
            <div className="upper-child">
              <label>Form No</label>
              <input type="text" name="formno" />
            </div>

            <div className="upper-child">
              <label>Course</label>
              <select name="course" required>
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
              <select name="session" required>
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
              <select name="batch" required>
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
                value={
                  editData[0] !== undefined ? editData[0].studentname : null
                }
                name="studentname"
              />
            </div>
            <div class="input-field">
              <label>Father Name</label>
              <input
                type="text"
                value={
                  editData[0] !== undefined ? editData[0].fathername : null
                }
                name="fathername"
              />
            </div>
            <div class="input-field">
              <label>Village</label>
              <select
                name="village"
                value={editData[0] !== undefined ? editData[0].village : null}
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
                value={
                  editData[0] !== undefined ? editData[0].postoffice : null
                }
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
                value={
                  editData[0] !== undefined ? editData[0].policestation : null
                }
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
                value={editData[0] !== undefined ? editData[0].block : null}
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
                value={editData[0] !== undefined ? editData[0].panchayet : null}
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
                value={editData[0] !== undefined ? editData[0].district : null}
                placeholder="Enter District"
              />
            </div>
            <div class="input-field">
              <label>Pin</label>
              <input
                type="text"
                name="pin"
                value={editData[0] !== undefined ? editData[0].pin : null}
                placeholder="Enter Pin"
              />
            </div>
            <div class="input-field">
              <label>Caste</label>
              <select
                name="caste"
                value={editData[0] !== undefined ? editData[0].caste : null}
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
                value={editData[0] !== undefined ? editData[0].dob : null}
                placeholder="Enter birth date"
              />
            </div>
            <div class="input-field">
              <label>Gender</label>
              <select
                name="gender"
                value={editData[0] !== undefined ? editData[0].gender : null}
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
            <span class="title">Student Contact</span>
            <div class="fields">
              <div class="input-field">
                <label>Student Contact No</label>
                <input
                  type="text"
                  name="stdcontact"
                  value={
                    editData[0] !== undefined ? editData[0].stdcontact : null
                  }
                />
              </div>
              <div class="input-field">
                <label>Guardian Contact No</label>
                <input
                  type="text"
                  name="guardcontact"
                  value={
                    editData[0] !== undefined ? editData[0].guardcontact : null
                  }
                />
              </div>
              <div class="input-field">
                <label>Student Aadhaar No</label>
                <input
                  type="text"
                  name="stdaadhaar"
                  value={
                    editData[0] !== undefined ? editData[0].stdaadhaar : null
                  }
                />
              </div>
              <div class="input-field">
                <label>Student Whatsapp No</label>
                <input
                  type="text"
                  name="stdwhatsapp"
                  value={
                    editData[0] !== undefined ? editData[0].stdwhatsapp : null
                  }
                />
              </div>
              <div class="input-field">
                <label>Email ID</label>
                <input
                  type="text"
                  name="email"
                  value={editData[0] !== undefined ? editData[0].email : null}
                />
              </div>
              <div class="input-field"></div>
            </div>
            <span class="title">Marks Details</span>
            <div class="field-marks">
              <div class="input-field">
                <label>Exam Passed</label>
                <select required>
                  <option disabled selected>
                    Select Class
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div class="input-field">
                <label>Board / University</label>
                <select required>
                  <option disabled selected>
                    Select Board / University
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div class="input-field">
                <label>Year of Passing</label>
                <select required>
                  <option disabled selected>
                    Select Year
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>

              <div class="input-field">
                <label>Marks Obtained</label>
                <input type="text" placeholder="Enter Marks" />
              </div>
              <div className="mark-details">
                <div className="marks-table">
                  <table>
                    <thead>
                      <tr>
                        <td>Exam Passed</td>
                        <td>Year of Passing</td>
                        <td>Board / University</td>
                        <td>Total Marks</td>
                        <td>Percentage(%)</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="add-button">
                  <button>Add</button>
                </div>
              </div>
              <span className="title">Document Submitting</span>
              <div className="doc-checkboxes">
                <div className="checkbox">
                  <label>Madhyamik Admit</label>
                  <input type="checkbox" />
                </div>
                <div className="checkbox">
                  <label>Madhyamik Marksheet</label>
                  <input type="checkbox" />
                </div>
                <div className="checkbox">
                  <label>Aadhar Card</label>
                  <input type="checkbox" />
                </div>
                <div className="checkbox">
                  <label>Voter ID Card</label>
                  <input type="checkbox" />
                </div>
                <div className="checkbox">
                  <label>Caste Certificate</label>
                  <input type="checkbox" />
                </div>
                <div className="checkbox">
                  <label>Yctc Certificate</label>
                  <input type="checkbox" />
                </div>
                <div className="photo">
                  <label>Photo Submit</label>
                  <select required>
                    <option disabled selected>
                      Select Quantity
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSec1;
