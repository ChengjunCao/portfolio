import '../../styles/styles.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WelcomePage from '../WelcomePage/WelcomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ContactPage from '../ContactPage/ContactPage';
import PuzzlesPage from '../PuzzlesPage/PuzzlesPage';
import DrinksupPage from '../DrinksupPage/DrinksupPage';
import DreamislandPage from '../DreamislandPage/DreamislandPage';
import BlackjackPage from '../BlackjackPage/BlackjackPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() =>
            <WelcomePage />
        }/>
        <Route exact path='/about' render={() =>
            <AboutPage />
        }/>
        <Route exact path='/projects' render={() =>
            <ProjectsPage />
        }/>
        <Route exact path='/contact' render={() =>
            <ContactPage />
        }/>
        <Route exact path='/puzzles' render={() =>
            <PuzzlesPage />
        }/>
        <Route exact path='/drinksup' render={() =>
            <DrinksupPage />
        }/>
        <Route exact path='/dreamisland' render={() =>
            <DreamislandPage />
        }/>
        <Route exact path='/blackjack' render={() =>
            <BlackjackPage />
        }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
