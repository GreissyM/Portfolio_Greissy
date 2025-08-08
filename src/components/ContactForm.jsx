import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm({ onClose }) {
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
      alert("¡Gracias por tu mensaje! 😊");
      setForm({ name: "", email: "", message: "" });
      onClose(); // Esto oculta el formulario desde el componente padre
  })
    .catch((error) => {
      alert("❌ Error al enviar el mensaje, intenta de nuevo.");
      console.error(error);
    });
  };

  return (
        <div className="modal-overlay">
      <div className="modal-content">
    <form className="contact-form" onSubmit={handleSubmit}>
        <button type="button" className="close-button" onClick={onClose}>✕</button>

      <label>
        Nombre:
        <input type="text" name="name" placeholder="Tu nombre"
        value={form.name}
        onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" placeholder="Tu email"
        value={form.email}
        onChange={handleChange} required />
      </label>

      <label>
        Mensaje:
        <textarea name="message" rows="4" placeholder="Escribe tu mensaje"
        value={form.message}
        onChange={handleChange} required></textarea>
      </label>

      <button type="submit" className="submit-button">Enviar</button>

    </form>
    </div>
    </div>
  );
}
