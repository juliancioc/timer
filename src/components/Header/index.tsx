import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/logo-ignite.svg";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="logo" />
      </span>

      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
