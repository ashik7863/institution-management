import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "../../assets/loaderLogin.gif";
const ViewStudent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [btnUpdate, setBtnUpdate] = useState(false);
  const [data, setData] = useState([]);
  //   const [date, setDate] = useState("");
  useEffect(() => {
    fetch("https://backend-5wmv.vercel.app/viewinstallment").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setIsLoading(false);
      });
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <img src={loader} alt="loader" className="loaderView" />
        </>
      ) : (
        <div className="view-students">
          <section>
            <span class="view-title">Installment Details</span>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th className="sticky-col first-col h">Installment Date</th>
                    <th>Student Name</th>
                    <th>Session</th>
                    <th>Batch</th>
                    <th>Bill No</th>
                    <th>Intsallment No</th>
                    <th>Paid Amount</th>
                    <th>Fine</th>
                    <th>Due</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((student) => (
                    <tr>
                      <td className="sticky-col first-col">
                        {String(student.instdate).substr(0, 10)}
                      </td>
                      <td>{student.studentname}</td>
                      <td>{student.session}</td>
                      <td>{student.batch}</td>
                      <td>{student.billno}</td>
                      <td>{student.instno}</td>
                      <td>{student.instpay}</td>
                      <td>{student.instfine}</td>
                      <td>{student.instdue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ViewStudent;
