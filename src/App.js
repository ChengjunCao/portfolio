import "./styles/styles.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PuzzlesPage from "./pages/PuzzlesPage/PuzzlesPage";
import DrinksupPage from "./pages/DrinksupPage/DrinksupPage";
import DreamislandPage from "./pages/DreamislandPage/DreamislandPage";
import BlackjackPage from "./pages/BlackjackPage/BlackjackPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <WelcomePage />} />
        <Route exact path="/about" render={() => <AboutPage />} />
        <Route exact path="/projects" render={() => <ProjectsPage />} />
        <Route exact path="/contact" render={() => <ContactPage />} />
        <Route exact path="/puzzles" render={() => <PuzzlesPage />} />
        <Route exact path="/drinksup" render={() => <DrinksupPage />} />
        <Route exact path="/dreamisland" render={() => <DreamislandPage />} />
        <Route exact path="/blackjack" render={() => <BlackjackPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
