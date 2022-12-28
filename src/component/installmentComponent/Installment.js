import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./InstallmentStyle.css";
import loader from "../../assets/loaderLogin.gif";
const Installment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [formno, setFormNo] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [date, setDate] = useState("");
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    fetch("https://backend-5wmv.vercel.app/installment").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        // setIsLoading(false);
      });
    });
  }, []);

  function searchData(e) {
    e.preventDefault();
    data.map((student) => {
      if (student.formno === Number(formno)) {
        setFinalData(student);
        setDate(new Date(student.admdate));
      }
    });
  }
  //for post method
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
  const [val, setVal] = useState({
    formno: "",
    course: finalData.course,
    session: finalData.session,
    batch: finalData.batch,
    studentname: finalData.studentname,
    instno: "",
    billno: "",
    instdate: "",
    instpay: "",
    instdue: "",
    instfine: "",
  });
  let [instArr, setInstArr] = useState([]);
  function containInstNo(no) {
    setInstArr([...instArr, no]);
  }
  useEffect(() => {
    setVal({
      course: finalData.course,
      session: finalData.session,
      batch: finalData.batch,
      studentname: finalData.studentname,
    });
  }, [finalData]);
  function validateForm() {
    const { instpay } = val;
    if (instpay === "") {
      toast.error("Please Enter Payment Value!", toastOption);
      return false;
    }
    return true;
  }
  const PostData = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      for (let i = 0; i < instArr.length; i++) {
        const {
          formno,
          course,
          session,
          batch,
          studentname,
          billno,
          instdate,
          instpay,
          instdue,
          instfine,
        } = val;
        const instno = instArr[i];
        const { data } = await axios.post("https://backend-5wmv.vercel.app/installment/installment",{
            formno,
            course,
            session,
            batch,
            studentname,
            instno,
            billno,
            instdate,
            instpay,
            instdue,
            instfine,
          }
        );
        if (data.status === false && i === 0) {
          setIsLoading(false);
          toast.error(data.msg, toastOption);
        }
        if (data.status && i === 0) {
          setIsLoading(false);
          toast(data.msg, successNotification);
        }
      }
    }
  };
  function changeData(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
  }

  return (
    <div className="inst-head">
      <div className="inst-content">
        <div className="sec-title">
          <div className="inst-title">Installment</div>
          {isLoading && (
            <>
              <img src={loader} alt="loader" className="loader" />
            </>
          )}
          <div className="sec-serach">
            <label>Form No</label>
            <input type="text" onChange={(e) => setFormNo(e.target.value)} />
            <button onClick={(e) => searchData(e)}>Search</button>
          </div>
        </div>
        <div className="upper">
          <div>Bill No. </div>
          <div>
            Session : <span className="values">{finalData.session}</span>
          </div>
          <div>
            Form No : <span className="values">{finalData.formno}</span>
          </div>
        </div>
        <div className="upper-mid">
          <div>
            Admission Date :{" "}
            <span className="values">
              {date !== ""
                ? date.getDate() +
                  "-" +
                  month[date.getMonth()] +
                  "-" +
                  date.getFullYear()
                : null}
            </span>
          </div>
          <div>
            Course : <span className="values">{finalData.course}</span>
          </div>
          <div>
            Batch : <span className="values">{finalData.batch}</span>
          </div>
        </div>
        <div className="mid-lower">
          <div>
            Name : <span className="values">{finalData.studentname}</span>
          </div>
          <div>
            Father Name : <span className="values">{finalData.fathername}</span>
          </div>
          <div>
            Viillage : <span className="values">{finalData.village}</span>
          </div>
          <div>
            Post Office : <span className="values">{finalData.postoffice}</span>
          </div>
        </div>
        <div className="lower">
          <div className="installment">
            <div>
              Select All <input type="checkbox" />{" "}
            </div>
            <div>
              Admission
              <input type="checkbox" />
            </div>
            <div>
              1st Inst
              <input type="checkbox" onChange={(e) => containInstNo("1st")} />
            </div>
            <div>
              2nd Inst
              <input type="checkbox" onChange={(e) => containInstNo("2nd")} />
            </div>
            <div>
              3rd Inst
              <input type="checkbox" onChange={(e) => containInstNo("3rd")} />
            </div>
            <div>
              4th Inst
              <input type="checkbox" onChange={(e) => containInstNo("4th")} />
            </div>
          </div>
          <div className="paid-detatils">
            <div>
              <label>Date</label>
              <input
                type="date"
                name="instdate"
                onChange={(e) => changeData(e)}
              />
            </div>
            <div>Total Amount</div>
            <div className="pay">
              Pay
              <input
                type="text"
                name="instpay"
                onChange={(e) => changeData(e)}
              />
            </div>
            <div>
              Due
              <input
                type="text"
                name="instdue"
                onChange={(e) => changeData(e)}
              />
            </div>
            <div>
              Fine
              <input
                type="text"
                name="instfine"
                onChange={(e) => changeData(e)}
              />
            </div>
          </div>

          <div className="btn-section">
            <button onClick={(e) => PostData(e)}>Save</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installment;
