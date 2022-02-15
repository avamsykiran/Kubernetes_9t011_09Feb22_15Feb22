import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import app from './app/app';

express.apply(cors());
express.apply(bodyParser());

express.Router().get('/students',app.getEmps);
express.Router().get('/students/:id',app.getEmpById);
express.Router().post('/students',app.saveEmp);
express.Router().put('/students',app.saveEmp);
express.Router().delete('/students/:id',app.deleteEmp);

console.log("app is ready...!");