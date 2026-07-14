function HeroSection() {
  return (
    <section className="heroSection" id="intro">
      <div className="heroLeft">
        <p className="eyebrow">Personal Profile</p>
        <h1>Hi, I am DKT.</h1>
        <p className="tagline">
          A web development learner building clean and useful React projects.
        </p>
      </div>
      <div className="heroRight">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10" alt="DKT profile" />
      </div>
    </section>
  )
}

export default HeroSection
