import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src={require("./images/logo.png")}
          alt="rick and morty header"
          className="header-logo"
        />
        <h2>I GOT ONE RIGHT HERE - GRAB MY TERRY FLAP!</h2>
      </div>
      <div className="header-right">
        <img
          src={require("./images/rm-eye.png")}
          className="header-img"
          alt="rick-and-morty"
        />
      </div>
    </header>
  );
}
