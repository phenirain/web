import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {motion} from 'framer-motion'

const Feedback = () => {
  const feedbackElement = document.getElementById('feedback');

  const {
    register,
    handleSubmit,
    formState: { statusForm },
  } = useForm();
  const [status, setStatus] = useState("");
  
  const onSubmit = (data, e) => {
    emailjs.send(
      'service_yg5uhhe',
      'template_lrow7na',
      data,
      'ym8qGhvR0ZhTxZrB0' 
    ).then((response) => {
      setStatus('Сообщение отправлено успешно!');
      e.target.reset(); 
      handleClose();
    }).catch((error) => {
      setStatus('Ошибка отправки сообщения. Попробуйте позже.');
    });
  };

  const handleClose = () => {
    if (feedbackElement) {
      feedbackElement.classList.add('hidden');
    }
  }

  const handleOpen = () => {
    if (feedbackElement) {
      feedbackElement.classList.remove('hidden');
      feedbackElement.classList.add('overlayFeed');
    }
  }

  return (
    <>
      <div class="fixed-bottom m-5 d-flex justify-content-end">
        <Button onClick={handleOpen}>Оставить отзыв</Button>
      </div>
      <div class="hidden" id="feedback"
        >
        <div class="form-container">
          <Button className="closeBtn" onClick={handleClose}>X</Button>
          <Form onSubmit={onSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail" name="email">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" placeholder="Почта" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" name="feedback">
              <Form.Label>Отзыв</Form.Label>
              <Form.Control as="textarea" placeholder="Отзыв" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
