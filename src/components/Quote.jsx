import React from "react";
import "./QuoteBox.css";

export default function QuoteBox({ quote, author }) {
  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">“{quote}”</p>
        {author && <p className="quote-author">— {author}</p>}
      </div>
    </div>
  );
}