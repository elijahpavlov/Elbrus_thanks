import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutPage">
      <img src="#" alt="about" />
      <p>Сергей Морозов, Илья Павлов, Тамара Гаспарян</p>
      <p>С любовью, для Elbrus Bootcamp  ♥</p>
      <p>Сойки, СПб, август 2022</p>
      <button
        onClick={() => navigate('/')}
        type="button"
        className="btn btn-primary  btn-lg btn-elbrus"
      >
        Назад
      </button>
    </div>
  );
}

export default About;
