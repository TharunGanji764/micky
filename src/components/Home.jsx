import styled from "styled-components";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import StartCanvas from "./canvas/Stars";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Home = () => {
  return (
    <Body>
      <StartCanvas />
      <div>
        <Hero />
        <Wrapper>
          <Skills />
        </Wrapper>
        <Projects />
        <Wrapper>
          <Contact />
        </Wrapper>
        <Footer />
      </div>
    </Body>
  );
};
export default Home;
