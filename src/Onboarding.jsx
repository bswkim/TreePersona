import React, { useState } from "react";
import "./App.css";
import CardOverlay from "./Card";

function OnboardingScreen() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  const handleStartTest = () => {
    setShowOnboarding(false);
    // Code to start the test
  };

  const handleAboutUsClick = () => {
    setShowAboutUs(!showAboutUs);
  };

  const handleExitAboutUs = () => {
    setShowAboutUs(false);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const handleExitContact = () => {
    setShowContact(false);
  };

  const handleDonateClick = () => {
    setShowDonate(!showDonate);
  };

  const handleExitDonate = () => {
    setShowDonate(false);
  };

  return (
    <div>
      {showOnboarding && (
        <section
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <nav className="navbar">
            <ul>
              <li>
                <button className="startbutt" onClick={handleAboutUsClick}>
                  About Us
                </button>
              </li>
              <li>
                <button className="startbutt" onClick={handleContactClick}>
                  Contact
                </button>
              </li>
              <li>
                <button className="startbutt" onClick={handleDonateClick}>
                  Donate
                </button>
              </li>
            </ul>
          </nav>
          <h1 className="h1ob">TreePersona</h1>
          <p className="pob">
            Welcome to our personality matching service, where we use the power
            of the OpenAI API to suggest a type of tree that perfectly matches
            your personality!
          </p>
          <button className="startbutt" onClick={handleStartTest}>
            Start Test
          </button>
        </section>
      )}
      {showAboutUs && (
        <div className="overlay">
          <div className="card">
            <CardOverlay
              show={showAboutUs}
              onClose={handleExitAboutUs}
              header="About Us"
              content={
                <p>
                  Our team consists of two members, John Huynh and Brian Kim,
                  both first-year students at UC San Diego. We are both
                  participating in our second hackathon and are passionate about
                  computer science. As newcomers to the field, we are eager to
                  learn and contribute our skills to the hackathon community. We
                  are excited to collaborate with other participants and work
                  towards creating innovative solutions to the challenges
                  presented at the hackathon.
                </p>
              }
            />
          </div>
        </div>
      )}
      {showContact && (
        <div className="overlay">
          <div className="card">
            <CardOverlay
              show={showContact}
              onClose={handleExitContact}
              header="Contact"
              content={
                <p>
                  If you have any questions or concerns, please contact us at
                  <br />
                  <br />
                  <a
                    href="mailto:

                  "
                  >
                    {" "}
                  </a>
                </p>
              }
            />
          </div>
        </div>
      )}
      {showDonate && (
        <div className="overlay">
          <div className="card">
            <CardOverlay
              show={showDonate}
              onClose={handleExitDonate}
              header="Donate"
              content={
                <p>
                  You can help fund important research, conservation efforts,
                  and reforestation projects that are essential for preserving
                  the health and beauty of our natural world. Here are a few
                  organizations that you can consider donating to:
                  <br />
                  <b>The Nature Conservancy:</b>
                  <br />
                  This organization works to protect the lands and waters on
                  which all life depends. They have a Plant a Billion Trees
                  campaign that aims to restore forests in Brazil's Atlantic
                  Forest region. You can donate to their cause here:
                  <br />
                  <a href="https://www.nature.org/en-us/get-involved/how-to-help/plant-a-billion/">
                    The Nature Conservancy Official Website
                  </a>
                  <br />
                  <b>Arbor Day Foundation:</b>
                  <br />
                  This foundation is dedicated to planting trees and helping
                  people understand the importance of trees for our environment.
                  You can donate to their cause here:
                  <br />
                  <a href="https://www.arborday.org/donate/">
                    Arbor Day Foundation Official Website
                  </a>
                  <br />
                  <b>Rainforest Alliance: </b>
                  <br />
                  This organization works to conserve biodiversity and ensure
                  sustainable livelihoods by transforming land-use practices,
                  business practices, and consumer behavior. You can donate to
                  their cause here:
                  <br />
                  <a href="https://www.rainforest-alliance.org/donate/">
                    Rainforest Alliance Official Website
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                  </a>
                </p>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OnboardingScreen;
