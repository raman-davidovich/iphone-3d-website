import { handleScroll } from "../../lib/utils";

function CTA({ selector }) {
  return (
    <ul className="links">
      <li>
        <button className="button">Buy</button>
      </li>
      <li>
        <a href="#" className="link" onClick={(e) => handleScroll(selector, e)}>
          Learn more
        </a>
      </li>
    </ul>
  );
}

export default CTA;
