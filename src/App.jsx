import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ListPage from "./pages/ListPage";
import PropertyPage from "./pages/PropertyPage";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/category" element={<CategoryPage />}/>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/property" element={<PropertyPage />} />
        </Routes>
      </BrowserRouter> */}
      <h1>Test</h1>
    </div>
  );
}

export default App;
