import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
