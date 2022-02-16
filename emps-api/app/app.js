import service from './service'

const getEmps = (req,resp) => {
    service.getEmps().
        then(data => {
            resp.status(200);
            resp.send(data);
        }).
        catch(err =>{
            resp.status(500);
            resp.send();
        });
};

const getEmpById = (req,resp) => {
    let id = req.params.id;
    if(id){
        service.getEmpById(id).
        then(emp => {
            emp?resp.status(200):resp.status(404);
            resp.send(emp);
        }).
        catch(err =>{
            resp.status(500);
            resp.send();
        });
    }else{
        resp.status(400);
        resp.send();
    }
};

const saveEmp = (req,resp) => {
    let emp = req.body;
    service.saveEmp(emp).
    then(data => {
        resp.status(201);
        resp.send(data);
    }).
    catch(err =>{
        resp.status(500);
        resp.send();
    });
};

const deleteEmp = (req,resp) => {
    let id = req.params.id;
    service.deleteEmp(id).
    then(() => {
        resp.status(204);
        resp.send();
    }).
    catch(err =>{
        resp.status(500);
        resp.send();
    });
};

export default {getEmpById,getEmps,saveEmp,deleteEmp};