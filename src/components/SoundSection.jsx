function SoundSection() {
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound system</h2>
          <p className="text">Feel the base.</p>
          <span className="description">
            From $41.62/mo. for 24 mo. or $999 before trade-in
          </span>
          {/* TODO: make the sharet component with buttons and reuse it here and in Jumbotron component */}
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a className="link">Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
