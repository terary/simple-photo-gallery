import axios from "axios";
import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://localhost:3333/api/imageEnvelope/random";
//
export default function AxiosCall() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    console.log("pre-call");
    axios.get(baseURL).then((response) => {
      console.log("call response");
      setPost(response.data);
    });
  }, []);

  if (!post) return <h2>No Post Found</h2>;

  return (
    <div>
      <h1>Axios Call</h1>
      <h1>{JSON.stringify(post)}</h1>
    </div>
  );
}
