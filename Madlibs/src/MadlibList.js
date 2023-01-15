import React, { useState } from "react";

function MadlibList({passage= 1, adjective = "squishy", noun = "bear", verb = "running"}) {

if(passage === "1"){
  let jsx = (
    <div>
        <h2>The {adjective} {noun} {verb} all the way down the street.</h2>
    </div>
  );
  return jsx;
}
if(passage ===  "2"){
  let jsx = (
    <div>
        <h2>{verb} away said the {adjective} {noun} before it's too late.</h2>
    </div>
  );
  return jsx;
}
if(passage === "3"){
  let jsx = (
    <div>
        <h2>It is important that the {noun} gets plenty of {verb} or they will be a very {adjective} {noun}</h2>
    </div>
  );
  return jsx;
}
}

export default MadlibList;