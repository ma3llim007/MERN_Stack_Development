import { useForm } from 'react-hook-form'
let componentsRender = 0;

const YoutubeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    componentsRender++;

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <h1 className='text-center fw-bold text-decoration-underline'>Component Render:- {componentsRender / 2}</h1>
                    {/* <h2 className='text-center mt-3'>Watch Value:- { watchValue }</h2> */}
                    <div className="col-md-8">
                        <form className="mt-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter The Username"
                                    {...register("username",
                                        {
                                            required: {
                                                value: true,
                                                message: "Username Is Required",
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Username Should Be Less Then 15 Character",
                                            },
                                            minLength: {
                                                value: 5,
                                                message: "Username Should Be Atleast 5 Character",
                                            },
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/,
                                                message: 'Only characters are allowed'
                                            }
                                        }
                                    )}
                                />
                                <p className='mt-2 fw-bold text-danger'>{errors.username?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter The Email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email Is Required",
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid Email"
                                        },
                                        validate: {
                                            notAdmin: (value) => {
                                                return (
                                                    value !== "admin@admin.com" || "Enter a different email address"
                                                )
                                            },
                                            notDomain: (value) => {
                                                return (
                                                    !value.endsWith("test.com") || "This Domain Is Not Supported"
                                                )
                                            }
                                        }
                                    }
                                    )}
                                />
                                <p className='mt-2 fw-bold text-danger'>{errors.email?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="channelName" className="form-label">Channel Name</label>
                                <input type="text" className="form-control" id="channelName" placeholder="Enter The Channel Name"
                                    {...register("channelName",
                                        {
                                            required: {
                                                value: true,
                                                message: "Channel Is Required",
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Channel Name Should Be Less Then 15 Character",
                                            },
                                            minLength: {
                                                value: 5,
                                                message: "Channel Name Should Be Atleast 5 Character",
                                            },
                                        })
                                    } />
                                <p className='mt-2 fw-bold text-danger'>{errors.channelName?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="text" className="form-control" id="age" placeholder="Enter The Age"
                                    {...register("age",
                                        {
                                            // valueAsNumber: true,
                                            required: {
                                                value: true,
                                                message: "Age Is Required",
                                            },
                                            maxLength: {
                                                value: 2,
                                                message: "Channel Name Should Be Less Then 2 Character",
                                            },
                                            minLength: {
                                                value: 1,
                                                message: "Channel Name Should Be Atleast 1 Character",
                                            },
                                            pattern: {
                                                value: /^[0-9]+$/,
                                                message: 'Only Nummeric characters are allowed'
                                            }

                                        })
                                    } />
                                <p className='mt-2 fw-bold text-danger'>{errors.age?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dob" className="form-label">Date Of Birth</label>
                                <input type="date" className="form-control" id="dob" placeholder="Enter The Date Of Birth"
                                    {...register("dob",
                                        {
                                            required: {
                                                value: true,
                                                message: "Date Of Birth Is Required",
                                            },
                                        })
                                    } />
                                <p className='mt-2 fw-bold text-danger'>{errors.dob?.message}</p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default YoutubeForm;