import express from "express";
import TaskManagementSchema from "../schema/Schema";

const router = express.Router();

router.post("/", async (req, res) => {
  const task = new TaskManagementSchema(req.body);
  try {
    const saved: any | undefined = await task.save();
    res.status(200).json({ message: saved });
  } catch (error:any) {
    res.status(400).send(error);
  }
});

export {router as PostRouter};
