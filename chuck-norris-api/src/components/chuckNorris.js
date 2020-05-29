import React, { useState, useEffect } from "react";
import axios from "axios";

const Chuck = () => {
  const [types, setTypes] = useState([]);
  const [string, setString] = useState("");
  const fetchData = async () => {
    try {
      let res = await axios.get("http://api.icndb.com/jokes");
      setTypes(res.data.value);
    } catch (err) {
      setTypes([]);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const random = () => {
    let randomFact = Math.floor(Math.random() * types.length);
    setString(types[randomFact].joke);
  };

  return (
    <div>
      <h1>Chuck Norris Facts Generator</h1>
      <button onClick={random}>Click!</button>
      <h4>{string}</h4>
    </div>
  );
};
export default Chuck;
