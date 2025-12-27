import { useState } from "react";
import "./ContactForm.css";

// import api from "../Api";
import { CONTACT_URL } from "..";
import em_api from "../EmailApi";

// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    company: "",
  });
  const [error, setError] = useState(false);

  // const { executeRecaptcha } = useGoogleReCaptcha();

  function updateField(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // async function handleSubmit(e) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!executeRecaptcha) return;

    // const token = await executeRecaptcha("contact_form");

    // api
    //   .post(CONTACT_URL, {
    //     name: formData.name,
    //     email: formData.email,
    //     subject: "Website",
    //     message: formData.message,
    //   })
    //   .then(() => {
    //     alert("Message sent!");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    try {
      const res = await em_api.post(CONTACT_URL, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        // subject: formData.subject,
        subject: "Studio website",
        message: formData.message,
        company: formData.company,
        // captcha_token: token,
      });
      alert("Message sent!");
    } catch (err) {
      setError(true);
      console.error(err);
    }
  }

  if (error) {
    return (
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={updateField}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={updateField}
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={updateField}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={updateField}
          />

          <input
            type="text"
            name="company"
            style={{ display: "none" }}
            autoComplete="off"
          />

          <button type="submit" className="send-btn">
            Send
          </button>
        </form>

        <p>Failed to send email. Try again later.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={updateField}
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={updateField}
          required
        />
      </div>

      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        value={formData.phone}
        onChange={updateField}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={updateField}
      />

      <button type="submit" className="send-btn">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
