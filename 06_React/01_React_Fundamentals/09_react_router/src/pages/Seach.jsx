import { useSearchParams } from "react-router-dom"


const Seach = () => {
    const [searchParams, setsearchParams] = useSearchParams();
    console.log(searchParams.get('name'));
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="h1 fw-bold text-center text-decoration-underline text-primary m-5">{searchParams.get('name')}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seach
