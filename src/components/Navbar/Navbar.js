import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiUserCircle, BiLogOutCircle, BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {pathName !== "/" ? (
        <div className="Navbar">
          <MobileNav isOpen={isMenuOpen} />
          <main>
            <div className="left">
              <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <BiMenu />
              </div>
              <div className="logo">
                <p>Immagov</p>
              </div>
              <ul>
                <NavLink className={(navData) => navData.isActive ? "link-active" : "" } to="/dashboard">
                  <li>Tableau de bord</li>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "link-active" : "" } to="/immatriculation">
                <li>Commencer une immatriculation</li>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "link-active" : "" } to="/pending">
                <li>Liste des Immatriculations</li>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "link-active" : "" } to="/cartes">
                <li>Cartes grises</li>
                </NavLink>
              </ul>
            </div>
            <div className="right">
              <div className="avatar">
                <div className="user-info">
                  <span className="name">Aboubacar Mansare</span>
                  <span className="role">Directeur</span>
                </div>
                <div className="user-icon">
                  <BiUserCircle />
                </div>
              </div>
              <div className="separator"></div>
              <NavLink to={"/"}>
                <div className="logout">
                  <BiLogOutCircle />
                </div>
              </NavLink>
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
