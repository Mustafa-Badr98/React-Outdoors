function Stories() {
  return (
    <>
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg__content" autoPlay muted loop>
            <source src="./img/video.mp4" type="video/mp4" />
            <source src="./img/video.webm" type="video/webm" />
            Your Browser is not supported
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">We make people genuinely happy</h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                className="story__img"
                src="./img/nat-8.jpg"
                alt="person on a tour"
              />

              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary .u-margin-bottom-small">
                I had the best week ever with my family
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quae impedit doloribus! Nulla pariatur officia ea
                ipsaelit. Tempore velit reiciendis dolores molestiae totam
                laboriosam error, unde, perspiciatis molestias commodi minima
                perferendis animi quae autem quo id sint, at consequuntur.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                className="story__img"
                src="./img/nat-9.jpg"
                alt="person on a tour"
              />

              <figcaption className="story__caption">Jack Willson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary .u-margin-bottom-small">
                OhMy Life is completely different now
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quae impedit doloribus! Nulla pariatur officia ea
                ipsaelit. Tempore velit reiciendis dolores molestiae totam
                laboriosam error, unde, perspiciatis molestias commodi minima
                perferendis animi quae autem quo id sint, at consequuntur.
              </p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn-text">
            Read all stories &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
export default Stories;
