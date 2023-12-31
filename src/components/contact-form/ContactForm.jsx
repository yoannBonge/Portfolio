import { useForm } from "react-hook-form";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "./contact_form.scss";

const ContactForm = () => {
  //////////////////////////////////////////////////////////////////////STATE
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const formRef = useRef(null);
  //////////////////////////////////////////////////////////////////////BEHAVIOR
  const onSubmit = (data) => {
    setIsSendingEmail(true);
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
        setIsSendingEmail(false);
        setTimeout(() => {
          setIsEmailSent(false);
          reset();
        }, 3000);
      })

      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error);
        setIsSendingEmail(false);
      });
  };

  const handleOutsideClick = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      reset();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);
  //////////////////////////////////////////////////////////////////////RENDER
  return (
    <>
      <div className='introduction-container'>
        <p className='introduction'>
          Pour toute question, demande d'information ou autre, c'est ici que ça
          se passe.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <label htmlFor='name'>Nom</label>
        <input
          {...register("name", {
            required: "Veuillez renseigner le champ ci-dessus",
          })}
          id='name'
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
          id='email'
          className={errors.email ? "error-style" : ""}
        />
        {errors.email && (
          <span className='error-warning'>{errors.email.message}</span>
        )}
        {/* MESSAGE */}
        <label htmlFor='message'>Message</label>
        <textarea
          {...register("message", {
            required: "Veuillez renseigner le champ ci-dessus",
          })}
          id='message'
          rows='4'
          className={errors.message ? "error-style" : ""}
        />
        {errors.message && (
          <span className='error-warning'>{errors.message.message}</span>
        )}
        {isSendingEmail && (
          <div className='loading'>
            <span className='loading-dot'></span>
            <span className='loading-dot'></span>
            <span className='loading-dot'></span>
          </div>
        )}
        {isEmailSent && (
          <span className='success-message'>
            Votre message a bien été envoyé !
          </span>
        )}
        <button className='send-button' type='submit' disabled={isSendingEmail}>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default ContactForm;
