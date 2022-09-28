const express=require('express');
const departmentModel=require('./model/department');

const app=express();

const addDepartment=async(req,res)=>{
    const departmentName="cse";
    const sliderPhotos=[""];
    const departmentImage=" ";
    const departmentDescription="some description";
    const missionDescription="some mission";
    const activitiesList=[""];
    const newsList=[""];
    const clubs=[{}];
    const hodMesssage="some message";
    const hodName="name";

    try {
        
    
    const department=await departmentModel.create({
        departmentName,
        sliderPhotos,
        departmentImage,
        departmentDescription,
        missionDescription,
        activitiesList,
        newsList,
        clubs,
        hodMesssage,
        hodName
    });

    res.end("added department details")
} catch (error) {
        console.log(error)
}
}

app.post('/',addDepartment);

module.exports=app;