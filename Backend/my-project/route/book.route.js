
import { getBook } from "../controller/book.controller.js";
import { Router } from 'express';

const router =Router();

router.get("/", getBook);

export default router;