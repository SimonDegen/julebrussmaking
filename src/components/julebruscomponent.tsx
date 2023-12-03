import React, { useState, useEffect } from "react";
import { JulebrusInfo } from "../App";

type props = {
  backgroundImage: string;
  julebrusNummer: number;
  tekst: string;
  isLast: boolean;
  setChanging: (changing: boolean) => void;
  changing: boolean;
};

function JuleBrusComponent({
  backgroundImage,
  julebrusNummer,
  tekst,
  isLast,
  setChanging,
  changing,
}: props) {
  const [type, setType] = useState(
    localStorage.getItem(`${julebrusNummer}-type`) ||
      "Velg hvilken julebrus du tror dette er!"
  );
  const [rating, setRating] = useState(
    localStorage.getItem(`${julebrusNummer}-rating`) || "0"
  );

  useEffect(() => {
    localStorage.setItem(`${julebrusNummer}-type`, type);
    setChanging(!changing);
  }, [type]);

  useEffect(() => {
    localStorage.setItem(`${julebrusNummer}-rating`, rating as string);
    setChanging(!changing);
  }, [rating]);

  const nextJulebrus = julebrusNummer + 1;
  const prevJulebrus = julebrusNummer - 1;
  return (
    <div id={"Julebrus" + julebrusNummer} className="hero min-h-screen">
      <div className="hero-content text-center p-0 box-border">
        <div className="max-w-md ">
          <h1 className="text-5xl font-bold text-white">
            Julebrus nummer {julebrusNummer}
          </h1>
          <select
            className="select select-error w-full max-w-xs my-8"
            onChange={(e) => setType(e.target.value)}
            defaultValue={type}
          >
            <option disabled>Velg hvilken julebrus du tror dette er!</option>
            <option>Solo super JB</option>
            <option>Grans JB</option>
            <option>Grans JB uten sukker</option>
            <option>Aass JB</option>
            <option>Aass JB uten sukker</option>
            <option>JB Hamar</option>
            <option>JB Hamar sukkerfri</option>
          </select>

          <input
            type="range"
            min={1}
            max="5"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value).toString())}
            className="range range-success"
            step="1"
          />
          <div className="w-full flex justify-between text-xs px-2 mb-8 text-white">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>

          {isLast && (
            <a href="#table" className="btn btn-success mr-4">
              Se oversikt
            </a>
          )}
          {!isLast && (
            <a
              href={"#Julebrus" + nextJulebrus}
              className="btn btn-success mr-4 text-white"
            >
              Neste julebrus
            </a>
          )}
          <a
            href={"#Julebrus" + prevJulebrus}
            className="btn btn-error text-white"
          >
            Forrige julebrus
          </a>
        </div>
      </div>
    </div>
  );
}

export default JuleBrusComponent;
