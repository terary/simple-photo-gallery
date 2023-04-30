"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideShow = void 0;
var react_1 = __importDefault(require("react"));
var react_slideshow_image_1 = require("react-slideshow-image");
require("react-slideshow-image/dist/styles.css");
var spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
};
var divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '1000px'
};
var slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
    },
];
var SlideShow = function () {
    return (<div className="slide-container">
        <react_slideshow_image_1.Slide>
         {slideImages.map(function (slideImage, index) { return (<div key={index}>
              <div style={__assign(__assign({}, divStyle), { 'backgroundImage': "url(" + slideImage.url + ")" })}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>); })} 
        </react_slideshow_image_1.Slide>
      </div>);
};
exports.SlideShow = SlideShow;
//# sourceMappingURL=SlideShow.js.map