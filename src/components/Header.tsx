import nlwUnitIcon from "../assets/nlw-unit-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUnitIcon} />
      <nav className="flex gap-5">
        <NavLink href="/eventos"> Eventos </NavLink>
        <NavLink href="/participantes"> Participantes</NavLink>
      </nav>
    </div>
  );
}
