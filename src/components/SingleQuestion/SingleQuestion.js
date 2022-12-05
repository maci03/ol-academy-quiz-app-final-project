import { useState } from "react";
import { Answer, Answers, Question, SSingleQuestion } from "./SingleQuestion.styled";

const SingleQuestion = (props) => {
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState();

    const checkAnswerHandler = (index) => {
        setAnswered(true);
        if (props?.question?.answer - 1 === index) {
            setCorrect(true)
            console.log('Correct');
        } else {
            setCorrect(false)
            console.log('Incorrect');
        }
    }

    return <SSingleQuestion>
        <Question answered={answered} correct={correct}>
            {props?.question?.question}
        </Question>
        <Answers>
            {props?.question?.options?.map((answer, index) => <Answer key={index} onClick={() => checkAnswerHandler(index)} disabled={answered} correct={props?.question?.answer - 1 === index}>{answer}</Answer>)}
        </Answers>
    </SSingleQuestion>
}

export default SingleQuestion;