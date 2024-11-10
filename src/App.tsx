import {
  Header,
  Hero,
  About,
  Skill,
  Work,
  Review,
  Contact,
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
