import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./Header.css";

import RoseLogo from "../icons/RoseLogoClear.png";

// TODO:: Make nav bar work for mobile


// export default function NavBar() {
function NavBar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  //   const closeMenu = () => setOpen(false);
  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header>
     <div className="corner-nav" ref={navRef}>
      <button
        className="corner-nav-logo"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation"
      >
        {/* YourLogo */}
        <img
          className="header-icon"
          src={RoseLogo}
          alt="Menu"
        />
        <span className={`caret ${open ? "open" : ""}`}>⌄</span>
      </button>

      <nav className={`corner-nav-menu ${open ? "show" : ""}`}>
        <Link to="/"            onClick={() => setOpen(false)}>Home</Link>
        <Link to="/weddings"    onClick={() => setOpen(false)}>Weddings</Link>
        <Link to="/engagements" onClick={() => setOpen(false)}>Engagements</Link>
        <Link to="/family"      onClick={() => setOpen(false)}>Family</Link>
        <Link to="/newborns"     onClick={() => setOpen(false)}>Newborn</Link>
        <Link to="/portraits"    onClick={() => setOpen(false)}>Portrait</Link>
        <Link to="/commercial"  onClick={() => setOpen(false)}>Commercial</Link>
      </nav>
     </div>
    </header>
  );
}
export default NavBar;