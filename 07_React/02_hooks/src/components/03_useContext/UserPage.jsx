import { useContext } from "react";
import { DashboardContext } from "../../context/context";

const UserPage = () => {
  const userData = useContext(DashboardContext);
  return (
    <>
      <div className="card">
        <h2>UserPage</h2>
        {JSON.stringify(userData)}
      </div>
    </>
  )
}

export default UserPage;