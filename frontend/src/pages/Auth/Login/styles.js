import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 350px;
  background: #ccdefa;
  box-shadow: 3px 3px 3px #adbdd5, -3px -3px 3px #ebffff;
  border-radius: 25px;
  padding: 30px;
  position: absolute;
  top: calc(50% - 125px);
  left: calc(50% - 175px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #6c7a92;
  }

  div {
    width: 100%;
    margin-top: 15px;

    input {
      width: 100%;
      border: none;
      background: #ccdefa;
      border-radius: 24px;
      box-shadow: inset 3px 3px 3px #adbdd5, inset -3px -3px 3px #ebffff;
      font-size: 16px;
      text-align: center;
      padding: 12px 24px;
    }
  }

  button {
    width: 100%;
    border: none;
    background: linear-gradient(145deg, #99c4ff, #005dff);
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 24px;
    box-shadow: 3px 3px 3px #adbdd5, -3px -3px 3px #ebffff;
    color: #ebffff;
    transition: all 0.3s;
    cursor: pointer;
  }

  button:active {
    box-shadow: inset 3px 3px 3px #adbdd5, inset -3px -3px 3px #ebffff;
  }

  .logon {
    margin-top: 15px;
    color: #6c7a92;
  }
`;

export default Form;
