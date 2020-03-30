import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  max-width: 1170px;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;

  button,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border: 0;
    border-radius: 24px;
    background: linear-gradient(145deg, #99c4ff, #005dff);
    box-shadow: 3px 3px 3px #adbdd5, -3px -3px 3px #ebffff;
    color: #ebffff;
    font-size: 16px;
    cursor: pointer;

    svg {
      margin-left: 5px;
      fill: #ebffff;
    }
  }

  button:active,
  a:active {
    box-shadow: inset 3px 3px 3px #adbdd5, inset -3px -3px 3px #ebffff;
  }

  ul {
    width: 100%;
    height: calc(100vh - 140px);
    margin: 30px auto;
    padding: 30px;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #adbdd5, -3px -3px 3px #ebffff;
    position: relative;

    div {
      display: flex;
      justify-content: space-between;

      h2 {
        width: 100%;
        font-size: 16px;
        text-transform: uppercase;
        color: #6c7a92;
      }

      li:nth-child(1) {
        position: static;
      }

      li {
        color: #6c7a92;
      }
    }

    .wrapper {
      max-height: 97%;
      overflow-y: auto;
      overflow-x: none;
      display: flex;
      padding: 20px 0;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 12px 0 10px 0;
      }

      .btn-actions {
        padding: 0;

        button[type='button'],
        a {
          width: 75%;
        }

        button[type='button']:nth-child(1),
        a:nth-child(1) {
          margin: 0;
        }

        button[type='button'],
        a {
          margin-top: 20px;
        }
      }

      .btn-actions:nth-child(4) {
        position: relative;
        left: 32px;
      }

      .btn-actions:last-child {
        position: relative;
        left: 48px;
      }
    }

    .wrapperBtn {
      width: 100%;
      height: 132px;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background: #ccdefa;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;

      .btnAdd {
        position: absolute;
        bottom: 30px;
        right: 30px;
      }
    }
  }
`;

export default Container;
