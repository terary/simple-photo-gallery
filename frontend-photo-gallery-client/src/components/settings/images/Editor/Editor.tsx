import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import Editor from "@toast-ui/editor";
import { useEffect } from "react";
// const Editor = {
//   // Theme object to extends default dark theme.
// };
const myTheme = {};

export const MyComponent = () => {
  //   useEffect(() => {
  //     const editor = new Editor({
  //       el: document.querySelector("#editor") as HTMLElement,
  //       height: "500px",
  //       initialEditType: "markdown",
  //       previewStyle: "vertical",
  //     });
  //   }, []);
  //   return <div id="editor"></div>;
  return (
    <ImageEditor
      includeUI={{
        loadImage: {
          path: "img/sampleImage.jpg",
          name: "SampleImage",
        },
        theme: myTheme,
        menu: ["shape", "filter"],
        initMenu: "filter",
        uiSize: {
          width: "1000px",
          height: "700px",
        },
        menuBarPosition: "bottom",
      }}
      cssMaxHeight={500}
      cssMaxWidth={700}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
      usageStatistics={true}
    />
  );
};
