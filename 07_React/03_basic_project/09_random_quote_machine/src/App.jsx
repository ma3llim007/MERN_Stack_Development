import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);

    // Predefined quotes as fallback
    const defaultQuotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs",
        },
        {
            text: "Life is what happens to you while you're busy making other plans.",
            author: "John Lennon",
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney",
        },
    ];

    // Function to fetch a random quote
    const fetchRandomQuote = async () => {
        setLoading(true);
        try {
            // Try to fetch from an external API first
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();

            if (data.content && data.author) {
                setQuote(data.content);
                setAuthor(data.author);
            } else {
                // Fallback to default quotes if API fails
                const randomIndex = Math.floor(Math.random() * defaultQuotes.length);
                setQuote(defaultQuotes[randomIndex].text);
                setAuthor(defaultQuotes[randomIndex].author);
            }
        } catch (error) {
            // Fallback to default quotes if fetch fails
            const randomIndex = Math.floor(Math.random() * defaultQuotes.length);
            setQuote(defaultQuotes[randomIndex].text);
            setAuthor(defaultQuotes[randomIndex].author);
        }
        setLoading(false);
    };

    // Load a quote on component mount
    useEffect(() => {
        fetchRandomQuote();
    }, []);

    // Function to handle new quote button click
    const handleNewQuote = () => {
        fetchRandomQuote();
    };

    // Function to create tweet URL
    const getTweetUrl = () => {
        const tweetText = `"${quote}" - ${author}`;
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    };

    return (
        <div className="App">
            <div id="quote-box" className="quote-box">
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <>
                        <div className="quote-content">
                            <div id="text" className="quote-text">
                                <i className="fas fa-quote-left"></i> {quote}
                            </div>
                            <div id="author" className="quote-author">
                                - {author}
                            </div>
                        </div>
                        <div className="quote-actions">
                            <button id="new-quote" className="new-quote-btn" onClick={handleNewQuote}>
                                New Quote
                            </button>
                            <a id="tweet-quote" className="tweet-quote-btn" href={getTweetUrl()} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i> Tweet Quote
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;