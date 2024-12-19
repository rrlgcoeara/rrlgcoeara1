import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundEffect from "../components/BackgroundEffect";

function Routing() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-900">
        <div>
          <BackgroundEffect></BackgroundEffect>
        </div>
        <Container>
          <Navbar></Navbar>
          <div className="container mx-auto px-8 pt-8">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </Container>
      </div>
    </>
  );
}

export default Routing;
