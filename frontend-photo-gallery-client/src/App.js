"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var SlideShow_1 = require("./components/SlideShow");
var srUrls = [
    'https://farm6.staticflickr.com/5229/5601598963_729a9185a2_z.jpg',
    'https://www.aleenta.com/wp-content/uploads/2022/03/aleenta-Songkran_Water_Festival.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg'
];
function App() {
    return (
    // <SlideShow />
    <SlideShow_1.FadeShow />
    // <div className="App">
    // </div>
    );
}
exports.default = App;
//# sourceMappingURL=App.js.map