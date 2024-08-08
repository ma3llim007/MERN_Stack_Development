const DataTable = ({ data, DeleteItem }) => {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-9 my-2 table-responsive">
                    <table className="table table-striped table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.title}</td>
                                            <td>{item.category}</td>
                                            <td>₹{item.amount}</td>
                                            <td>
                                                <button onClick={() => DeleteItem(index)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DataTable;