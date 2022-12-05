import styled from 'styled-components'

export const SQuiz = styled.div`
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
`;

export const SButton = styled.button`
    width: 30%;
    height: 32px;
    border: 1px solid black;
    background-color: yellow;
    color: black;
    :hover {
        cursor: pointer;
        background-color: orange;
    }
`;