import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import { getLangKey } from "../utils/getLangKey";
import { useLocation } from "@reach/router";
import { useTranslation } from "gatsby-plugin-react-i18next";

function Footer(props) {
  const location = useLocation();

  const langKey = getLangKey(location);

  const { t } = useTranslation();

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column is-4" style={{ marginTop: "-1.2em" }}>
              <section className="menu">
                <ul className="menu-list is-flex-mobile m-0">
                  <li>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4" style={{ marginTop: "-1.2em" }}>
              <section></section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
