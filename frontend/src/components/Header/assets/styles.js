import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccdefa;
  padding: 10px 0;
  box-shadow: 5px 5px 5px #adbdd5, -5px -5px 5px #ebffff;
  position: relative;

  img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    border-radius: 50%;
    box-shadow: 3px 3px 3px #adbdd5, -3px -3px 3px #ebffff;
  }

  button {
    width: 157.5px;
    border: none;
    background: #ccdefa;
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 24px;
    box-shadow: 3px 3px 3px #adbdd5, -3px -3px 3px #ebffff;
    color: #adbdd5;
    transition: all 0.3s;
    position: absolute;
    right: 120px;
    bottom: 20px;
  }

  button:active {
    box-shadow: inset 3px 3px 3px #adbdd5, inset -3px -3px 3px #ebffff;
  }
`;

export default Header;
