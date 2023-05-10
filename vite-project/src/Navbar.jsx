import logo from "./reactjs-icon.png";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} className="nav-icon"></img>
      <h3 className="nav-logo_text">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
