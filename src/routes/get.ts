import express from "express";
import TaskManagementSchema from "../schema/Schema";

interface TaskManagement {
  admin: Boolean;
  userID: String;
  status: String;
  task: String;
  deadline: String;
}

const router = express.Router();

router.get("/", async (req: any, res: any) => {
  const taskData: TaskManagement[] | null = await TaskManagementSchema.find({
    userID: req.query.userID,
  });
  taskData
    ? res.status(200).json(taskData)
    : res.status(400).send("No data found");
});

export { router as GetRouter };