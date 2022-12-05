import { useEffect, useState } from "react";
import { Answer, Answers, Question, SMultipleQuestion } from "./SMultipleQuestion.styled";

const MultipleQuestion = (props) => {
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState();
    const [checkedAnswers, setCheckedAnswers] = useState([]);
    const [clicked, setClicked] = useState([]);

    useEffect(() => {
        if (props?.question?.answer?.length === checkedAnswers.length) {
            setAnswered(true);
            if (checkedAnswers.includes(false)) {
                setCorrect(false)
                console.log('Incorrect');
            } else {
                setCorrect(true)
                console.log('Correct');
            }
        }
    }, [checkedAnswers])

    const checkAnswerHandler = (index) => {
        setClicked((prevState) => [...prevState, index])
        if (props?.question?.answer?.includes(index + 1)) {
            setCheckedAnswers((prevState) => [...prevState, true])
        } else {
            setCheckedAnswers((prevState) => [...prevState, false])
        }
    }

    const checkClicked = (index) => {
        return clicked.includes(index)
    }

    return <SMultipleQuestion>
        <Question answered={answered} correct={correct}>
            {props?.question?.question}
        </Question>
        <Answers>
            {props?.question?.options?.map((answer, index) => <Answer key={index} onClick={() => checkAnswerHandler(index)} clicked={checkClicked(index)} disabled={answered} correct={props?.question?.answer?.includes(index + 1)}>{answer}</Answer>)}
        </Answers>
    </SMultipleQuestion>
}

export default MultipleQuestion;