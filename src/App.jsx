/* eslint-disable no-unused-vars */

import Header from "./components/first-section/header";

import About from "./components/secoundSection/About";
import Features from "./components/thirdSection/Features";
import Tours from "./components/forthSection/Tours";
import Stories from "./components/fifthSection/Stories";
import Booking from "./components/sixthSection/booking";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Popup from "./components/Popup";

function App() {
 
  return (
    <>
      <Navigation />
      <main>
        <Header />
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
