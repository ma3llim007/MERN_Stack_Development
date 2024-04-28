import { useEffect, useState } from "react";
import { BlogCard, EmptyMessage } from "../components";

const Blogs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=14565f4ebd264024815ce7677df68f1d')
      .then(reponse => reponse.json())
      .then(FetchData => (setData(FetchData)))
  }, [])
  return (
    <>
      <div className="container justify-content-center align-content-center mt-5">
        <div className="row">
          {
            data ?
              data.articles.map((item) => (<BlogCard ItemData={item} />))
              :
              <EmptyMessage />
          }
        </div>
      </div>
    </>
  )
}

export default Blogs;