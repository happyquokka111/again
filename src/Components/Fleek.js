import "./Kara.css";
import React from "react";
import ReactDOM from "react-dom";

const Fleek = () => {
  return (
    <div className="Fleek">
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
          <h2>Fleek </h2>
          <p>
            Fleek is a B2B Wholesale marketplace for second-hand fashion. This
            startup is targeted at a younger, millennial or Gen-Z audience
            (hence the name). Buyers can buy clothing in bulk, often in the form
            of bundles, directly from the seller. Buyers are comprised largely
            of vintage stores and online resellers. Suppliers include clothing
            wholesalers, rag-houses, and donation centers.
          </p>
          <p>
            Me and some other classmates in UI/UX loved the concept and wanted
            to readapt their webpage.
          </p>
          <h4>
            I worked with a team to create Figma wireframes and user testing
            feedback and critiques to create an optimal interface.
          </h4>
        </div>

        <div class="container2" id="initial">
          <h2> I. First Sketches </h2>
          <img
            src={require("../first-wire.png")}
            alt="wireframe"
            width="90%"
          ></img>
        </div>

        <div class="container2" id="parts">
          <div class="back">
            <h2>II. Low Fidelity Wireframes</h2>
            <iframe
              height="450"
              src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7Ici04r5Eis32N0W7683IF%2Ffleek%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1"
              allowfullscreen=""
            />{" "}
            <p>
              {" "}
              To see the wireframes, make the figma full screen and click
              through!
              <p></p>
              <br></br>
              Above is the low fidelity prototype we created by combining all of
              our ideas from the initial sketches! We decided at first to create
              an app the worked for the buyer and the seller, where you would
              choose which one you wanted to be when you first set up an
              account. However, we ultimately decided in response to the
              critique that this was confusing and difficult for people who may
              want to do both. We decided on a navigation bar at the bottom for
              easy, thumb-accessible navigation, and we felt that it was
              important to have a search page where you could discover, search
              and filter items, a chat page where you could negotiate possible
              deals and connect with sellers/buyers, and a profile page
              including your favorited/saved items. Searching is of course very
              important functionality, but we wanted to add a profile and chat
              to foster more interpersonal connection.
            </p>
          </div>
        </div>
        <div class="container2" id="front">
          <h2>III. High Fidelity Wireframes </h2>
          <h4>Part One</h4>
          <iframe
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7Ici04r5Eis32N0W7683IF%2Ffleek%3Fnode-id%3D23%253A72%26scaling%3Dscale-down%26page-id%3D23%253A61%26starting-point-node-id%3D23%253A72"
            allowfullscreen=""
          />
          <h4>Part Two</h4>
          <iframe
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7Ici04r5Eis32N0W7683IF%2Ffleek%3Fnode-id%3D114%253A60%26starting-point-node-id%3D114%253A60%26scaling%3Dscale-down"
            allowfullscreen=""
          />
          <p>
            In response to the critique feedback we recieved, we added the chat
            and home screens, removed the option to be a seller as were told
            that this option was confusing and figured the buyer and seller
            functions would be best implemented as two different apps. We also
            added a list of favorited items and functionality to view order
            history, as per the crit feedback. We refined the color scheme in an
            effort to make the app keep its personal, young feel while still
            looking professional and trustworthy.
          </p>
        </div>
        <div class="container2" id="finalr">
          <h2>IV. User Testing</h2>
          <div class="final">
            <p>
              For the final step in the project, we sent our prototype to a site
              that pays people to user test interfaces and records them and
              their feedback. Here is what we asked them:
              <p></p>BLURB: This is not an actual website but an interactive
              mockup made on prototyping software. You are a vintage shop called
              Nostalgia and you are buying wholesale vintage Harley Davidson
              t-shirts for your shop. This website allows you to find businesses
              that sell vintage wholesale products and buy their products.{" "}
              <p></p>
              TASKS: Search for vintage tops Filter for the Harley Davidson
              brand and select the Harley Tees Bundle Add the Harley Tees Bundle
              to your cart{" "}
              <h4>
                <p></p>
                QUESTIONS:
              </h4>{" "}
              On a scale from 1 to 5, how easy was it to know an item was added
              to the cart? (1 = very difficult, 5 = very easy) <br></br>On a
              scale from 1 to 5, how useful is the chat function to the
              experience of using an app like this? (1 = not useful at all, 5 =
              very useful)<br></br> On a scale from 1 to 5, how useful was the
              information on the Harley Tees Bundle item page? (1 = not useful
              at all, 5 = very useful)<br></br> On a scale from 1 to 5, how easy
              was it to navigate this app? (1 = very difficult, 5 = very easy)
            </p>
            <h4>Videos</h4>
            <div class="row">
              <div class="column">
                <a href="https://app.usertesting.com/v/5e8561d5-afa7-48d5-bfa4-805188ecd267?encrypted_video_handle=12a75003-e498-41f2-8be2-d1a1ea7fa506#!/notes">
                  <img
                    src={require("../one.png")}
                    width="500"
                    height="250"
                  ></img>
                  <p>
                  User One  
                  </p>
                
                </a>
              </div>
              <div class="column">
                <a href="https://app.usertesting.com/v/1d2e545f-15a5-4100-a08b-2171b71a78f6?encrypted_video_handle=7a67d390-b801-4d88-8ed8-4d06d2c75cc1#!/notes">
                <img
                    src={require("../one.png")}
                    width="500"
                    height="250"
                  ></img>
                  <p>
                  User Two
                  </p>
                  
                </a>
              </div>
              <div class="column">
                <a href="https://app.usertesting.com/v/1d2e545f-15a5-4100-a08b-2171b71a78f6?encrypted_video_handle=7a67d390-b801-4d88-8ed8-4d06d2c75cc1#!/notes">
                <img
                    src={require("../one.png")}
                    width="500"
                    height="250"
                  ></img>
                  <p>
                  User Three
                  </p>

                </a>
              </div>
              <h4>Findings</h4>
              <p>
                The overall task we gave users was to shop for a specific item
                bundle and add it to their cart, which we split into the
                following subtasks: “search vintage tops, filter for the Harley
                Davidson brand and select the Harley Tees Bundle, then add the
                bundle to your cart.” The users were successful for each task
                and generally described the interface as “easy to use and
                navigate”. While most users did not face many issues, a point of
                error/confusion was the quantity vs amount of pieces shown when
                shopping. Specifically, we ask the user to add a bundle to their
                cart, which includes 20 pieces, but the quantity is listed as 1
                because each bundle is 20 pieces. Users found that it might be a
                bit confusing to list the quantity as 1 instead of 20. Users
                were able to complete the tasks successfully and pretty
                efficiently, though one user was unsure of completing a task
                because for our search function, the user simply clicks the
                search bar, instead of typing the actual query. Potential
                interface changes we could make are clearly indicating that each
                bundle includes X pieces, so we can put conversions for the
                quantities. For example, if each bundle includes 20 pieces,
                picking quantity 1 will show (20pc), quantity 2 (40pc), etc. As
                well, we could have live time assistance with an employee
                through our chat feature, which one user was hoping to see.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container" id="further">
        <h2>V. Further Exploration</h2>
        <p>
          In the future, I would like to use the website we used to get user
          feeback for all of my projects. It was extremely helpful and gave
          realistic results. However, I believe our tasks could have reflected a
          more complex task to show the difficulties that might arise.
        </p>
      </div>
    </div>
  );
};

export default Fleek;
