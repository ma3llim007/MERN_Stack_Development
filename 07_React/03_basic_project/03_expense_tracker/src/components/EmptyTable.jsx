const EmptyTable = () => {
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
                            <tr>
                                <td colSpan={5} className="fs-2 text-center fw-bold">Expense Is Empty 🗑️</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default EmptyTable;