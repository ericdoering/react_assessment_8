import React, { useState } from "react";

function MadlibList({ adjective = "squishy", noun = "bear", verb = "running", id = 1, update}) {
  const [editAdjective, setEditAdjective] = useState(adjective);
  const [editNoun, setEditNoun] = useState(noun);
  const [editVerb, setEditVerb] = useState(verb);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const handleChange = evt => {
    setEditAdjective(evt.target.value);
    setEditNoun(evt.target.value);
    setEditVerb(evt.target.value);
  };


  const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editAdjective);
    update(id, editNoun);
    update(id, editVerb);
    setIsEditing(false);
  };

  let jsx = (
    <div>
      <h2>The {adjective} {noun} {verb} all the way down the street.</h2>
    </div>
  );

  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editAdjective} onChange={handleChange} />
          <input type="text" value={editNoun} onChange={handleChange} />
          <input type="text" value={editVerb} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default MadlibList;