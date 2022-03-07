import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("Dentro de Submit")
    setErrors(validateForm(form));
    
    console.log(errors)
  
    if (Object.keys(errors).length === 0) {
      console.log("Datos del formuario correctos. Guardamos en base de datos");
      // Guardamos cambio en Base de datos
    } else {
      console.log("Datos erroneos");
      return;
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
  };
};
