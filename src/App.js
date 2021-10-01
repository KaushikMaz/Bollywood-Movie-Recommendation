import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  RajkumarRao: [
    { name: "Kai Po che!!", year: "2013" },
    { name: "Shahid ", year: "2012" },
    { name: "Aligarh ", year: "2015" },
    { name: "Trapped ", year: "2016" }
  ],

  VickyKaushal: [
    { name: "Uri:The surgical Strike", year: "2019" },
    { name: "Masaan", year: "2015" },
    { name: "Psycho Raman", year: "2016" },
    { name: "Raazi ", year: "2018" }
  ],
  ManojBajpayee: [
    { name: "Satya", year: "1998" },
    { name: "Shool", year: "1999" },
    { name: "Aligarh", year: "2015" },
    { name: "Gangs Of Wasseypur", year: "2012" }
  ],
  NawazuddinSiddiqui: [
    { name: "Manjhi", year: "2015" },
    { name: "Manto", year: "2018" },
    { name: "Kahaani", year: "2012" },
    { name: "Gangs of Wasseypur", year: "2012" }
  ],
  IrfaanKhan: [
    { name: "Lunch Box", year: "2013" },
    { name: "Piku", year: "2015" },
    { name: "Paan singh Tomar", year: "2010" },
    { name: "Maqbool", year: "2003" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("RajkumarRao");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Bollywood Movies Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Lets Checkout the best movies of these Bollywood Stars. Select a Name to
        get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#48456b",
              borderRadius: "0.5rem",
              padding: "0.7rem  1.5rem",
              border: "1px solid black",
              margin: "1rem 0.4rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #111827",
                background: "#48456b",
                width: "90%",
                margin: "1rem 0rem",
                borderRadius: "0.6rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.year} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
