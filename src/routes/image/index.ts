import { Router } from "express";
import { images } from "../../utils/randomImage";

const imageRouter = Router();

imageRouter.get('/api/image', (req, res) => {
    return res.json({
        image: images
    }).send();
})

export default imageRouter;