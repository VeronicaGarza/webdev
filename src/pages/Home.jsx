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
        <button onClick={learnMore}>Learn More</button>
      </section></div>
  )
}

export default Home
