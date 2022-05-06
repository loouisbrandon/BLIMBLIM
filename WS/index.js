import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import busboy from 'connect-busboy';
import busboyBodyParser from 'busboy-body-parser';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(busboy.json());
app.use(busboyBodyParser());
app.use(cors());

app.listen(8000, () => {
    console.log('WS RODANDO');
});