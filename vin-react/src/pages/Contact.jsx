import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  function handleReset() {
    setSent(false);
  }

  return (
    <section className="contact-page">
      <div className="form-container">
        <h2>Formulario de contacto</h2>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="name">Nombre:
            <input type="text" id="name" name="name" placeholder="Ingrese su nombre" required />
          </label>

          <label htmlFor="email">Correo electrónico:
            <input type="email" id="email" name="email" placeholder="compratuvino@escabiate.com" required />
          </label>

          <label htmlFor="phone">Teléfono:
            <input type="tel" id="phone" name="phone" placeholder="Ingrese su teléfono" required />
          </label>

          <label htmlFor="reason">Motivo de contacto:
            <select id="reason" name="reason" required defaultValue="">
              <option value="" disabled>Seleccione una opción</option>
              <option value="consulta">Consulta</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
            </select>
          </label>

          <fieldset>
            <legend>¿Cómo desea ser contactado?</legend>
            <div className="radio-group">
              <label><input type="radio" name="contacto" value="Email" required /> Email</label>
              <label><input type="radio" name="contacto" value="Teléfono" /> Teléfono</label>
            </div>
          </fieldset>

          <label htmlFor="comentarios">Comentarios:</label>
          <textarea id="comentarios" name="comentarios" rows="5" placeholder="Escriba aquí su mensaje..." required />

          <div className="form-buttons">
            <button type="submit" className="submit-button">Enviar</button>
            <button type="reset" className="reset-button">Limpiar</button>
          </div>

          {sent && <p className="success-message">Mensaje enviado correctamente (demo).</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
