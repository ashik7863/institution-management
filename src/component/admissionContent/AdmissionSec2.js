import React from "react";
import { Link } from "react-router-dom";
const AdmissionSec2 = (props) => {
  return (
    <div class="container">
      <form action="#">
        <div class="form first">
          <div className="head">
            <div>
              <header>Admission</header>
            </div>
          </div>
          <span class="title">Student Contact</span>
          <div class="fields">
            <div class="input-field">
              <label>Student Contact No</label>
              <input
                type="text"
                name="stdcontact"
                placeholder="Enter Student Contact"
                onChange={(e) => props.changeData(e)}
              />
            </div>
            <div class="input-field">
              <label>Guardian Contact No</label>
              <input
                type="text"
                name="guardcontact"
                placeholder="Enter Guardian Contact"
                onChange={(e) => props.changeData(e)}
              />
            </div>
            <div class="input-field">
              <label>Student Aadhaar No</label>
              <input
                type="text"
                name="stdaadhaar"
                placeholder="Enter Aadhaar No"
                onChange={(e) => props.changeData(e)}
              />
            </div>
            <div class="input-field">
              <label>Student Whatsapp No</label>
              <input
                type="text"
                name="stdwhatsapp"
                placeholder="Enter Whatsapp No"
                onChange={(e) => props.changeData(e)}
              />
            </div>
            <div class="input-field">
              <label>Email ID</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email ID"
                onChange={(e) => props.changeData(e)}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionSec2;
