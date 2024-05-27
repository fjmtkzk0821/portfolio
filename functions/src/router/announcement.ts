import * as express from "express";
import AnnouncementRepository from "../repository/announcement";

const announcementRouter = express.Router();

announcementRouter.get("/", async (req, res) => {
    const articles = await AnnouncementRepository.getRecent();
    return res.json(articles);
});

announcementRouter.get("/latest/:doc", async (req, res) => {
    const articles = await AnnouncementRepository.getLatest(req.params.doc);
    return res.json(articles);
});

announcementRouter.get("/:id", async (req, res) => {
    if (!req.params.id) {
        throw Error;
    }
    const article = await AnnouncementRepository.getAnnouncement(req.params.id);
    return res.json(article);
});

export { announcementRouter };
