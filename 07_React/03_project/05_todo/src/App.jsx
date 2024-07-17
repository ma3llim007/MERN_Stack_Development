import { useForm } from "react-hook-form";
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import Table from "./components/Table";
import EmptyTable from "./components/EmptyTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  const [updateform, setUpdateForm] = useState(false);
  const [id, setId] = useState(null);

  const onSubmit = (data) => {
    const newTodo = {
      id: uuid().slice(0, 8),
      title: data.title,
      description: data.description,
    }
    setTodo([...todo, newTodo]);
    reset();
    toast.success('Notes SuccessFully Added', {
      position: "bottom-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const deleteTodo = (id) => {
    let updateTodes = todo.filter((todo) => todo.id !== id);
    setTodo(updateTodes);
    toast.error('Notes Deleted Successfully', {
      position: "bottom-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const updateTodo = (id, title, desc) => {
    setUpdateForm(true);
    setId(id);
    setTitle(title);
    setDesc(desc);
  }

  const onUpdateSubmit = (data) => {
    if (data.type == 'click') {
      let updateTodes = todo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title, description: desc }
        }
        return todo;
      });
      setId(null)
      setTitle(null)
      setDesc(null)
      setUpdateForm(false);
      setTodo(updateTodes);
    }
  }

  return (
    <>
      <h1 className="h1 fw-bold text-center text-decoration-underline text-primary">Notes Taking</h1>
      <div className="container my-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="h3 fw-semibold text-white">Add Notes 📝</h3>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-white">Enter The Title</label>
            <input type="text" className="form-control" id="title" placeholder="Enter The Title"
              {
              ...register("title", {
                required: {
                  value: true,
                  message: "Title Is required"
                },
                maxLength: {
                  value: 15,
                  message: "Title Should Be Less Then 15 Character",
                },
                minLength: {
                  value: 3,
                  message: "Title Should Be Atleast 3 Character",
                }
              })
              }
            />
            <p className="text-danger fw-bold">{errors.title?.message}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label text-white">Enter The Description</label>
            <textarea className="form-control" id="description" rows="3" placeholder="Enter The Description"
              {
              ...register("description", {
                required: {
                  value: true,
                  message: "Description Is required"
                },
                minLength: {
                  value: 3,
                  message: "Description Should Be Atleast 3 Character",
                },
              })
              }
            ></textarea>
            <p className="text-danger fw-bold">{errors.description?.message}</p>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
      {
        updateform ? (
          <div className="container my-3">
            <form>
              <h3 className="h3 fw-semibold text-white">Update Notes 📝</h3>
              <div className="mb-3">
                <label htmlFor="title" className="form-label text-white">Update The Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter The Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label text-white">Update The Description</label>
                <textarea className="form-control" id="description" rows="3" placeholder="Enter The Description" value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>
              </div>
              <button type="button" onClick={onUpdateSubmit} className="btn btn-primary">Update</button>
            </form>
          </div>
        ) : ''
      }
      <div className="container">
        {
          todo ? <Table todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} /> : <EmptyTable />
        }

      </div>
      <ToastContainer limit={3} />
    </>
  )
}

export default App
