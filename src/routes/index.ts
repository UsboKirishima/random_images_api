import { Router } from "express";
import imageRouter from "./image";

const router = Router();

router.use('/image', imageRouter);

export default router;