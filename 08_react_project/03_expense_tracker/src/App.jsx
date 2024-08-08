import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import DataTable from "./components/DataTable";
import EmptyTable from "./components/EmptyTable";
import AddForm from "./components/AddForm";

function App() {
  const { reset } = useForm();

  const [data, setData] = useState('');
  let notes = localStorage.getItem("expense");
  let notesObj = JSON.parse(notes);

  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  const loadData = () => {
    setData(notesObj);
  }

  useEffect(() => {
    loadData();
  }, []);

  const DeleteItem = (index) => {
    notesObj.splice(index, 1);
    localStorage.setItem("expense", JSON.stringify(notesObj));
    loadData();
    toast.error('Expense Item Delete!', {
      position: "bottom-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const onSubmit = (data) => {
    notesObj.push(data);
    localStorage.setItem("expense", JSON.stringify(notesObj));
    reset();
    toast.success('Expense Added Succcessfully!', {
      position: "bottom-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    loadData();
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-12 my-2">
            <h1 className="h1 text-bold text-center text-primary text-decoration-underline fw-bold">Expense Tracker</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <AddForm onSubmit={onSubmit} />
        </div>
        <hr className="text-white" />
        {
          data.length ? <DataTable data={data} DeleteItem={DeleteItem} /> : <EmptyTable />

        }


      </div>
    </>
  )
}

export default App;
