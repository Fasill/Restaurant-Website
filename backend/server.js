import express from 'express';
import router from './routers/chatbotRouter.js';
import cors from 'cors';
const app = express();

app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Mount the router
app.use('/', router);


const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
