import * as React from "react";
import { useFormik } from 'formik';
import { IFormValues } from "types/types";


interface IFormContactProps {
  submit: (values: IFormValues) => void;
}

const FormContact: React.FC<IFormContactProps> = (props) => {
  const formik = useFormik<IFormValues>({
    initialValues: {
      company_name: "",
      contact_person: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: (values: IFormValues) => {
      props.submit(values)
    },
  });

  return (
    <div className="contacts-form">
      <div className="container-fluid">
        <form className="form">
          <div className="form__inner">
            <h2 className="form__title">SEND US YOUR QUESTION OR MESSAGE</h2>
            <div className="form__content">
              <div className="form__column">
                <input
                  type="text"
                  onChange={formik.handleChange('company_name')}
                  value={formik.values.company_name}
                  placeholder="Company name"
                  className="form__field"
                />
                <input
                  type="text"
                  onChange={formik.handleChange('contact_person')}
                  value={formik.values.contact_person}
                  placeholder="Contact person"
                  className="form__field error"
                />
                <input
                  type="text"
                  onChange={formik.handleChange('phone')}
                  value={formik.values.phone}
                  placeholder="phone"
                  className="form__field"
                />
                <input
                  type="email"
                  onChange={formik.handleChange('email')}
                  value={formik.values.email}
                  placeholder="email address *"
                  className="form__field"
                  required
                />
              </div>
              <div className="form__column">
                <textarea
                  name="Message"
                  placeholder="Your message"
                  onChange={formik.handleChange('message')}
                  value={formik.values.message}
                  className="form__field"
                ></textarea>
              </div>
            </div>
            <div className="form__footer">
              <div className="form__error">Enter a contact person</div>
              <button type="submit" onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                e.preventDefault();
                formik.handleSubmit()
              }} className="form__btn btn btn_no-bg">
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
