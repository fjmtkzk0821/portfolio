import * as express from "express";
import TagRepository from "../repository/tag";

const tagRouter = express.Router();

tagRouter.get("/", async (req, res) => {
    const tags = await TagRepository.getAll();
    return res.json(tags);
});

export { tagRouter };
