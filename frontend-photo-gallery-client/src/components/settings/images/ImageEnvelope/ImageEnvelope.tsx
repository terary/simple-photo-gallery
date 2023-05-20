import type { TImageEnvelope } from "./type";

export const ImageEnvelope = (props: { imageEnvelope: TImageEnvelope }) => {
  const remoteHost = "http://localhost:3333";
  // const imageEnvelope: TImageEnvelope = {
  //   url: "/images/13",
  //   title: "This is a tes",
  //   id: "13",
  //   dimensions: {
  //     height: "130px",
  //     width: "125px",
  //   },
  // };

  const { url, title, id, dimensions } = props.imageEnvelope;
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>URL</th>
          <th>dimensions</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{url}</td>
          <td>{JSON.stringify(dimensions)}</td>
          <td>
            <img
              height={dimensions?.height}
              width={dimensions?.width}
              src={`${remoteHost}${url}`}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
