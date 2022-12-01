import { useEffect, useState } from "react"
const URL = "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db"

function getWithExpiry() {
  const savedQuizStr = localStorage.getItem('fetchedQuiz');

  if (!savedQuizStr) {
    return null;
  };

  const now = new Date();

  // { data: "", expiry: ""}

  const savedQuiz = JSON.parse(savedQuizStr);

  if (now.getTime() > savedQuiz.expiry) {
    localStorage.removeItem('fetchedQuiz');
    return null;
  } else {
    console.log('quiz exists', savedQuiz);
    return savedQuiz;
  }
};

const fetchQuestions = async (url) => {
  try {
    const response = await fetch(url);
    const parsedData = await response.json();

    const answers = parsedData.answers || [];
    const questions = parsedData.questions || [];

    const desiredData = questions.map(question => {
      const updatedQuestion = { ...question };
      const questionAnswerData = answers.find(answer => answer.id === question.id);

      updatedQuestion.answer = questionAnswerData.answer;
      return updatedQuestion;
    })

    return desiredData;
  } catch (error) {
    return error;
  }
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  useEffect(() => {
    // const savedData = getWithExpiry();

    // if (savedData) {
    //   setQuestions(savedData);
    //   return;
    // }

    fetchQuestions(URL)
      .then(res => {
        console.log('desired data', res)
      })
  }, [])

  return (
    <div>Quiz page</div>
  )
}

export default Quiz