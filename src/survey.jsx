import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "./index.css";
import { json } from "./json.js";

function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    const results = JSON.stringify(sender.data, null, 3);
  });

  survey.onAfterRenderQuestion.add(function (survey, options) {
    //Do nothing if a question contains no description to show in a modal popup
    if (!options.question.popupdescription) return;
    //Create a 'More Info' button to invoke a modal popup
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dialogBox-btn";
    btn.innerHTML = "More Info";
    var question = options.question;
    btn.onclick = function () {
      showDescription(question);
    };
    //Insert the created 'More Info' button into the rendered question's header
    var header = options.htmlElement.querySelector("h5");
    if (!header) header = options.htmlElement;
    header.appendChild(btn);
  });

  survey.onAfterRenderPage.add(function (survey, options) {
    //Do nothing if a page contains no description to show in a modal popup
    if (!options.page.popupdescription) return;
    //Create a 'More Info' button to invoke a modal popup
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dialogBox-btn";
    btn.innerHTML = "More Info";
    btn.onclick = function () {
      showDescription(survey.currentPage);
    };
    //Insert the created 'More Info' button into the rendered page's header
    var header = options.htmlElement.querySelector("h4");
    if (!header || !!header.querySelector(".dialogBox-btn")) return;
    header.appendChild(btn);
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;
