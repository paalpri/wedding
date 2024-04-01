import React, { useState } from "react";
import { Link } from "gatsby";
import { withTranslation } from "react-i18next";
import Countdown from "./Countdown";

function Navbar(props) {

  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  function toggleHamburger() {
    // toggle the active boolean in the state
    setActive(!active);
    // set the class in state for the navbar accordingly
    !active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("");
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered text-xl">
            <Link className="navbar-item" to={`/`}>
              Hjem
            </Link>
            <Link className="navbar-item" to={`/location`}>
              Sted
            </Link>
            <Link className="navbar-item" to={`/accommodation`}>
              Overnatting
            </Link>
            <Link className="navbar-item" to={`/activities`}>
              Aktiviteter
            </Link>
            <Link className="navbar-item" to={`/wishlist`}>
               Ønskeliste
            </Link>
            <Link className="navbar-item" to={`/rsvp`}>
                 Svar på Invitasjon
            </Link>
            {/*
            <Link className="navbar-item" to={`/faq`}>
              Ofte Stilte Spørsmål
            </Link>
            */}
            <Link className="navbar-item" to={`/contact`}>
              Kontakt
            </Link>
          </div>
          <Countdown className="has-text-centered text-lg mt-2.5 mb-2 mr-2" />
        </div>
      </div>
    </nav>
  );
}

export default withTranslation()(Navbar);
