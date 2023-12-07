import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
import "./index.css";
import AppLayout from "./Components/AppLayout";
import { Suspense, useState } from "react";
import Spinner from "./Components/Spinner";
import Country from "./Components/Country";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={<AppLayout dark={dark} setDark={setDark} />}
          />
          <Route path="/:cca3" element={<Country dark={dark} setDark={setDark} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
