const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    departmentName:{
        type:String,
        required:true
    },
    sliderPhotos:{
        type:[String],
        required:true
    },
    departmentImage:{
        type:String,
        required:true
    },
    departmentDescription:{
        type:String,
        required:true
    },
    missionDescription:{
        type:String,
        required:true
    },
    activitiesList:{
        type:[String],
        required:true
    },
    newsList:{
        type:[String],
        required:true
    },
    clubs:{
        type:[Object],
        required:true
    },
    hodMesssage:{
        type:String,
        required:true
    },
    hodName:{
        type:String,
        required:true
    },
    topPlacementList:{
        type:[Object],
    }
},{
    timestamps:true
})

const Model=new mongoose.model('Departments',schema);
module.exports=Model;