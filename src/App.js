import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/topnav/Nav";
import Dukatech from "./pages/Dukatech";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Dukatech />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
