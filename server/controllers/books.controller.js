import Book from '../models/book.model.js';

async function createBook (req, res) {
    try{
        const newBook= await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export { createBook };