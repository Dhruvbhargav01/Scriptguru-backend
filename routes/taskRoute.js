const express = require("express");
const {
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// PUT /tasks/:id → update task
router.put("/:id", updateTask);

// DELETE /tasks/:id → delete task
router.delete("/:id", deleteTask);

module.exports = router;
