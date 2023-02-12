
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostContent } from "./post/PostContent";

type TContent = {
  id: string;
  photo: string;
};

export const Content = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8888/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {isLoading && (
        <h2 style={{ textAlign: "center" }}>Идет загрузка поста</h2>
      )}

      {data ? (
        data.map((item: TContent) => {
          return (
            <Link to="/full" key={item.id} onClick={() => setIsLoading(true)}>
              <PostContent {...item} setIsLoading={setIsLoading} />
            </Link>
          );
        })
      ) : (
        <h2 style={{ textAlign: "center" }}> Идет загрузка постов</h2>
      )}
    </div>
  );
};
