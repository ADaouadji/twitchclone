import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Games from './components/Games/Games';
import TopStreams from './components/TopStreams/TopStreams';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Live from './components/Live/Live';
import GameStreams from './components/GameStreams/GameStreams';
import Resultats from './components/Resultats/Resultats'
import Erreur from './components/Erreur/Erreur';


function App() {
  return (

    <Router
    forceRefresh={true}
    >
        <div className="App">
          <Header />
          <Sidebar />

          <Switch>
              <Route exact path="https://ADaouadji.github.io/" component={Games} />
              <Route exact path="https://ADaouadji.github.io//top-streams" component={TopStreams} />
              <Route exact path="https://ADaouadji.github.io//live/:slug" component={Live} />
              <Route exact path="https://ADaouadji.github.io//game/:slug" component={GameStreams} />
              <Route exact path="https://ADaouadji.github.io//resultats/:slug" component={Resultats} />
              <Route exact path="https://ADaouadji.github.io//resultats/" component={Erreur} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
