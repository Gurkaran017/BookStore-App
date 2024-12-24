import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        // const book = await Book.find();
        // res.status(200).json(book);

        const keyword = req.query.search
        ? {
            $or : [
                {name : {$regex : req.query.search , $options: "i" } },
                {title: {$regex : req.query.search , $options: "i"}},
            ]
        }:{};
        console.log("Keyword:", keyword);
        const book = await Book.find(keyword);
        if (book.length === 0) {
            return res.status(404).json({ message: "No books found." });
          }
        res.status(200).json(book);

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};