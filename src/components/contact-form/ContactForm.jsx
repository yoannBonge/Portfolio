import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./contact_form.scss";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false);

  const onSubmit = (data) => {
    sendEmail(data);
  };

  const sendEmail = (formData) => {
    emailjs.init("GKbxwUtQ-zboHILR1");

    emailjs
      .send("service_hvzjpke", "template_2koyoh5", {
        to_email: "yoannbonge@live.fr",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then((response) => {
        console.log("E-mail envoyé avec succès:", response);
        setIsEmailSent(true);
        setTimeout(() => {
          setIsEmailSent(false);
          reset();
        }, 3000);
      })

      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail:", error);
      });
  };

  return (
    <>
      <p className='introduction'>
        Pour toute question, demande d'information ou autre, c'est ici que ça se
        passe.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <label htmlFor='name'>Nom</label>
        <input
          {...register("name", {
            required: "Veuillez renseigner le champ ci-dessus",
          })}
          className={errors.name ? "error-style" : ""}
        />
        {errors.name && (
          <span className='error-warning'>{errors.name.message}</span>
        )}
        {/* EMAIL */}
        <label htmlFor='email'>Email</label>
        <input
          {...register("email", {
            required: "Veuillez renseigner le champ ci-dessus",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Adresse email invalide",
            },
          })}
          className={errors.email ? "error-style" : ""}
        />
        {errors.email && (
          <span className='error-warning'>
            <span className='error-warning'>{errors.email.message}</span>
          </span>
        )}
        {/* MESSAGE */}
        <label htmlFor='message'>Message</label>
        <textarea
          {...register("message", {
            required: "Veuillez renseigner le champ ci-dessus",
          })}
          rows='4'
          className={errors.message ? "error-style" : ""}
        />
        {errors.message && (
          <span className='error-warning'>{errors.message.message}</span>
        )}
        {isEmailSent && (
          <span className='success-message'>
            Votre message a bien été envoyé !
          </span>
        )}
        <button type='submit'>Envoyer</button>
      </form>
    </>
  );
};

export default ContactForm;
