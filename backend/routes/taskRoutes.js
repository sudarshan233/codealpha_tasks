import express from "express";

import {
    getAllTasks, searchTask, createTask,
    updateTask, deleteTask
} from "../controllers/taskContollers.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/search", searchTask);
router.post("/create", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;