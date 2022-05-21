import React from "react";
import Arrow from "../../images/arrow.png";
import goldStack from "../../images/gold-stack.png";
import firstCoin from "../../images/firstCoin.png";
import secondCoin from "../../images/secondCoin.png";
import whiteStar from "../../images/star3.png";
import "./bottom.css";

export default function Bottom() {
  return (
    <div className="bottom">
      <button className="button">
        <p>Play The Game</p>
        <img src={Arrow} alt="" />
      </button>
      <div className="goldDiv">
        <img className="firstCoin" src={firstCoin} alt="firstCoin" />
        <img className="goldStack" src={goldStack} alt="goldStack" />
        <img className="secondCoin" src={secondCoin} alt="secondCoin" />
        <div className="main-spinner">
          <p className="spinning-light first"></p>
          <p className="spinning-light second"></p>
          <p className="spinning-light third"></p>
          <p className="spinning-light fourth"></p>
          <p className="spinning-light fifth"></p>
          <p className="spinning-light sixth"></p>
        </div>
        <img className="whiteStar first" src={whiteStar} alt="whiteStar" />
        <img className="whiteStar second" src={whiteStar} alt="whiteStar" />
        <img className="whiteStar third" src={whiteStar} alt="whiteStar" />
        <img className="whiteStar fourth" src={whiteStar} alt="whiteStar" />
        <div id="grad"></div>
      </div>
    </div>
  );
}
