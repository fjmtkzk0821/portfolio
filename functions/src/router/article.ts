import * as express from "express";
import ArticleRepository from "../repository/article";
import TagRepository from "../repository/tag";
import ArchiveRepository from "../repository/archive";
import WorkRepository from "../repository/work";

const articleRouter = express.Router();

articleRouter.get("/latest", async (req, res) => {
    const [articles, tags, archives] = await Promise.all([
        ArticleRepository.getLatest(null),
        TagRepository.getAll(),
        ArchiveRepository.getAll(),
    ]);
    return res.json({
        articles: articles,
        tags: tags,
        archives: archives,
    });
});

articleRouter.get("/latest/:doc", async (req, res) => {
    if (!req.params.doc) {
        throw Error;
    }
    const articles = await ArticleRepository.getLatest(req.params.doc);
    return res.json(articles);
});

articleRouter.get("/search", async (req, res) => {
    const tag = req.query.tag as string;
    const archive = req.query.archive as string;
    const [articles, tags, archives] = await Promise.all([
        ArticleRepository.search(
            tag, archive, ""
        ),
        TagRepository.getAll(),
        ArchiveRepository.getAll(),
    ]);
    return res.json({
        articles: articles,
        tags: tags,
        archives: archives,
    });
});
articleRouter.get("/search/:doc", async (req, res) => {
    const tag = req.query.tag as string;
    const archive = req.query.archive as string;
    const [articles, tags, archives] = await Promise.all([
        ArticleRepository.search(
            tag, archive, req.params.doc
        ),
        TagRepository.getAll(),
        ArchiveRepository.getAll(),
    ]);
    return res.json({
        articles: articles,
        tags: tags,
        archives: archives,
    });
});

articleRouter.get("/:id", async (req, res) => {
    if (!req.params.id) {
        throw Error;
    }
    const article = await ArticleRepository.getArticle(req.params.id);
    return res.json({
        article: article,
        recommend: [],
    });
});

articleRouter.get("/dev/setTemp", async (req, res) => {
    ArticleRepository.setTemp();
    ArchiveRepository.setTemp();
    TagRepository.setTemp();
    WorkRepository.setTemp();
    console.log("Temp Data Loaded.");
    return res.sendStatus(200);
});

export { articleRouter };
