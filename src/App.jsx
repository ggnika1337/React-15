import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/User/Login";
import Website from "./Pages/Website/Website";
import Register from "./Pages/User/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/browse" element={<Website />} />
          <Route
            path="*"
            element={
              <h1 className="text-red-700 text-[50px] flex self-center w-full justify-center">
                404 || NOT FOUND
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
