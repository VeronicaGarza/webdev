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
          Share your knowledge with the Boston student community
        </h1>
        <p id="mainpage_blurb">
          Start your financial journey towards personal budgeting success
        </p>
        <button onClick={learnMore}>Learn More</button>
      </section></div>
  )
}

export default Home