import React, { useEffect, useState } from "react";
import "./Meme.css";
import "./Form.css";
import icon from "../../icons8-photo-50.png";
export default function Meme() {
  // set text to the meme
  let [topText, setTopText] = useState("");
  let changeTopText = () => {
    setTopText((topText = document.getElementById("topInp").value));
  };
  let [bottomText, setBottomText] = useState("");
  let changeBottomText = () => {
    setBottomText((bottomText = document.getElementById("bottonInp").value));
  };

  // set meme picture randomlly
  let [Img, setImg] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setImg(data);
    }
    getData();
  }, []);
  function getMeme() {
    let random = Math.floor(Math.random() * Img.data.memes.length);
    setImg((prvData) => ({
      ...prvData,
      currImg: prvData.data.memes[random].url,
    }));
  }
  let fun = function handleClick() {
    setTopText("");
    setBottomText("");
    document.getElementById("topInp").value = "";
    document.getElementById("bottonInp").value = "";

    getMeme();
  };

  return (
    <>
      <div className="form">
        <div className="input--box">
          <input
            type="text"
            placeholder="top text"
            id="topInp"
            onChange={changeTopText}
          ></input>
          <input
            type="text"
            placeholder="bottom text"
            id="bottonInp"
            onChange={changeBottomText}
          ></input>
        </div>
        <button className="btn" onClick={fun}>
          <img src={icon} />
          Get a new photo meme
        </button>
      </div>
      <div className="meme">
        <div className="img--box">
          <img src={Img.currImg} />
          <p className="top--text">{topText}</p>
          <p className="bottom--text">{bottomText}</p>
        </div>
      </div>
    </>
  );
}
