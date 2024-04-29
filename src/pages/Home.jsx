import Navbar from "../components/Navbar"

const Home = () => {
  const learnMore = () => {
    console.log('Learn More button clicked');
    // Add any additional functionality here
  };
  return (
    <div>
      <Navbar />
      <section id="mainpage">
        <h1 id="mainpage_title">
          Out and About
        </h1>
        <h4 id="mainpage_quote">
          Share your knowledge with the Boston student community
        </h4>
        <p id="mainpage_blurb">
          Feel empowered to take charge of your financial future. Planning for tomorrow while enjoying the present is key. Your success story starts here.
        </p>
        <img
              src="https://cdn.glitch.global/61ed9e23-9b4a-4a20-83b1-e45aff56fc8f/people.svg?v=1714353619362"
              alt="boxes"
              className="boxes"
            />
      </section>
      </div>
  )
}

export default Home
