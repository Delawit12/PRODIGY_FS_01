import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MenuPopup from "./MenuPopup";

const Header = ({ onMenuToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    if (onMenuToggle) onMenuToggle(!menuOpen);
  };

  return (
    <>
      <header className="p-2 flex items-center justify-between">
        <button
          onClick={handleMenuToggle}
          className="text-green-600 hover:text-green-800"
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
      </header>
      {menuOpen && <MenuPopup onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
