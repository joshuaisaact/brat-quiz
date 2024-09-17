import { useReducer, useEffect } from "react";
import "./App.css";
import { initialState, reducer } from "../store/reducer.ts";
import Error from "./Error.tsx";
import Main from "./Main.tsx";
import Loader from "./Loader.tsx";
import StartScreen from "./StartScreen.tsx";
import Question from "./Question.tsx";
import FinishScreen from "./FinishScreen.tsx";

function App() {
  const [{ questions, status, index, score }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const numQuestions: number = questions.length;

  // Locally hosted questions
  useEffect(function () {
    async function FetchData() {
      try {
        const response = await fetch("breact-quiz/data/questions.json");
        console.log(response);
        const data = await response.json();
        console.log(data);
        dispatch({ type: "dataReceived", payload: data.questions });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    FetchData();
  }, []);

  // For testing as an API using json-server. Not used in GH Pages implementation
  // useEffect(function () {
  //   fetch("http://localhost:9000/questions")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch(() => dispatch({ type: "dataFailed" }));
  // }, []);

  return (
    <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" || status === "answered" ? (
        <Question
          dispatch={dispatch}
          question={questions[index]}
          index={index}
          score={score}
          totalQuestions={numQuestions}
        />
      ) : null}
      {status === "finished" && (
        <FinishScreen score={score} dispatch={dispatch} />
      )}
    </Main>
  );
}

export default App;
