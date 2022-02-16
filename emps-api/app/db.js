import mongoose from 'mongoose';
import env from '../env';

mongoose.Promise=global.Promise;

let modelSchema = mongoose.Schema({
    id:Number,
    name:String,
    salary:Number
});

mongoose.connect(env.DB_URL,{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to mongodb server...!");
})
.catch((err)=>{
    console.log(`Failed to Connected to mongodb server: ${err}`);
    process.exit();
});

const getEmps = () => {
    return modelSchema.find();
};

const getEmpById = id => {
    return modelSchema.findById(id);
};

const saveEmp = emp => {
    let empModel = new modelSchema(emp);
    return empModel.save();
};

const deleteEmp = id => {
    modelSchema.findByIdAndRemove(id);
};

export default {getEmpById,getEmps,saveEmp,deleteEmp};