import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutPage">
      <div className="aboutPhoto">
        <img style={{ height: '300px', weight: '300px' }} src="/img/SM.jpg" alt="Сергей Морозов" />
        <figcaption>Сергей Морозов</figcaption>
        <img style={{ height: '300px', weight: '300px' }} src="/img/EP.jpg" alt="Илья Павлов" />
        <figcaption>Илья Павлов</figcaption>
        <img style={{ height: '300px', weight: '300px' }} src="/img/TG.jpg" alt="Тамара Гаспарян" />
        <figcaption>Тамара Гаспарян</figcaption>
      </div>
      <p>С любовью, для Elbrus Bootcamp</p>
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
