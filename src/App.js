import React from "react";
import { Route } from "react-router-dom";
import Tab from "./components/Tab"
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/" component={SearchForm}/>
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
