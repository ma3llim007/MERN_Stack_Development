import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const Navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="h1 fw-bold text-center text-decoration-underline text-primary m-5">Dashboard</h1>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => { Navigate('/logout')}} className="btn btn-primary">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;