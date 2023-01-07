import React from "react";
import { useState } from "react";
import "./styles.css";

const Mybooks = {
  Blockchain: [
    { name: "Mastering Ethereum", Rating: "4.8/5" },
    { name: "Solana in Nutshell", Rating: "4.7/5" }
  ],

  NonFiction: [
    { name: "Almanack of Naval Ravikant", Rating: "5/5" },
    { name: "The Selfish Gene", Rating: "4.5/5" }
  ],

  Business: [
    { name: "Rework", Rating: "4.5/5" },
    { name: "Zero to 1", Rating: "4.8/5" }
  ]
};

export default function App() {
  const [getBooks, setBooks] = useState("Business");
  function BookHandler(fiction) {
    setBooks(fiction);
  }
  return (
    <div className="App">
      <h1> 📚 BroadBrains </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite Books. Select a genre to get started
      </p>

      <div>
        {Object.keys(Mybooks).map((fiction) => (
          <button className="button" onClick={() => BookHandler(fiction)}>
            {fiction}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Mybooks[getBooks].map((author) => (
            <li className="list">
              <div style={{ fontSize: "larger" }}> {author.name} </div>
              <div style={{ fontSize: "smaller" }}> {author.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
