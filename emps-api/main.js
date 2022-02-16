import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import app from './app/app';
import env from './env';

let router = express.Router();
router.get('/',app.getEmps);
router.get('/:id',app.getEmpById);
router.post('/',app.saveEmp);
router.put('/',app.saveEmp);
router.delete('/:id',app.deleteEmp);

let server = express();

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(cors());
server.use("/students",router);

server.listen(env.PORT,()=>{
    console.log("app is ready...!");
});

