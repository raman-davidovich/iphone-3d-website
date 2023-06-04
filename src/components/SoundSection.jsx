import CTA from "./shared/CTA";

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
          <CTA selector="display-section" />
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
