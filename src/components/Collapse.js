import React, {useState} from "react";
import "../styles/Collapse.scss"

export function ApartmentDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass = (isContentVisible ? "visible" : "hidden") + " apartment__description__content";
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <section className="apartment__description">
        <div className="apartment__description__box">
          <p className="apartment__description__title" onClick={showContent}>
            <span>{props.title}</span>
            <i className={chevronClass}></i>
          </p>
          <p className={contentClass}>{props.content}</p>
        </div>
    </section>
    
  );
}
