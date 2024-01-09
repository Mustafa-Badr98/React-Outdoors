function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer__logo-box">
          <img
            srcSet=" ./img/logo-green-1x.png 1x, ./img/logo-green-2x.png 2x"
            // src="./img/logo-green-2x.png"
            alt="logo"
            className="footer__logo"
          />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>{" "}
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>{" "}
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>{" "}
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="footer__copyright">
              Built by{" "}
              <a href="#" className="footer__link">
                Mustafa Badr
              </a>
              ,, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum provident, rem saepe non sequi quis! Aperiam saepe
              impedit obcaecati illo dolores non porro a doloribus magnam animi!
              Suscipit, error iusto?
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
