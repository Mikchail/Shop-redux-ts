import * as React from "react";

const FormContact = () => {
  return (
    <div className="contacts-form">
      <div className="container-fluid">
        <form action="/" className="form">
          <div className="form__inner">
            <h2 className="form__title">SEND US YOUR QUESTION OR MESSAGE</h2>
            <div className="form__content">
              <div className="form__column">
                <input
                  type="text"
                  name="Company name"
                  placeholder="Company name"
                  className="form__field"
                />
                <input
                  type="text"
                  name="Contact person"
                  placeholder="Contact person"
                  className="form__field error"
                />
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone"
                  className="form__field"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email address *"
                  className="form__field"
                  required
                />
              </div>
              <div className="form__column">
                <textarea
                  name="Message"
                  placeholder="Your message"
                  className="form__field"
                ></textarea>
              </div>
            </div>
            <div className="form__footer">
              <div className="form__error">Enter a contact person</div>
              <button type="submit" className="form__btn btn btn_no-bg">
                send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
