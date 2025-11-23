import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function ContactForm({ onClose }) {

  const { t } = useTranslation();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_vmxzlt9",           // Service ID
      "template_xs5oair",         // Template ID
      form,                      // Datos del formulario
      "Z7xMo6Khcug4KF0SG"       // Public Key
    )
    .then((result) => {
      alert(t("Form.successMessage"));
      setForm({ name: "", email: "", message: "" });
      onClose(); // Esto oculta el formulario desde el componente padre
  })
    .catch((error) => {
      alert(t("Form.errorMessage"));
      console.error(error);
    });
  };

  return (
        <div className="modal-overlay">
      <div className="modal-content">
    <form className="contact-form" onSubmit={handleSubmit}>
        <button type="button" className="close-button" onClick={onClose}>✕</button>

      <label>
        {t("Form.name")}
        <input type="text" name="name" placeholder="Tu nombre"
        value={form.name}
        onChange={handleChange} required />
      </label>

      <label>
        {t("Form.email")}
        <input type="email" name="email" placeholder="Tu correo electrónico"
        value={form.email}
        onChange={handleChange} required />
      </label>

      <label>
        {t("Form.message")}
        <textarea name="message" rows="4" placeholder="Escribe tu mensaje"
        value={form.message}
        onChange={handleChange} required></textarea>
      </label>

      <button type="submit" className="submit-button">{t("Form.sendButton")}</button>

    </form>
    </div>
    </div>
  );
}
