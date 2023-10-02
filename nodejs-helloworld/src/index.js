import express from 'express';
import cors from 'cors';

const PORT = 5000;

const app = express();
app.use(express.urlencoded({ extended: true })); // parsing query string
app.use(express.json()); // parsing request json
app.use(cors()); // 모든 http 요청을 허용한다.

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}!!`);
});
