import { useEffect, useState } from "react"
const URL = "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db"

function getWithExpiry() {
  const savedQuizStr = localStorage.getItem('fetchedQuiz');

  if (!savedQuizStr) {
    return null;
  };

  const now = new Date();
  const savedQuiz = JSON.parse(savedQuizStr);
  if (now.getTime() > savedQuiz.expiry) {
    localStorage.removeItem('fetchedQuiz');
    return null;
  } else {
    return savedQuiz;
  }
};

function setWithExpiry(value, data, time) {
  const now = new Date();
  const savedData = {
    data,
    expireDate: now + time
  }
  localStorage.setItem(value, JSON.stringify(savedData))
}

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
    const savedData = getWithExpiry();

    if (savedData) {
      setQuestions(savedData.data);
      return;
    }

    fetchQuestions(URL)
      .then(res => {
        setWithExpiry('fetchedQuiz', res, 600000);
        setQuestions(res)
      })
  }, [])

  const renderedQuestions = questions.map(question => <div key={question.id}>{question.question}</div>)

  return (
    <div>
      {renderedQuestions}
    </div>
  )
}

export default Quiz