import React, { useState, useEffect } from "react";
import "./App.css";
import JuleBrusComponent from "./components/julebruscomponent";
import Table from "./components/table";

export type JulebrusInfo = {
  backgroundImage: string;
  julebrusNummer: number;
  tekst: string;
  isLast: boolean;
};

export const juleBruser: JulebrusInfo[] = [
  {
    backgroundImage: "test",
    isLast: false,
    julebrusNummer: 1,
    tekst: "test",
  },
  {
    backgroundImage: "test",
    isLast: false,
    julebrusNummer: 2,
    tekst: "test",
  },
  {
    backgroundImage: "test",
    isLast: false,
    julebrusNummer: 3,
    tekst: "test",
  },
  {
    backgroundImage: "test",
    isLast: false,
    julebrusNummer: 4,
    tekst: "test",
  },
  {
    backgroundImage: "test",
    isLast: false,
    julebrusNummer: 5,
    tekst: "test",
  },
  {
    backgroundImage: "test",
    isLast: false,
    julebrusNummer: 6,
    tekst: "test",
  },
  {
    backgroundImage: "test",
    isLast: true,
    julebrusNummer: 7,
    tekst: "test",
  },
];

function App() {
  const [changing, setChanging] = useState(false);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 text-white z-20 box-border max-w-[100%] overflow-x-hidden">
        <div className="w-full h-full absolute blur-sm">
          <img
            src="https://thumbs.dreamstime.com/b/christmas-presents-gifts-under-tree-vertical-22127493.jpg"
            className="h-full object-fill"
          />
        </div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Julebrus smaking ala Cece & Simon{" "}
            </h1>
            <p className="py-6">
              Vi har håndplukket noen utvalgte julebrus som vi skal smake på. Vi
              håper noen av de faller i smak og gleder oss til å se hvor mange
              dere klarer å gjette riktig.
            </p>
            <a href="#Julebrus1" className="btn btn-success">
              Start smakingen
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen wrapper max-w-full overflow-x-hidden p-8">
        {juleBruser.map((julebrus) => (
          <JuleBrusComponent
            {...julebrus}
            key={julebrus.julebrusNummer}
            setChanging={setChanging}
            changing={changing}
          />
        ))}
        <Table changing={changing} />
      </div>
    </div>
  );
}

export default App;
