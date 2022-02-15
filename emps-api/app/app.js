import service from './service'

const getEmps = (req,resp) => resp.send(service.getEmps());

const getEmpById = (req,resp) => {
    let id = req.params.id;
    if(id){
        let emp = service.getEmpById(id);
        emp?resp.send(emp):resp.end();
    }else{
        resp.end();
    }
};

const saveEmp = (req,resp) => {
    let emp = req.body;
    emp = service.saveEmp(emp);
    resp.send(emp);
};

const deleteEmp = (req,resp) => {
    let id = req.params.id;
    service.deleteEmp(id);
    resp.send();
};

export default {getEmpById,getEmps,saveEmp,deleteEmp};