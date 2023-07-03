import dotenv from "dotenv"
import express from "express"
import cors from "cors";
import sql from "mssql";

dotenv.config();

const { PORT, DB_USER, DB_PWD, DB_SERVER, DB_DATABASE } = process.env;
const port = PORT || 4000;

const config = {
  user: DB_USER,
  password: DB_PWD,
  server: DB_SERVER,
  database: DB_DATABASE,
  options: {
    encrypt: false
  },
};

sql.connect(config, function (err) {
  if (err) {
    return console.error(`error : ${err}`);
  }

  console.log(`MSSQL 연결 완료`);
});

const app = express();

app.use(express.urlencoded({ extended: true })); // parsing query string
app.use(express.json()); // parsing request json
app.use(cors()); // 모든 http 요청을 허용한다.

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

