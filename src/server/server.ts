import express from "express";
import path from "path";
import cors from "cors";

const app = express();

const allowedOrigins = ["localhost"];

const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  //  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  // origin: "API_URL",
  preflightContinue: false,
};
app.use(cors(corsOptions));

const IMAGE_DIRECTORY = "/mypart/tmc/projects/photo-gallery/images";
type TImageEnvelope = {
  url: string;
  title?: string;
  id: string;
  dimensions?: {
    height: string;
    width: string;
  };
};
const images: { [imageId: string]: TImageEnvelope } = {
  "13": {
    url: "/images/13",
    title: "This is a tes",
    id: "13",
    dimensions: {
      height: "130px",
      width: "125px",
    },
  },
};
app.use(express.static("./dist/client", {}));

app.get("/api", (req, res) => {
  res.send("Hello World");
});

app.get("/api/echo", (req, res) => {
  const { body, query } = req;
  res.send({
    body,
    query,
  });
});

app.get("/api/imageEnvelope/random", (req, res) => {
  res.json({ ...images["13"] });
});

app.get("/api/image/:imageId", (req, res) => {
  res.sendFile(path.join(IMAGE_DIRECTORY, "middle-finger-kid.jpg"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/client", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.get("/Hello", (req, res) => {
  res.send("World!");
});

/*
PORT could be set via environment variable (e.g. by Google Cloud
or some other could service). Fallback to your desired PORT.
*/
const PORT = process.env.PORT ?? 3333;

app.listen(PORT, () => {
  // only log this information in development.
  if (process.env?.NODE_ENV !== "production")
    console.log(`server listening at http://localhost:${PORT}`);
});
