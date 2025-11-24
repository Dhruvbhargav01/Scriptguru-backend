const Board = require("../models/Board");
const Task = require("../models/Task");

// Get All Boards
// this API will help the frontend to show the sidebar list

exports.getBoards = async (req, res) => {
    try{
        const boards = await Board.find().sort({ createdAt: -1 });
        res.json(boards);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// create new board

exports.createBoard = async (req, res) => {
    try {
        const board = new Board({
            name: req.body.name,
        });

        const savedBoard = await board.save();
        res.status(201).json(savedBoard);
    } catch (error) {
        res.status(400).json({ message: error.message }); // fixed
    }
};


//get all tasks of a specific board

exports.getBoardTasks = async (req, res) => {
    try{
        const boardId = req.params.id;
        // it helps to find the tasks that belong to this board
        const tasks = await Task.find({ boardId }).sort({ createdAt: -1 });
        res.json(tasks);
    }catch (err){
        res.status(500).json({ message: err.message});
    }
};

// create a new task inside a specific board

exports.createTaskInBoard = async (req, res) =>{
    try {
        const boardId = req.params.id;

        //create task with all data from frontend + boardId
        const task = new Task({
            ...req.body, //it give me all frontend data
            boardId: boardId,
        });

        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}