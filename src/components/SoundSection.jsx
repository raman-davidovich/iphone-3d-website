import CTA from "./shared/CTA";

function SoundSection() {
  // TODO: create shared function with one argunent and use here;
  const handleLearnMore = (e) => {
    e.preventDefault();
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound system</h2>
          <p className="text">Feel the base.</p>
          <span className="description">
            From $41.62/mo. for 24 mo. or $999 before trade-in
          </span>
          <CTA handleClick={handleLearnMore} />
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
