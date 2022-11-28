import React from "react";
import { Link } from "react-router-dom";
const AdmissionSec3 = () => {
  return (
    <div className="admsec3">
      <div className="adm-inner">
        <div className="adm-head">Admission</div>
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
  );
};

export default AdmissionSec3;
