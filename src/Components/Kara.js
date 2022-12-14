import "./Kara.css";
const Kara = () => {
  return (
    <div className="Kara">
      <div className="top">
        {<img className="name" src={require("../logo2.png")} width="7%"></img>}

        <div className="nav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/" id="pls">
                Home <span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="body">
        <div className="title">
          <h1>KaraKare</h1>
          <h5>A webapp for refugee camps</h5>
        </div>
        <div class="container" id="BackStory">
          <h2>The Refugee Crisis </h2>
          <p>
            The refugee crisis impacts millions of people across the world.
            Often times, refugees cannot find shelter and if they do, finding
            clothing, food, and other necessary materials is another battle.
            Refugee camps typically do not have a stable system to track
            material donations and manage supply.
          </p>
          <p>
            A fellow engineer volunteered at a refugee camp in Lesvos, Greece
            called Kara Tepe Camp and noticed that the camp would use written
            logs to keep track of clothing distributions to each refugee,
            leading to many refugees receiving the wrong supplies or no supplies
            at all.
          </p>
          <h4>
            I worked as a back-end developer to build a web-page that solves
            this problem for Kara Tepe Camp.
          </h4>
        </div>

        <div class="container2" id="initial">
          <h2> I. Initial Process </h2>
          <div class="row">
            <div class="column">
              <figure>
                <img
                  src={require("../kara_wireframe.png")}
                  alt="wireframe"
                  width="90%"
                ></img>
                <figcaption> Initial Wireframing</figcaption>
              </figure>
            </div>
            <div class="column">
              <figure>
                <img
                  src={require("../diff_op.png")}
                  alt="journey"
                  width="90%"
                ></img>
                <figcaption>
                  {" "}
                  Two User Journeys: Managers(people in charge of refugee camps)
                  and refugees{" "}
                </figcaption>
              </figure>
            </div>
          </div>
          <p>
            Initially, we realized we would have to account for two user
            journeys: the people managing the database and appointment dates to
            hand out supplies, and the refugees who will see what items are
            still in supply.
          </p>
        </div>

        <div class="container2" id="parts">
          <div class="back">
            <h2>II. Backend</h2>
            <img src={require("../fire.png")} alt="journey" width="80%"></img>
            <p>
              {" "}
              To manage new clothing inputs and upcoming appointments, I used a
              realtime Firebase database for the backend, which is updated from
              frontend inputs{" "}
            </p>
          </div>
        </div>
        <div class="container2" id="front">
          <h2>III. Front </h2>
          <div class="row">
            <div class="column">
              <h5>Manager Side</h5>

              <img src={require("../appt.png")} alt="journey" width="80%"></img>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <h5>Refugee Side</h5>
            </div>
          </div>
        </div>
        <div class="container2" id="finalr">
          <h2>IV. Final Site</h2>
<div class="final">
          <a href="https://omieabdelhamid.github.io/kara/karakaremaster/frontend/landing/landing.html">
            <img
              src={require("../kara.png")}
              width="500"
              height="250"
              alt="karakare"
            ></img>
          </a>
          <p>
            Check out the final site by clicking here!
          </p>
          </div>
        </div>
        </div>
        <div class="container" id="further">
          <h2>V. Further Exploration</h2>
          <p>
            As I work on this project further, I want to work on the scalability. 
            The project mainly accounts for the needs of one refugee camp but I would
            like to give refugee camps the option of displaying various information, i.e.
            instead of clothing, they could use it for medical supplies. The UI should account
            for different types of items in the database, which are preferences that should be set
            in the beginning of creating the manager account. 
          </p>
        </div>
      
    </div>
  );
};

export default Kara;
