import styled from 'styled-components';

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ccdefa;
  padding: 30px;
  border-radius: 30px;
  box-shadow: inset 3px 3px 3px #adbdd5, inset -3px -3px 3px #ebffff;
  position: absolute;

  button[type='button'] {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background: #ccdefa;
    box-shadow: 2px 2px 2px #adbdd5, -2px -2px 2px #ebffff;
    position: absolute;
    top: 30px;
    right: 30px;

    svg {
      width: 20px;
      height: 20px;
      fill: #6c7a92;
    }
  }

  button[type='button']:active {
    box-shadow: inset 2px 2px 2px #adbdd5, inset -2px -2px 2px #ebffff;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 18px;
      text-transform: uppercase;
      margin-top: 8px;
      margin-bottom: 15px;
      color: #6c7a92;
      text-align: center;
    }

    div {
      width: 100%;
      margin-top: 15px;
      padding: 0 30px;

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
    }

    button:active {
      box-shadow: inset 3px 3px 3px #adbdd5, inset -3px -3px 3px #ebffff;
    }
  }
`;
