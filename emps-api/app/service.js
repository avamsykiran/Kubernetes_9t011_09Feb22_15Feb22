import db from './db';

const isValid = emp => {
    let isValid=true;
    let errs =[];
    
    if(emp.id<=0){
        isValid=false;
        errs.push("Invlid emp id");
    }

    if(!emp.name || emp.name.length<=5){
        isValid=false;
        errs.push("Invlid emp name or a blank emp name");
    }

    if(!emp.salary || emp.salary<0){
        isValid=false;
        errs.push("Invlid emp salary or a blank emp salary");
    }

    if(!isValid){
        let errMsg ="";
        errs.forEach(err => {errMsg+=(err+";");});
        throw new Error(errMsg);
    }

    return isValid;
};

const getEmps = () => db.getEmps();

const getEmpById = id => db.getEmpById(id);

const saveEmp = emp => {
    let result = null;
    if(emp){
        if(isValid(emp)){
            result = db.saveEmp(emp);
        }
    }
    return result;
};

const deleteEmp = id => db.deleteEmp(id);

export default {getEmpById,getEmps,saveEmp,deleteEmp};