import { ImageEnvelope } from "./images/ImageEnvelope";
import AxiosCall from "../AxiosCall";
import { MyComponent } from "./images/Editor/Editor";
export const SettingsPage = () => {
  return (
    <div>
      AxiosCall
      <AxiosCall />
      <MyComponent />
      {/* <ImageEnvelope /> */}
    </div>
  );
};
