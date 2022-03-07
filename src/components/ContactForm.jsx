import React from "react";
import { useForm } from "../hooks/useForm";
import "./ContactForm.css";

const initialForm = {
  diners:"",
  date:"",
  name: "",
  surnames: "",
  phone: "",
  email: "",
  allergies: "",
  comments: "",
};

const validationsForm = (form) => {
  
  let errors = {};

  if (!form.diners.trim()) {
    errors.diners = "El 'Número de Personas' es requerido";
  }

  if (!form.date.trim()) {
    errors.date = "La 'Fecha' es requerida";
  } 
  if (!form.name.trim()) {
    errors.name = "El 'Nombre' es requerido";
  }

  if (!form.surnames.trim()) {
    errors.surnames = "El 'Apellido' es requerido";
  }
  if (!form.phone.trim()) {
    errors.phone = "El 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El 'Email' es requerido";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (

    <div>
      <h1>Formulario de contacto</h1>
      <form onSubmit={handleSubmit}>


      <p>Número de personas:</p>
          <input
            label="1"
            type="radio"
            name="diners"
            value="1"
            onChange={handleChange}
          />
          <input
            label="2"
            type="radio"
            name="diners"
            value="2"
            onChange={handleChange}
          />
          <input
            label="3"
            type="radio"
            name="diners"
            value="3"
            onChange={handleChange}
          />
          <input
            label="4"
            type="radio"
            name="diners"
            value="4"
            onChange={handleChange}
          />
          <input
            label="5"
            type="radio"
            name="diners"
            value="5"
            onChange={handleChange}
          />
          <input
            label="6"
            type="radio"
            name="diners"
            value="6"
            onChange={handleChange}
          />
          <input
            label="7"
            type="radio"
            name="diners"
            value="7"
            onChange={handleChange}
          />
          <input
            label="8"
            type="radio"
            name="diners"
            value="8"
            onChange={handleChange}
          />
        {errors.diners && <p className="error">{errors.diners}</p>}

        <p>Seleccione una fecha:</p>
          <label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              placeholder="Fecha"
            ></input>
          </label>
          {errors.date && <p className="error">{errors.date}</p>}


        <p>Datos personales:</p>
        <input
          type="text"
          name="name"
          placeholder="Nombre *"
          onChange={handleChange}
          value={form.name}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="surnames"
          placeholder="Apellidos *"
          onChange={handleChange}
          value={form.surnames}
        />
        {errors.surnames && <p className="error">{errors.surnames}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Telefono *"
          onChange={handleChange}
          value={form.phone}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email *"
          onChange={handleChange}
          value={form.email}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <p>Otra información:</p>
        <input
          type="text"
          name="allergies"
          placeholder="Alergias"
          onChange={handleChange}
          value={form.allergies}
        />

        <textarea
          name="request"
          cols="50"
          rows="5"
          placeholder="Solicitud particular"
          onChange={handleChange}
          value={form.request}
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
