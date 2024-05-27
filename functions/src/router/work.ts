import express from "express";
import WorkRepository from "../repository/work";

const workRouter = express.Router();

workRouter.get("/", async (req, res) => {
    const works = await WorkRepository.get();
    return res.json({
        works: works,
    });
});

export { workRouter };
