function Popup() {
  return (
    <>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src="./img/nat-8.jpg"
              alt="popup_img1"
              className="popup__img"
            />
            <img
              src="./img/nat-9.jpg"
              alt="popup_img2"
              className="popup__img"
            />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>

            <h3 className="header-tertiary u-margin-bottom-small">
              Important &ndash; Please Read these terms first before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate ducimus doloremque dolor officia assumenda repudiandae,
              eos id alias nisi exercitationem adipisci porro vero architecto
              voluptatem, dolores corrupti fugit modi nostrum? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Doloremque nobis
              necessitatibus iste saepe assumenda! Mollitia tempore nam ipsum ea
              impedit doloremque sed, reprehenderit beatae recusandae quasi!
              Rerum dolore sequi soluta! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium quam atque ab harum magnam esse.
              Maiores perferendis nesciunt commodi modi voluptates laborum
              molestia
            </p>
            <a href="#" className="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Popup;
