import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Hero textOne={"100 Thousand Songs, ad-free"} textTwo={"Over thousands podcast episodes"}/>
    </>

  );
}

export default App;
