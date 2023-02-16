const express = require('express')


const getAllData=require("./methods");

const routes=express.Router();

routes.get('/',getAllData.getAll);


module.exports=routes