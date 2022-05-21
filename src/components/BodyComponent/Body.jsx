import React from "react";
import "./body.css";

export const Body = () => {
  return (
    <div>
      <div className="main-body">
        <div className="top-stars"></div>
        <div className="main-text">
          <span> Unlock to </span>{" "}
          <span className="bold-text"> Power your dreams! </span>
        </div>
        <div className="other-text">
          <span> Stand a chance to win </span> <b>N3,000,000</b> everyday for
          the next 5 days
        </div>
        <div class="desc-card">
          <div className="title-text">
            {" "}
            <span className="bulb-text">🚀 </span> How To Play{" "}
          </div>
          <div>
            <div className="list-text">
              <div>
                <div> 1. Guess the right combination of numbers</div>
                <div>
                  {" "}
                  2. Win <b>N3,000,000</b> instantly{" "}
                </div>
              </div>
              <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
            </div>
            <div className="small-card">
              <span className="bulb-text">💡</span>
              <div>
                Think well before you guess. You have only <b>2</b> attempts per
                day and even after you wi, you can come back the next day to try
                for another jackpot!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
