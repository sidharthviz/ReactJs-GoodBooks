import React from "react";
import { useState } from "react";
import "./styles.css";

const Mybooks = {
  Blockchain: [
    {
      name: "Mastering Ethereum",
      Rating: " Rating: ( 4.5 / 5 )",
      Description: "A perfect Book for Understand the core of Ethereum."
    },
    {
      name: "Solana in nutshell",
      Rating: " Rating: (5 / 5)",
      Description:
        "Understand the Core use of Solana and why it's much faster in development."
    },
    {
      name: "Mastering Bitcoin",
      Rating: "Rating: (4 / 5)",
      Description:
        "Go Through the White Paper in order to Understand the use of Blockchain."
    },
    {
      name: "Ethereum Yellow paper",
      Rating: "Rating: (5 / 5)",
      Description:
        "How Ethereum 2.0 is Changing the whole Blockchain World in Proof of stake."
    }
  ],

  Psychology: [
    {
      name: "Thinking Fast & Slow",
      Rating: " Rating: ( 5 / 5 )",
      Description:
        " Why we do such things and how the brains are wired by two process."
    },
    {
      name: "Games People Play",
      Rating: " Rating: ( 4.8 / 5 )",
      Description: "A deep Psychology of Human Relationship."
    },
    {
      name: "Deviate",
      Rating: " Rating: ( 4.5 / 5 )",
      Description: " Science of seeing things diffrently."
    },
    {
      name: "Think Again",
      Rating: " Rating: ( 4 / 5 )",
      Description: "Everything we think deserves a second Chance."
    }
  ],

  NonFiction: [
    {
      name: "Homo-Dues",
      Rating: " Rating: ( 4.3 / 5 )",
      Description: "The Brief History Of Tomorrow."
    },
    {
      name: "Selfish Gene",
      Rating: " Rating: ( 4.6 / 5 )",
      Description:
        "The Theory of Evolution and How it's all Connected to our Genes."
    },
    {
      name: "4 Hour Work Week",
      Rating: " Rating: ( 4.7 / 5 )",
      Description:
        "Escape 9-5 and Live Anywhere Around the World, Join the New Rich."
    },
    {
      name: "Life 3.0",
      Rating: " Rating: ( 4.5 / 5 )",
      Description: "Being Human in the age of AI."
    }
  ],
  Business: [
    {
      name: "Rework",
      Rating: " Rating: ( 4 / 5 )",
      Description: " Art of starting again."
    },
    {
      name: "Zero To 1",
      Rating: " Rating: ( 4.2 / 5 )",
      Description: " How to Start a Business From Scratch."
    },
    {
      name: "$100M Offer ",
      Rating: " Rating: ( 4.8 / 5 )",
      Description: " How to make an offer Nobody can refuse."
    },
    {
      name: "No Rules Rules",
      Rating: " Rating: ( 5 / 5 )",
      Description: "Culture of Reinvention."
    }
  ]
};

export default function App() {
  const [getBooks, setBooks] = useState("Blockchain");

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
      {Mybooks[getBooks].map((author) => (
        <li className="list">
          <div style={{ fontSize: "Larger" }}> {author.name} </div>
          <div style={{ fontSize: "smaller" }}> {author.Rating} </div>
          <div style={{ fontSize: "medium" }}> {author.Description} </div>
        </li>
      ))}
    </div>
  );
}
