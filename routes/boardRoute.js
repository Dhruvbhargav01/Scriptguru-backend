const express = require('express');

const {getBoards, createBoard, getBoardTasks, createTaskInBoard} = require("../controllers/boardController.js");

const router = express.Router();

router.get("/", getBoards);
router.post("/", createBoard);

router.get("/:id/tasks", getBoardTasks);
router.post("/:id/tasks", createTaskInBoard);

module.exports = router;