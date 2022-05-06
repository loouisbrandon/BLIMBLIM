import express from 'express';
import mongoose from 'mongoose';
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';

const router = express.Router();

router.post('/', async (req, res) => {
  var busboy = new Busboy({ headers: req.header});
  busboy.on('finish', async () => {
     try {
        
        //req.body = não for arquivos
        //req.files = arquivos
        
        //UPLOAD DA IMAGEM
        if (req.files) {
            const file = req.files.photo;
        }

        //CRIAR USUARIO

     } catch (err) {
         res.json({ error: true, message: err.message});
     }
  });
  req.pipe(busboy);
});



export default router;
