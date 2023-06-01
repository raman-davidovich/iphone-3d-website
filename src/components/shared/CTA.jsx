function CTA({ handleClick }) {
  return (
    <ul className="links">
      <li>
        <button className="button">Buy</button>
      </li>
      <li>
        <a className="link" onClick={handleClick}>
          Learn more
        </a>
      </li>
    </ul>
  );
}

export default CTA;
