import { Router } from "express";

import { createBook, getAllBooks, getOneBook, updateOneBook } from "../controllers/books.controller.js";

const router = Router()

router.route("/books")
    .get( getAllBooks)
    .post( createBook)

router.route("/book/:id")
    .get(getOneBook)
    .post(updateOneBook)

export default router