import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Phonetics(props){
  const [phonetics, setPhonetics] = useState({});
  function showResponse(response){
    setPhonetics(response.data[0].phonetics[1]);
    console.log(response.data[0].phonetics[1])

}
useEffect(()=>{
  const apiPhonetics = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.keyword}`;
  axios.get(apiPhonetics).then(showResponse);
},[props.keyword])

  return (
    <div>
      <audio controls src={phonetics.audio} type="audio/mp3">
      </audio>
    </div>
  );

}    




