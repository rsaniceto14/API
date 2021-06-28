/**
 * Required External Modules
 */

  import cors from "cors";
  import * as dotenv from "dotenv";
  import express from "express";
  import helmet from "helmet";
  import { useRoutes } from "./routes";
  import bodyParser from 'body-parser';

dotenv.config();


/**
 * App Variables
 */

if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

// const PORT = process.env.PORT || 7000;

const app = express();
app.use(bodyParser.json())
useRoutes(app);
/**
 *  App Configuration
 */


app.use(helmet());
app.use(cors());
app.use(express.json());


/**
 * Server Activation
 */


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



