import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/RecipesHero/Layout ";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Recipe from "./pages/Recipe";
import Signin from "./components/RecipesHero/Signin";
import Subscribe from "./pages/Subscribe";
import RecipeDetail from "./components/RecipesHero/RecipeDetail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<News />} />
            <Route path="recipe" element={<Recipe />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="signin" element={<Signin />} />
            <Route path="recipes/:id" element={<RecipeDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
