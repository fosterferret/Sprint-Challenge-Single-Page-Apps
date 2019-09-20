import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodesList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <>
      <main>
        <Header />
        <TabNav />
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/" component={SearchForm}/>
        <Route path="/characters" component={CharacterList} />
        <Route path="/location" component={LocationsList} />
        <Route path='/episodes' component={EpisodeList} />
      </main>
    </>
  );
}