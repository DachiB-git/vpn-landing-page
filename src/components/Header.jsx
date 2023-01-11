import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} />

      <a className="btn btn-sign-in">Sign In</a>
      <a className="btn btn-hollow btn-sign-up">Sign Up</a>

      <nav>
        <ul className="header-nav">
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </nav>
    </header>
  );
}
