type TImageEnvelope = {
  url: string;
  title?: string;
  id: string;
  dimensions?: {
    height: string;
    width: string;
  };
};

export const ImageEnvelope = () => {
  const imageEnvelope: TImageEnvelope = {
    url: "/images/13",
    title: "This is a tes",
    id: "13",
    dimensions: {
      height: "130px",
      width: "125px",
    },
  };

  const {url,title,id,dimensions} = imageEnvelope
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>URL</th>
          <th>dimensions</th>
        </tr>
      </thead>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{url}</td>
        <td>{JSON.stringify(dimensions)}</td>
      </tr>
    </table>
  );
};
