const Task = require("../models/Task");

//Update the task
exports.updateTask = async (req, res) => {
 
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id, //taking task id from url
            req.body,
            {new: true},
        );
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};

// Delete the task

exports.deleteTask = async (req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message: "Task deleted successfully"});
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};