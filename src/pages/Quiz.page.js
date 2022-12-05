import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import BooleanQuestion from "../components/BooleanQuestion/BooleanQuestion";
import MultipleQuestion from "../components/MultipleQuestion/MultipleQuestion";
import SingleQuestion from "../components/SingleQuestion/SingleQuestion";
import { SButton, SQuiz } from "../components/styled/StyledComponents.styled";
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

  const renderedQuestion = questions[currentQuestionIdx]

  console.log(questions)

  return (
    <SQuiz>
      {renderedQuestion?.type === 'single' && <SingleQuestion question={renderedQuestion} />}
      {renderedQuestion?.type === 'multiple' && <MultipleQuestion question={renderedQuestion} />}
      {renderedQuestion?.type === 'boolean' && <BooleanQuestion question={renderedQuestion} />}
      {currentQuestionIdx < 2 ? <SButton onClick={() => setCurrentQuestionIdx((prevState) => prevState + 1)}>Next</SButton> : <SButton><Link to='/finish'>Finish</Link></SButton>}
    </SQuiz>
  )
}

export default Quiz;