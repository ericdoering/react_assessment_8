import React, { useState } from "react";
import MadlibList from "./MadlibList";
import MadlibForm from "./MadlibForm";

function MadlibSentence () {
  const [madlibs, setMadlib] = useState([]);

  const create = newMadlib => {
    setMadlib(madlib => [...madlibs, newMadlib]);
  };


  const madlibComponents = madlibs.map(madlib => (
    <MadlibList
      adjective={madlib.adjective}
      noun={madlib.noun}
      verb={madlib.verb}
    />
  ));

  return (
    <div>
      <MadlibForm createMadlib={create} />
      <ul>{madlibComponents}</ul>
    </div>
  );
}

export default MadlibSentence;
