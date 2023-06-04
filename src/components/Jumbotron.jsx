import Iphone from "../assets/images/iphone-14.avif";
import HoldingIphone from "../assets/images/iphone-hand.webp";
import CTA from "./shared/CTA";

function Jumbotron() {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <CTA selector="jumbotron-section" />
      <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
    </div>
  );
}

export default Jumbotron;
