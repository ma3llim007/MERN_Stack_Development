import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify"

const AddForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>
            <form className="col-md-9" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label text-white">Expense Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter The Expense Title"
                        {
                        ...register("title",
                            {
                                required: {
                                    value: true,
                                    message: "Title Is Required",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Title Should Be Less Then 15 Character",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Title Should Be Atleast 3 Character",
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: 'Only characters are allowed'
                                }
                            }
                        )
                        }
                    />
                    <p className='mt-2 fw-bold text-danger'>{errors.title?.message}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label text-white">Select Category</label>
                    <select className="form-select" aria-label="Default select example" id="category"
                        {
                        ...register("category",
                            {
                                required: {
                                    value: true,
                                    message: "Category Is Required",
                                }
                            }
                        )
                        }
                    >
                        <option value="">Select The Category</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="utilties">Utilties</option>
                        <option value="entetainment">Entetainment</option>
                        <option value="other">Other</option>
                    </select>
                    <p className='mt-2 fw-bold text-danger'>{errors.category?.message}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label text-white">Expense Amount</label>
                    <input type="text" className="form-control" id="amount" placeholder="Enter The Expense Amount"
                        {
                        ...register("amount",
                            {
                                required: {
                                    value: true,
                                    message: "Amount is Required"
                                },
                                minLength: {
                                    value: 1,
                                    message: "Amount Should Be Atleast 1 Character"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Only Nummeric characters are allowed'
                                }
                            })
                        }
                    />
                    <p className="mt-2 fw-bold text-danger">{errors.amount?.message}</p>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add Expense</button>
                </div>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
export default AddForm;