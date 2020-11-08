import * as React from "react";

const ContactsList = () => {
  return (
    <div className="contacts">
      <div className="container-fluid">
        <div className="contacts__list">
          <div className="contacts__item">
            <div className="contacts__thumb contacts__thumb-1"></div>
            <h3 className="contacts__title">SIA DELVE2:</h3>
            <div className="contacts__text">Unified Reg. Nr.: 44103011884</div>
          </div>
          <div className="contacts__item">
            <div className="contacts__thumb contacts__thumb-2"></div>
            <h3 className="contacts__title">Address:</h3>
            <div className="contacts__text">
              Mellužu str. 17-2, Riga,
              <br />
              Latvia, LV-1067
            </div>
          </div>
          <div className="contacts__item">
            <div className="contacts__thumb contacts__thumb-3"></div>
            <h3 className="contacts__title">Phones:</h3>
            <div className="contacts__text">
              <span className="contacts__phone">
                Phone:{" "}
                <a href="tel:+37167421288" target="_blank" rel="nofollow">
                  +371 67421288
                </a>
              </span>
              <br />
              <span className="contacts__phone">
                Mob. phone:{" "}
                <a href="tel:+37129425125" target="_blank" rel="nofollow">
                  +371 29425125
                </a>
              </span>
            </div>
          </div>
          <div className="contacts__item">
            <div className="contacts__thumb contacts__thumb-4"></div>
            <h3 className="contacts__title">email:</h3>
            <div className="contacts__text">
              <a
                href="mailto:info@delve2.lv"
                target="_blank"
                rel="nofollow"
                className="contacts__mail"
              >
                info@delve2.lv
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactsList;
