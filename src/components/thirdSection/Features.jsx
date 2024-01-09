import { useInView } from "react-intersection-observer";
import styles from "./features.module.scss";

function Features() {
  const { ref: rowRef, inView } = useInView({ triggerOnce: true });

  return (
    <section className="section-features">
      <div className={`row`}>
        <div className="col-1-of-4 " ref={rowRef}>
          <div
            className={`feature-box ${inView ? styles["row--animation"] : ""}`}
          >
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              distinctio quisquam voluptas sapiente placeat, culpa dolorem,
              provident imos officiis.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div
            className={`feature-box ${inView ? styles["row--animation"] : ""}`}
          >
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              distinctio quisquam voluptas sapiente placeat, culpa dolorem,
              provident cumque totam
            </p>
          </div>
        </div>{" "}
        <div className="col-1-of-4">
          <div
            className={`feature-box ${inView ? styles["row--animation"] : ""}`}
          >
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              distinctio quisquam voluptas sapiente placeat, culpa dolorem,
              provident cumque totam doloremque
            </p>
          </div>
        </div>{" "}
        <div className="col-1-of-4">
          <div
            className={`feature-box ${inView ? styles["row--animation"] : ""}`}
          >
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              distinctio quisquam voluptas sapiente placeat, culpa dolorem,
              provident cumque totam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
