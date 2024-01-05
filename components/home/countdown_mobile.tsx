import React from "react";
import Countdown from "./countdown";
type Props = {};
function CountdownMobile({}: Props) {
  return (
    <div className="countdown_mobile">
      <div className="counter_block">
        <div className="counter_block_text">Challenge starting in</div>
        <div id="clockdiv" className="counter_digit_block">
          <div className="block">
            <div className="counter_digit days " />
            <span>days</span>
          </div>
          <div className="block">
            <div className="counter_digit hours" />
            <span>hours</span>
          </div>
          <div className="block">
            <div className="counter_digit minutes" />
            <span>mins</span>
          </div>
          <div className="block">
            <div className="counter_digit seconds" />
            <span>secs</span>
          </div>
        </div>
      </div>
      <Countdown />
    </div>
  );
}
export default CountdownMobile;
