// import "./header.css";
import "../../sass/main.scss";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src="img/logo-white.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#section-tours" className="btn btn--white btn--animated">
            Discover our tour
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
