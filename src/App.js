import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage/homepage";
import Contact from "./ContactPage/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contact" element={<Contact />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
