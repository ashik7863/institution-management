import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateSec1 from "./UpdateSec1";
import loader from "../../assets/loaderLogin.gif";
const ViewStudent = () => {
  const [updateDiv, setUpdateDiv] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editData, setEditData] = useState([]);
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  useEffect(() => {
    fetch(
<<<<<<< HEAD
      "https://backend-5wmv.vercel.app/viewstudent"
=======
      "https://backend-phi-one.vercel.app/viewstudent"
>>>>>>> d85cc1b44d6ab016a0e0c70b74267f815aee9bb9
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setIsLoading(false);
      });
    });
  }, []);
  function updateData(idx) {
    data.map((student, index) => {
      if (idx === index) {
        setEditData([student]);
      }
    });
  }
  useEffect(() => {
    if (editData[0] !== undefined) {
      setDate(String(editData[0].admdate).substr(0, 10));
    }
  }, [editData]);
  return (
    <>
      {isLoading ? (
        <>
          <img src={loader} alt="loader" className="loaderView" />
        </>
      ) : (
        <div className="view-students">
          <section>
            <div className={updateDiv ? "update-sec" : "update-sec close"}>
              <div className="update-head">
                <div className="update-title">Update Student</div>
                <div
                  className="close-btn"
                  onClick={() => setUpdateDiv(!updateDiv)}
                >
                  X
                </div>
              </div>
              <div className="update-inner">
                <UpdateSec1 editData={editData} date={date} />
                <div className="btn-update">
                  <button>Update</button>
                </div>
              </div>
            </div>
            <span class="view-title">View Students</span>
            <div className="filter-main">
              <div></div>
              <div className="filter-sec">
                <div>
                  Category :{"  "}
                  <select name="" id="">
                    <option value="">Form No</option>
                    <option value="">Admission Date</option>
                    <option value="">Course</option>
                    <option value="">Session</option>
                    <option value="">Batch</option>
                    <option value="">Student Name</option>
                  </select>
                </div>
                <div>
                  Type :{"  "}
                  <select name="" id="">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                    <option value="">Equal</option>
                    <option value="">Not Equal</option>
                  </select>
                </div>
                <div className="btn-sec">
                  <button>Filter</button>
                </div>
              </div>
            </div>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th className="sticky-col first-col">Form No</th>
                    <th>Admission Date</th>
                    <th>Course</th>
                    <th>Session</th>
                    <th>Batch</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Village</th>
                    <th>Post Office</th>
                    <th>Police Station</th>
                    <th>Block</th>
                    <th>Panchayet</th>
                    <th>District</th>
                    <th>Pin</th>
                    <th>Caste</th>
                    <th>D.O.B</th>
                    <th>Gender</th>
                    <th>Student Contact</th>
                    <th>Guradian Contact</th>
                    <th>Whatsapp No</th>
                    <th>Aadhaar No</th>
                    <th>Email ID</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((student, idx) => (
                    <tr onClick={() => updateData(idx)}>
                      <td className="sticky-col first-col">{student.formno}</td>
                      <td>{String(student.admdate).substr(0, 10)}</td>
                      <td>{student.course}</td>
                      <td>{student.session}</td>
                      <td>{student.batch}</td>
                      <td>{student.studentname}</td>
                      <td>{student.fathername}</td>
                      <td>{student.village}</td>
                      <td>{student.postoffice}</td>
                      <td>{student.policestation}</td>
                      <td>{student.block}</td>
                      <td>{student.panchayet}</td>
                      <td>{student.district}</td>
                      <td>{student.pin}</td>
                      <td>{student.caste}</td>
                      <td>{student.dob}</td>
                      <td>{student.gender}</td>
                      <td>{student.stdcontact}</td>
                      <td>{student.guardcontact}</td>
                      <td>{student.stdwhatsapp}</td>
                      <td>{student.stdaadhaar}</td>
                      <td>{student.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="btn-sec">
              <button onClick={() => setUpdateDiv(!updateDiv)}>Edit</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ViewStudent;
