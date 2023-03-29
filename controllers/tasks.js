const Task  = require('../models/Task');

//get
const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(201).json({tasks : tasks})
    }
    catch(err){
        res.status(500).json({msg : err});
    }
}

//post
const createTask = async (req, res) => { 
    try{
        const newTask = await Task.create(req.body);
        res.status(201).json({newTask});
    }
    catch(err){
        res.status(500).json({msg : err});
    }
}

//get
const getTask = async (req, res) => {
    try{
        // use the name taskID in place of id
        const {id : taskID} = req.params;
        const task = await Task.findOne({_id : taskID});

        if(!task) res.status(404).json({msg : `No task with id : ${taskID}`});
        res.status(200).json({task : task});
    }  
    catch(err){
        res.status(500).json({msg : err});
    }
}
//patch
const updateTask = async (req, res) => {
    try{
        const {id : taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id : taskID}, req.body, {
            new : true,
            runValidators : true,
        });

        if(!task) res.status(404).json({msg : `No task with taskID : ${taskID}`});
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg : err});
    }
}

//delete
const deleteTask = async (req, res) => {
    try{
        const {id : taskID} = req.params;
        const task = await Task.findOneAndDelete({_id : taskID});

        if(!task) res.status(404).json({msg : `No task with id ${taskID}`});
        res.status(200).json({task : task});
    }   
    catch(err){
        res.status(500).json({msg : err});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};