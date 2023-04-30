"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeShow = void 0;
var react_1 = __importDefault(require("react"));
var react_slideshow_image_1 = require("react-slideshow-image");
require("react-slideshow-image/dist/styles.css");
require("./styles.css");
var fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];
function FadeShow() {
    return (<div className="slide-container">
      <react_slideshow_image_1.Fade duration={1000}>
        <div className="each-fade">
          <img src={fadeImages[0]}/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]}/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]}/>
        </div>
      </react_slideshow_image_1.Fade>
    </div>);
}
exports.FadeShow = FadeShow;
//# sourceMappingURL=FadeShow.js.map