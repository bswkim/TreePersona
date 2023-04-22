import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";
import SurveyComponent from "./survey";

const App = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const option = arrayItems[0].option;
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [current, setCurrent] = useState({});
  const ans = JSON.stringify(current, null, 3);

  const handleSurveyComplete = (surveyAns) => {
    surveyAns = JSON.parse(surveyAns);
    setCurrent(JSON.parse(JSON.stringify(surveyAns)));
    replacePrompt(surveyAns);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  const replacePrompt = async (surveyAns) => {
    setInput(
      `What type of a tree (better if endangered) would fit best with someone who likes the color ${surveyAns["question1"]}, music genre ${surveyAns["question2"]}, enjoys vacation in the environment ${surveyAns["question3"]}, favorite outdoor activity is ${surveyAns["question4"]}, favorite food is ${surveyAns["question5"]}, and likes the season ${surveyAns["question6"]} the most? For your information, pick a specific tree, and on the first paragraph introduce the tree, on the second paragraph explain briefly why this tree fits best with the personality, and lastly, provide some information on preservation effort being made in regards to that tree. If there is nothing you can find, provide information on general nature preservation effort.`
    );
  };

  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setButtonPressed(true);
  };

  const [image, setImage] = useState("");
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: input,
      n: 1,
      size: "1024x1024",
    });
    setImage(res.data.data[0].url);
  };

  return (
    <div className="App">
      <h1 className="heading">
        <b>What is your TreePersona?</b>
      </h1>
      <img src="logo.png" />
      {Object.values(current).length === 0 ? (
        <div className="layout">
          <SurveyComponent onSurveyComplete={handleSurveyComplete} />
        </div>
      ) : buttonPressed ? (
        <div>
          <img className="result-image" src={result || ""} alt="result" />
          <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
      ) : (
        <Translation
          doStuff={doStuff}
          result={result}
          handleButtonClick={handleButtonClick}
          generateImage={generateImage}
        />
      )}
    </div>
  );
};

export default App;
