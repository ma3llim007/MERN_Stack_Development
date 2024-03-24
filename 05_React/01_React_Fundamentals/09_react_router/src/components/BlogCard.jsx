import { Link } from "react-router-dom";

const BlogCard = ({ ItemData }) => {
    const BlogUrl = ItemData.title.replaceAll(" ",'-')
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title fw-bold mb-3">{ItemData.title}</h5>
                    <h6 className="card-subtitle mb-2">{ItemData.author}</h6>
                    <Link to={`/blog-detail/${BlogUrl}`} className="card-link">View More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;