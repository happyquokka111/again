import "./Kara.css";
const Persona = () => {
  return (
    <div className="Persona">
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
          <h1>Personas and Storyboarding</h1>
          <h5>A look into ordinary interfaces</h5>
        </div>
        <div class="container" id="BackStory">
          <h2>Daily Routines </h2>
          <p>
            I typically do not take a closer look at the interfaces we take for
            granted. Depending on who you are, you have a different experience
            with the everyday machines and wish it had different options.
          </p>
          <p>
            This made me think about the user experiences people have with an
            ordinary machine: a washing machine.
          </p>
          <h4>
            I created personas and story-boarded experiences people have with
            washing machines to explore my curiousity.
          </h4>
        </div>

        <div class="container2" id="initial">
          <h2> I. Questions </h2>

          <p>
            <ol>
              <li>How do you know where to start? </li>
              <ul>
                <li>
                  There is a handle that juts out, so the user knew to pull the
                  door open and place clothes inside. There is also a
                  hand-shaped slit in the detergent tray, so other users started
                  there because they knew to pull the tray out to place
                  detergent inside{" "}
                </li>
              </ul>
              <li>
                What buttons and settings do you expect to see when doing
                laundry?{" "}
              </li>
              <ul>
                <li>
                  Users expect to see an on/start button, an indication that the
                  washer has started, settings for speed, types of clothing
                  (i.e. brights and delicates), and temperature{" "}
                </li>
              </ul>
              <li>Is it easy to understand what each button does?</li>
              <ul>
                <li>
                  Users thought it was easy to understand what each button does,
                  except for the “soil” setting, and there were symbols next to
                  each button that helped indicate what each setting did{" "}
                </li>
                <li>
                  Though, most users indicated they usually use the same options
                  for each setting each time{" "}
                </li>
              </ul>

              <li>Is it easy to understand how to start the machine?</li>
              <ul>
                <li>
                  Users found starting the machine intuitive because there was a
                  different colored button for start and a message displayed on
                  the small screen that directed the user to press “start”{" "}
                </li>
              </ul>
            </ol>
          </p>

          <img
            id="wash"
            src={require("../washsketch.jpg")}
            alt="sketch"
            width="50%"
          ></img>
        </div>

        <div class="container2" id="parts">
          <div class="back">
            <h2>II. Observations</h2>

            <h4>User One</h4>
            <ul>
              <li>
                Hesitated a bit when selecting the option for the “soil” setting
              </li>
              <li>Pulled door open with handle and put clothes</li>
              <li>Placed tide pod inside before clothes</li>
              <li>Pushed setting buttons quickly</li>
            </ul>
            <h4>User Two</h4>
            <ul>
              <li>
                Waited until the door lock light appeared to leave the washing
                machine
              </li>
              <li>
                Pulled the detergent tray open by the handle slit and poured
                detergent into it
              </li>
              <li>
                Checked the default options, indicated by a green light, for the
                settings and clicked start
              </li>
              <li>
                Hesitated when selecting the option for the “soil” setting
              </li>
            </ul>
            <h4>User Three</h4>
            <ul>
              <li>
                Pulled door open with handle and put clothes and a tide pod
                inside
              </li>
              <li>
                Pressed different options for each of the settings before
                clicking “start”
              </li>
              <li>
                Struggled a bit when closing the washing machine door because
                they were in a rush and had to reclose the door properly
              </li>
              <li>Placed tide pod inside after placing clothing inside</li>
            </ul>
          </div>
        </div>
        <div class="container2" id="front">
          <h2>III. Personas </h2>
          <div class="row">
            <div class="column">
              <h4>Persona One</h4>

              <img src={require("../PersonaOne.jpg")} width="100%"></img>
              <p>
                Persona One faces a problem with how long it can take to
                interact with the washing machine. She struggles with closing
                the washer door quickly enough, pressing all of the different
                buttons for each washer setting, and waiting for others to use
                the interface. This persona represents the impatience I saw in
                many users using the washing machine. People were typically in a
                rush and wanted to wash their clothes as fast as possible. Thus,
                Sarah represents that she struggles with using the interface
                quickly enough because she has to use it at a fast pace.{" "}
              </p>
            </div>
            <br></br>
            <div class="column">
              <h4>Persona Two</h4>
              <img src={require("../Persona part 2.jpg")} width="100%"></img>
              <p>
                Persona Two faces a problem navigating all of the different
                features the washer has. The user is not sure what option to use
                for the “soil” setting and is overwhelmed when figuring out
                which option is best for her load. Consequently, she ends up
                using the same options each time and does not make the best use
                of the interface. This persona represents the confusion I saw in
                some users who hesitated when selecting certain options and
                followed a set routine, instead of looking at their other washer
                options.
              </p>
            </div>
          </div>
        </div>
        <div class="container2" id="finalr">
          <h2>IV. StoryBoard</h2>
          <div class="final">
            <img
              src={require("../Storyboard.jpg")}
              width="70%"
              alt="karakare"
            ></img>

            <p>A storyboard of Persona One</p>
          </div>
        </div>
      </div>
      <div class="container" id="further">
        <h2>V. Further Exploration</h2>
        <p>
          In the future, I want to do this kind of experiment on everyday objects
          students use. I think many students are frustrated with study tools and 
          online document editors/IDEs but don't think about the user experiences and 
          ways to improve them.
        </p>
      </div>
    </div>
  );
};

export default Persona;
