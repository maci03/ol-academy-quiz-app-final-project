import styled, { css } from 'styled-components';

export const SSingleQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
`

export const Question = styled.div`
    width: 100%;
    align-items: center;
    padding: 12px;
    ${(props) => {
        if (props.answered) {
            if (props.correct) {
                return css`
                    background-color: green;
                `;
            } else {
                return css`
                    background-color: red;
                `;
            }
        }
    }}
`;

export const Answers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`;

export const Answer = styled.button`
    padding: 10px;
    width: 100%;
    border: 1px solid black;
    background-color: white;
    color: black;
    :hover {
        cursor: pointer;
        background-color: cyan;
    }
    :disabled {
        border: 1px solid gray;
        cursor: not-allowed;
        :hover {
            background-color: white;
        }
        ${(props) => {
        if (props.correct) {
            return css`
                    background-color: green;
                    :hover {
                        background-color: green;
                    }
                `;
        } else {
            return css`
                    background-color: red;
                    :hover {
                        background-color: red;
                    }
                `;
        }
    }
    }
`