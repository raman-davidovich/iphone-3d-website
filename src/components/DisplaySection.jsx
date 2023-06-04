import { handleScroll } from "../lib/utils";

function DisplaySection({ triggerPreview }) {
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that's up to 2x brighter in the sun.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button
        className="back-button"
        onClick={(e) => handleScroll("jumbotron-section", e)}
      >
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
