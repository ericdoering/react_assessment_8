import React, { useState } from "react";
import MadlibList from "./MadlibList";
import MadlibForm from "./MadlibForm";

let flag = false;

function MadlibSentence () {
  const [madlibs, setMadlib] = useState([]);

  const create = newMadlib => {
    setMadlib(madlibs => [...madlibs, newMadlib]);
    flag = true;
  };


  const madlibComponents = madlibs.map(madlib => (
    <MadlibList
      passage={madlib.passage}
      adjective={madlib.adjective}
      noun={madlib.noun}
      verb={madlib.verb}
    />
  ));
  if(flag === true){
    return(
    <div>
        <ul>{madlibComponents}</ul>
    </div>
    )
  }
  return (
      <div>
       <MadlibForm createMadlib={create} />
      </div>
  );
}

export default MadlibSentence;
