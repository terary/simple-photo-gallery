import axios from "axios";
import React from "react";
import type { TImageEnvelope } from "./settings/images/ImageEnvelope";
import { ImageEnvelope } from "./settings/images/ImageEnvelope";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://localhost:3333/api/imageEnvelope/random";
//
export default function AxiosCall() {
  const [post, setPost] = React.useState(null);
  const [imageProps, setImageProps] = React.useState({} as TImageEnvelope);

  React.useEffect(() => {
    console.log("pre-call");
    axios.get(baseURL).then((response) => {
      console.log("call response", { data: response.data });
      const imageEnvelope = response.data;
      console.log({ imageEnvelope });
      // setPost(response.data);
      setImageProps(imageEnvelope);
    });
  }, []);

  return (
    <div>
      <h1>Axios Call</h1>
      <h1>{JSON.stringify(post)}</h1>
      <h1>{JSON.stringify(imageProps)}</h1>
      {imageProps.id && <ImageEnvelope imageEnvelope={imageProps} />}
      {!imageProps.id && <span> no image props </span>}
    </div>
  );
}
