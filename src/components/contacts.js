import React, { useEffect} from "react";
import githubIcon from "../icons/github_icon.svg";
import vkIcon from "../icons/vk_icon.svg";
import "../styles/contacts.css";

const CountdownTimer = () => {
  const animationTime = 20; 

  useEffect(() => {
    const progressFill = document.getElementById("progress-time-fill");
    const deathGroup = document.getElementById("death-group");
    const armGroup = document.getElementById("designer-arm-group");


    progressFill.style.animationDuration = `${animationTime}s`;
    deathGroup.style.animationDuration = `${animationTime}s`;

    const deadlineAnimation = () => {
      setTimeout(() => {
        armGroup.style.animationDuration = '1.5s';
      }, 0);
      setTimeout(() => {
        armGroup.style.animationDuration = '1s';
      }, 4000);
      setTimeout(() => {
        armGroup.style.animationDuration = '0.7s';
      }, 8000);
      setTimeout(() => {
        armGroup.style.animationDuration = '0.3s';
      }, 12000);
      setTimeout(() => {
        armGroup.style.animationDuration = '0.2s';
      }, 14000);
    };

    deadlineAnimation();
  }, [animationTime]);

  return (
    <div>
      <div id="progress-time-fill"></div>
      <div id="death-group"></div>
      <div id="designer-arm-group"></div>
    </div>
  );
};


const Contacts = () => {
  return (
    <>
      <section id="contacts">
        <header>
          <h2>Контакты</h2>
        </header>
        <div className="contactLink">
          <a
            href="https://github.com/lyacsevna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
          <a
            href="https://vk.com/lyacsevna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VK"
          >
            <img src={vkIcon} alt="VK" className="icon" />
          </a>
        </div>
        <p>
          Если вам понравилась моя работа и вы хотите предложить мне интересный
          проект или вакансию, пожалуйста, заполните форму ниже.{" "}
        </p>
        <form className="contact-form" aria-labelledby="contacts">
          <fieldset>
            <legend>Свяжитесь со мной</legend>
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Сообщение:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Отправить</button>
          </fieldset>
        </form>
      </section>

      <div id="deadline">
        <svg
          preserveAspectRatio="none"
          id="line"
          viewBox="0 0 581 158"
          enableBackground="new 0 0 581 158"
        >
          <g id="progress-trail">
            <path
              fill="#FFFFFF"
              d="M491.979,83.878c1.215-0.73-0.62-5.404-3.229-11.044c-2.583-5.584-5.034-10.066-7.229-8.878
                              c-2.854,1.544-0.192,6.286,2.979,11.628C487.667,80.917,490.667,84.667,491.979,83.878z"
            />
            <path
              fill="#FFFFFF"
              d="M571,76v-5h-23.608c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125
                              c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333
                              s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17
                              c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17c0-2.762-2.238-5-5-5h-3V76H571z"
            />
            <path
              fill="#FFFFFF"
              d="M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
                              s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"
            />
          </g>
          <g>
            <defs>
              <path
                id="SVGID_1_"
                
                d="M484.5,75.584c-3.172-5.342-5.833-10.084-2.979-11.628c2.195-1.188,4.646,3.294,7.229,8.878
                               c2.609,5.64,4.444,10.313,3.229,11.044C490.667,84.667,487.667,80.917,484.5,75.584z M571,76v-5h-23.608
                               c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25
                               v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917
                               c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17
                               c0-2.762-2.238-5-5-5h-3V76H571z M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
                               s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"
              />
            </defs>
            <clipPath id="SVGID_2_">
              <use href="#SVGID_1_" overflow="visible" />
            </clipPath>
            <rect
              id="progress-time-fill"
              x="-100%"
              y="34"
              clipPath="url(#SVGID_2_)"
              fill="#fb139b"
              width="586"
              height="103"
            />
          </g>

          <g id="death-group">
            <path
              id="death"
              fill="#fb139b"
              d="M-46.25,40.416c-5.42-0.281-8.349,3.17-13.25,3.918c-5.716,0.871-10.583-0.918-10.583-0.918
                                         C-67.5,49-65.175,50.6-62.083,52c5.333,2.416,4.083,3.5,2.084,4.5c-16.5,4.833-15.417,27.917-15.417,27.917L-75.5,84.75
                                         c-1,12.25-20.25,18.75-20.25,18.75s39.447,13.471,46.25-4.25c3.583-9.333-1.553-16.869-1.667-22.75
                                         c-0.076-3.871,2.842-8.529,6.084-12.334c3.596-4.22,6.958-10.374,6.958-15.416C-38.125,43.186-39.833,40.75-46.25,40.416z
                                         M-40,51.959c-0.882,3.004-2.779,6.906-4.154,6.537s-0.939-4.32,0.112-7.704c0.82-2.64,2.672-5.96,3.959-5.583
                                         C-39.005,45.523-39.073,48.8-40,51.959z"
            />
            <path
              id="death-arm"
              fill="#fb139b"
              d="M-53.375,75.25c0,0,9.375,2.25,11.25,0.25s2.313-2.342,3.375-2.791
                                             c1.083-0.459,4.375-1.75,4.292-4.75c-0.101-3.627,0.271-4.594,1.333-5.043c1.083-0.457,2.75-1.666,2.75-1.666
                                             s0.708-0.291,0.5-0.875s-0.791-2.125-1.583-2.959c-0.792-0.832-2.375-1.874-2.917-1.332c-0.542,0.541-7.875,7.166-7.875,7.166
                                             s-2.667,2.791-3.417,0.125S-49.833,61-49.833,61s-3.417,1.416-3.417,1.541s-1.25,5.834-1.25,5.834l-0.583,5.833L-53.375,75.25z"
            />
            <path
              id="death-tool"
              fill="#fb139b"
              d="M-20.996,26.839l-42.819,91.475l1.812,0.848l38.342-81.909c0,0,8.833,2.643,12.412,7.414
                                              c5,6.668,4.75,14.084,4.75,14.084s4.354-7.732,0.083-17.666C-10,32.75-19.647,28.676-19.647,28.676l0.463-0.988L-20.996,26.839z"
            />
          </g>
          <path
            id="designer-body"
            fill="#FEFFFE"
            d="M514.75,100.334c0,0,1.25-16.834-6.75-16.5c-5.501,0.229-5.583,3-10.833,1.666
                                               c-3.251-0.826-5.084-15.75-0.834-22c4.948-7.277,12.086-9.266,13.334-7.833c2.25,2.583-2,10.833-4.5,14.167
                                               c-2.5,3.333-1.833,10.416,0.5,9.916s8.026-0.141,10,2.25c3.166,3.834,4.916,17.667,4.916,17.667l0.917,2.5l-4,0.167L514.75,100.334z
                                               "
          />

          <circle
            id="designer-head"
            fill="#FEFFFE"
            cx="516.083"
            cy="53.25"
            r="6.083"
          />

          <g id="designer-arm-grop">
            <path
              id="designer-arm"
              fill="#FEFFFE"
              d="M505.875,64.875c0,0,5.875,7.5,13.042,6.791c6.419-0.635,11.833-2.791,13.458-4.041s2-3.5,0.25-3.875
                                                s-11.375,5.125-16,3.25c-5.963-2.418-8.25-7.625-8.25-7.625l-2,1.125L505.875,64.875z"
            />
            <path
              id="designer-pen"
              fill="#FEFFFE"
              d="M525.75,59.084c0,0-0.423-0.262-0.969,0.088c-0.586,0.375-0.547,0.891-0.547,0.891l7.172,8.984l1.261,0.453
                                                l-0.104-1.328L525.75,59.084z"
            />
          </g>
        </svg>
        <span>
          Моя страсть к работе не должна умирать — жду вашего ответа
        </span>
      </div>
      <CountdownTimer />
    </>
  );
};

export default Contacts;
