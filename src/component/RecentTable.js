import React from "react";
import students from "../data/student.json";
import recentstudents from "../data/RecentStudent.json";
const RecentTable = () => {
  return (
    <div className="recent-grid">
      <div className="projects">
        <div className="card">
          <div className="card-header">
            <h3>Recent Inquiry</h3>
            <button>
              See all <span className="las la arrow right"></span>
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table width="110%">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Course</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.course}</td>
                      <td>
                        <span
                          className={
                            student.status === "Pending"
                              ? "status orange"
                              : "review"
                              ? "status purple"
                              : "status pink"
                          }
                        ></span>
                        {student.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="customers">
        <div className="card">
          <div className="card-header">
            <h3>Recent Students</h3>
            <button>
              See all <span className="las la arrow right"></span>
            </button>
          </div>
          <div className="card-body">
            {recentstudents.map((student) => (
              <div className="customer">
                <div className="info">
                  <img src={student.image} height="40px" width="40px" alt="" />
                  <div>
                    <h4>{student.name}</h4>
                    <small>{student.course}</small>
                  </div>
                </div>
                <div contact>
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTable;
