
function About() {
  
  return (
    <>
      <section  className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="header-tertiary u-margin-bottom-small">
              Your are going to fell in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sed ipsa necessitatibus unde veritatis laboriosam
              nesciunt aspernatur alias at suscipit sint cum reiciendis mollitia
              natus ullam, voluptatem consequuntur laudantium cumque!
            </p>

            <h3 className="header-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sed ipsa necessitatibus unde veritatis laboriosam
              nesciunt aspernatur laudant
            </p>

            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src="./img/nat-1-large.jpg"
                alt="photo 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src="./img/nat-2-large.jpg"
                alt="photo 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src="./img/nat-3-large.jpg"
                alt="photo 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
