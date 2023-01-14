import React, { useState } from "react";
import {v4 as uuid} from "uuid";


function MadlibForm({ createMadlib }) {
  const [adjective, setAdjective] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");

  const handleAdjective = evt => {
    setAdjective(evt.target.value);
  };
  const handleNoun = evt => {
    setNoun(evt.target.value);
  };
  const handleVerb = evt => {
    setVerb(evt.target.value);
  };

  const gatherInput = evt => {
    evt.preventDefault();
    createMadlib({ 
        adjective, id: uuid(),
        noun, id: uuid(),
        verb, id: uuid()
    });
    setAdjective("");
    setNoun("");
    setVerb("");
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="adjective">Adjective:</label>
        <input
          id="adjective"
          name="adjective"
          type="text"
          onChange={handleAdjective}
          value={adjective}
        />
        <label htmlFor="noun">Noun:</label>
        <input
          id="noun"
          name="noun"
          type="noun"
          onChange={handleNoun}
          value={noun}
        />
        <label htmlFor="verb">Verb:</label>
        <input
          id="verb"
          name="verb"
          type="text"
          onChange={handleVerb}
          value={verb}
        />
        <button>Create Mad lib</button>
      </form>
    </div>
  );
}

export default MadlibForm;