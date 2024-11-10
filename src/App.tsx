import {
  Header,
  Hero,
  About,
  Skill,
  Work,
  Review,
  Contact,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
    </>
  );
}

export default App;
