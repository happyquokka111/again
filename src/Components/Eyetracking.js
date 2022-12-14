import "./Kara.css";
const Eyetracking = () => {
  return (
    <div className="eye">
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
          <h1>Eyetracking</h1>
          <h5></h5>
        </div>
        <div class="container" id="BackStory">
          <h2>Improving User Experience </h2>
          <p>
            User Experience is fundamental to designing anything. It is crucial
            to know where someone's attention is directed in order to create the
            most intuitive and seamless products. I had the opportunity to
            better explore this subject using Brown University's eyetracking
            technology.
          </p>

          <h4>
            I created two Figma versions of a bakery webpage, used Brown's
            technology to monitor direction of eyesight of two individuals, and
            produced heatmaps of the eyesight to analyze the data.
          </h4>
        </div>

        <div class="container2" id="initial">
          <h2> I. Hypothesis </h2>

          <p>
            Initially, we proposed the following hypothesis: In Version A, the
            user is more likely to stare at the order button first and then the
            different menus, following a triangular shape, and in version B, the
            user will automatically look at the different menus horizontally.
          </p>
        </div>

        <div class="container2" id="parts">
          <h2>II. Figma </h2>
          <div class="back">
            <div class="row">
              <div class="column">
                <div class="fig">
                  <h5>Figma One</h5>

                  <img
                    src={require("../figma-one.png")}
                    alt="journey"
                    width="100%"
                  ></img>
                </div>
              </div>

              <div class="column">
                <h5>Figma Two</h5>
                <img
                  src={require("../figma-two.png")}
                  alt="journey"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div class="container2" id="front">
          <div class="back">
            <h2>III. Heat Mapping </h2>
            <div class="row">
              <div class="column">
                <h5>Figma One</h5>

                <img
                  src={require("../heatmap-one.png")}
                  alt="journey"
                  width="100%"
                ></img>
              </div>

              <div class="column">
                <h5>Figma Two</h5>
                <img
                  src={require("../heatmap-two.png")}
                  alt="journey"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div class="container2" id="finalr">
          <h2>IV. Findings</h2>
          <div class="final">
            <p>
              {" "}
              We found that, the eye tracking shape in Version A and Version B
              was similar to what we had thought but the testers never looked at
              the order button. Also, the tester's eyes were more focused on one
              menu section rather than scanning all of the menus horizontally as
              we had thought they would.
            </p>
          </div>
        </div>
      </div>
      <div class="container" id="further">
        <h2>V. Further Exploration</h2>
        <p>
          Some limitations were that each tester had different food preferences, so 
          they may have moved their eye direction to what was most attractive to them personally.
          In the future, we can average where the eyesight is directed between all subjects 
          to get the most objective result. Using what they are most drawn to, will help me redesign
          my page in the future to put the most useful information there.
        </p>
      </div>
    </div>
    
  );
};

export default Eyetracking;
