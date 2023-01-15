import React, { useState } from "react";
import {v4 as uuid} from "uuid";


function MadlibForm({ createMadlib }) {
  const [passage, setPassage] = useState("")
  const [adjective, setAdjective] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");

  const handlePassage = evt => {
    setPassage(evt.target.value)
  }

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
        passage, id: uuid(),
        adjective, id: uuid(),
        noun, id: uuid(),
        verb, id: uuid()
    });
    setPassage("");
    setAdjective("");
    setNoun("");
    setVerb("");
  };

  return (
    <div>
      <p>Fill in the prompts below</p>
      <form onSubmit={gatherInput}>
      <label htmlFor="passsage">Passage:</label>
        <input
          id="passage"
          name="passage"
          type="text"
          onChange={handlePassage}
          value={passage}
        />
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