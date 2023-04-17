import  express  from "express";
import TasksController  from "./tasksController.js";

const TasksRouter=express.Router();

TasksRouter.get("/",TasksController.getList)
TasksRouter.get("/:id",TasksController.getById)
TasksRouter.post("/",TasksController.add)
TasksRouter.put("/:id",TasksController.update)
TasksRouter.delete("/",TasksController.delete)

export default TasksRouter;



