import styled from 'styled-components';

const DefaultInputWrapper = styled.div`
  width: 100%;
  height: 50px;
  opacity: ${({ active }) => active ? 1 : 0.3};
  position: relative;

  .file-label {
    display: inline-block;
    font-weight: bold;
    height: 50px;
    border-radius: 2px;
    padding: 17px;
    text-decoration: none;
  }

  .file-label:hover {
    cursor: pointer;
    height: 50px;
    border-radius: 2px;
    padding: 17px;
  }

  input, input:active, input:focus, .file-label {
    height: 100%;
    border-radius: 2px;
    box-sizing: border-box;
    width: 100%;
    font-weight: 300;
    border: 1px solid black;
    font-size: 11px;
    background: none;
    z-index: 2;
    position: relative;
    box-shadow: none;
    outline: none;
    text-align: left;

    font-family: HelveticaNeue;
    font-size: 11px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;

    &::-webkit-input-placeholder {
      color: #000000;
    }
    &::-moz-placeholder {
      color: #000000;
    }
    &:-ms-input-placeholder {
      color: #000000;
    }
    &:-moz-placeholder {
      color: #000000;
    }
  }
  input[type=file] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    z-index: -10;
    cursor: cell;
  }
  .clear-button {
    height: 11px;
    width: 11px;
    position: absolute;
    right: 20px;
    top: 34%;
    z-index: 10;
    font-size: 21px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default DefaultInputWrapper;
