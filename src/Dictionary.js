import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function Dictionary() {
  const [wordData, setWordData] = useState({});
  const [keyword, setKeyword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const api_call = async (e) => {
    e.preventDefault();
    const word = e.target.elements.word.value;

    if (!word) {
      setAlertMessage("Enter a word");
      return;
    }

    const apiKey = "f0t6f37fo7eacab2cf93452fbe48b35c";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    const request = axios.get(apiUrl);
    const response = await request;
    setWordData(response.data);
    setKeyword(response.data.word);
    setAlertMessage("");
    console.log(response.data);
  };
  wordData && console.log(wordData);
  return (
    <div>
      <form onSubmit={api_call}>
        <input name="word" type="search" autoFocus="on" />
        <input type="submit" value="Search" />
      </form>
      {alertMessage && <div style={{ color: "red" }}>{alertMessage}</div>}

      <div>
        {wordData && <DisplayData wordData={wordData} keyword={keyword} />}
      </div>
    </div>
  );
}
