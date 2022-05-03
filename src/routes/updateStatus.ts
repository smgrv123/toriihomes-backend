import express from "express";
import TaskManagementSchema from "../schema/Schema";

const router = express.Router();

router.put("/", async (req: any, res: any) => {
  try {
    const updateItem: any = await TaskManagementSchema.updateOne(
      {
        _id: req.query._id,
      },
      { $set: { status: req.body.status } }
    );
    res.send(updateItem);
  } catch (error) {
      res.status(400).send(error);
  }
});

export { router as updateStatusRoute };
