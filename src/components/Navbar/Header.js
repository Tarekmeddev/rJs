import "./Header.css";
import Logo from "../../PngItem_613328.png";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h2>
          <img src={Logo} className="logo" />
          MemeGenerator
        </h2>
        <h3>Project 3| React js</h3>
      </div>
    </header>
  );
}
