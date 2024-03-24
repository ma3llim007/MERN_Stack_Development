import { useParams } from "react-router-dom";

const BlogDetails = () => {
  let {slug} = useParams();
  const BlogTitle = slug.replaceAll("-",' ')
  return (
    <>
      <div className="container">
      <h1 className="h1 fw-bold text-center text-decoration-underline text-primary m-5">{BlogTitle}</h1> 
    </div>
    </>
  )
}

export default BlogDetails;