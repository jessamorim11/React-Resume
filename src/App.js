
import { AiFillGithub } from "react-icons/ai";
import './styles.css'
import eu from "./img/eu_desenho.jpg"
import netflix from "./img/netflix.png"
import article from "./img/article.jpg"
import jojo from "./img/jojo.jpg"
import snake from "./img/snake.png"
import js from "./img/js.jpg"
import { AiFillLinkedin } from "react-icons/ai";




function App() {

  return (
    <div className="background">

      <div class="sidenav">
        <a href="#main">Personal Information</a>
        <a href="#projects">Projects</a>
        <a href="#academic">Academic Bakcground</a>
        <a href="#languages">Languages</a>
        <a href="#skills">Skills</a>
      </div>
      <div id="main" className="main">
        <div className="cols">
          <img className="img" src={eu} alt='Jessica Amorim'></img>

          <h3 className="title"> Jessica Amorim </h3>
          <h3> Junior Front-end Developer</h3>
          <h3> HTML/CSS || JavaScript || ReactJS</h3>
        </div>
        <div className="cols">
          <h3>Contact me <br></br>
            +351 912 631 384 <br></br>
            email: jess.amorim11@gmail.com
          </h3>

          <div className='buttons_container'>
            <button className="button">
              <a className="link" href="https://www.linkedin.com/in/jessica-lopes-amorim-a77384189/">  Linkedin <AiFillLinkedin size={25} color="white" /></a>
            </button>
            <button className="button">
              <a className="link" href="https://github.com/jessamorim11">  GitHub <AiFillGithub size={30} color="white" /></a>
            </button>
          </div>

        </div>
      </div>


      <div id="projects" className="projects">
        <h2>Projects </h2>
        <div>
          <div className="cards-container">
            <div className="card">
              <img src={netflix} class="card-img-top" alt="Netflix's Project" />
              <div class="card-body">
                <h5 class="card-title">Netflix's Interface Project</h5>
                <p class="card-text">Recreating Netflix's Interface using HTML/CSS and owl carousel.</p>
                <a className="card_button" href="https://www.linkedin.com/posts/jessica-lopes-amorim-a77384189_netflix-digitalinnovationone-programming-activity-6839345798535290880-bi4l?utm_source=linkedin_share&utm_medium=member_desktop_web" class="card_button">Publicaçaõ no Linkedin</a>
              </div>
            </div>

            <div className="card">
              <img src={article} class="card-img-top" alt="Twitch's Article" />
              <div class="card-body">
                <h5 class="card-title">Article about Twitch's Growth</h5>
                <p class="card-text">Wrote an academic article about Twitch's Growth and all data analysis was made using Python.</p>
                <a className="card_button" href="https://www.linkedin.com/posts/jessica-lopes-amorim-a77384189_business-python-activity-6904435503232270337-NjHm?utm_source=linkedin_share&utm_medium=member_desktop_web" class="card_button">Publicaçaõ no Linkedin</a>
              </div>
            </div>

            <div className="card">
              <img src={jojo} class="card-img-top" alt="OOP" />
              <div class="card-body">
                <h5 class="card-title">Object Oriented Programming</h5>
                <p class="card-text">A simple exercise using JavaScript functions and object oriented programming.</p>
                <a className="card_button" href="https://www.linkedin.com/posts/jessica-lopes-amorim-a77384189_jojo-oop-javascript-activity-6910371761205219328-Tstc?utm_source=linkedin_share&utm_medium=member_desktop_web" class="card_button">Publicaçaõ no Linkedin</a>
              </div>
            </div>
          </div>
        </div>

        <div className="cards-container">
          <div className="card">
            <img src={snake} class="card-img-top" alt="Snake Game" />
            <div class="card-body">
              <h5 class="card-title">Snake Game</h5>
              <p class="card-text">Recreated the snake game using JavaScript.</p>
              <a className="card_button" href="https://github.com/jessamorim11/Snake-Game" class="card_button">Código no GitHub</a>
            </div>
          </div>
          <div className="card">
            <img src={js} class="card-img-top" alt="Snake Game" />
            <div class="card-body">
              <h5 class="card-title">Fullstack Development Internship</h5>
              <p class="card-text">I built basic CRUD pages using mainly JavaScript. We worked in an Agile/SCRUM enviroment and the database used was PostgreSQL.</p>
            </div>
          </div>

        </div>


      </div>

      <div id="academic" className="academic">
        <h1 className="title">Academic Background</h1>

        <ul class="list-group" >
          <li class="list-group-item" className="list"> Master's Student in Data Analysis in Coimbra Business School
            <br />
            2021-2023
          </li>
          <li class="list-group-item" className="list"> Computer Systems Analysis and Development Undergraduate
            <br />
            2021-2023
          </li>
          <li class="list-group-item" className="list" > Web Development Bootcamp na plataforma Digital Innovation One
            <br />
            2021 (This was the breaking point where I realized that I love programming and decided to change my career)
          </li>
          <li class="list-group-item" className="list"> Bachelor Degree in Chemistry in CEFET-MG
            <br />
            2015 - 2019 (Yes, I was a little lost at this point of my life)
          </li>

        </ul>
      </div>

      <div id="languages" className="languages">
        <h1 className="title">Languages </h1>
        <div className="cards-container">
          <div className="box">
            <h3><strong>Portuguese</strong>
              <br></br>
             </h3>
             <h4>Native</h4>
          </div>
          <div className="box">
            <h3><strong>English</strong>
              <br></br>
              </h3>
              <h4>Fluent</h4>
          </div>
          <div className="box">
            <h3><strong>German</strong>
              <br></br>
              </h3>
              <h4>Intermediate</h4>
          </div>
          <div className="box">
            <h3><strong>Spanish</strong>
              <br></br>
              </h3>
              <h4>Intermediate</h4>
          </div>
        </div>
      </div>

      <div id="skills" className="skills">
        <h1 className="title">Skills</h1>
        <ul className="list2">
          <li className="item">HTML/CSS</li>
          <li className="item">JavaScript</li>
          <li className="item">ReactJS</li>
          <li className="item">Python</li>
          <li className="item">C</li>
          <li className="item">Agile/SCRUM</li>
          <li className="item">GIT</li>
          <li className="item">NodeJS</li>
          <li className="item">PostgreSQL</li>
          <li className="item">Team work</li>
          <li className="item">Patience</li>
          <li className="item">Fast Learning</li>
        </ul>

      </div>
    </div>





  )


};

export default App;
