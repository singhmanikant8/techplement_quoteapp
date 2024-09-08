const Quote = require('../models/quote');

// Controller to create a new quote
exports.createQuote = async (req, res) => {
    try {
        const { text, author } = req.body;

        // Initialize a new Quote object
        const quote = new Quote({ text, author });

        // Save the new quote to the database
        const savedQuote = await quote.save();

        // Respond with the saved quote
        res.json({
            quote: savedQuote,
        });
    } catch (err) {
        // Handle errors in creating a quote
        return res.status(400).json({
            error: 'Error while creating post',
        });
    }
};

// Controller to fetch a random quote
exports.getQuote = async (req, res) => {
    try {
        // Use MongoDB's aggregation pipeline to fetch one random document
        const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }]);

        // Check if a random quote was found
        if (randomQuote.length > 0) {
            return res.json(randomQuote[0]); // Send the first result in the array
        } else {
            return res.status(404).json({ message: 'No quotes found' });
        }
    } catch (error) {
        // Handle any errors that occur
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Controller to search quotes by author
exports.searchQuote = async (req, res) => {
    try {
        const authorName = req.query.author; // Get author from the query string

        if (!authorName) {
            return res.status(400).json({ message: 'Author name is required' });
        }

        const quotes = await Quote.find({ author: authorName });

        if (quotes.length > 0) {
            return res.json(quotes);
        } else {
            return res.status(404).json({ message: 'No quotes found for this author' });
        }
    } catch (error) {
        // Handle any errors that occur
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};
