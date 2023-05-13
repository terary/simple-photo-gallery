import express from "express";
import path from 'path'

const app = express();
const IMAGE_DIRECTORY = '/mypart/tmc/projects/photo-gallery/images';
type TImageItem = {
  url:string,
  title?: string,
  id: string,
  dimensions?: {
    height: string;
    width: string;
  }
}
const images: {[imageId:string]: TImageItem} = {
  '13' : {
    url: '/images/13',
    title: 'This is a tes',
    id: '13',
    dimensions: {
      height: '130px',
      width: '125px'
    }
  }
}
app.use(express.static('./dist/client', {
  
}
));
 
app.get('/api', (req,res)=>{
  res.send('Hello World');
})

app.get('/api/echo', (req,res)=>{
  const {body, query} = req;
  res.send({
    body, query
  });
})


app.get('/api/imageEnvelope/random', (req,res)=>{

  res.json({...images['13']})
})

app.get('/api/image/:imageId', (req,res)=>{
  res.sendFile(path.join(IMAGE_DIRECTORY, 'middle-finger-kid.jpg'))
})


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/client', (req, res)=>{
  res.sendFile(path.join(__dirname, "client", "index.html"));
})

app.get("/Hello", (req, res) => {
  res.send("World!");
});

/*
PORT could be set via environment variable (e.g. by Google Cloud
or some other could service). Fallback to your desired PORT.
*/
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  // only log this information in development.
  if (process.env?.NODE_ENV !== "production")
    console.log(`server listening at http://localhost:${PORT}`);
});

