import styled from "styled-components";

export const Container = styled.div`
padding-top: 1px;
  font-family: "Rubik", sans-serif;
  letter-spacing: -0.02em;
  margin: auto;
  width: 356px;
  height: 566px;

  background: #2d2a37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 48px;
  button {
    font-family: "Rubik", sans-serif;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: 64px;
    height: 64px;
    color: #ebebeb;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #2d2a37;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.06);
    border-radius: 9999px;

    font-size: 24px;
    line-height: 28px;
    cursor: pointer;
  }
  .teclado {
    margin-top: 26px;
    margin-inline: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    
  }
  .display {
    
    margin-top: 54px;
    padding-inline: 54px;
  }
  .last-calc {
    text-align: right;
    font-size: 20px;
    line-height: 140%;
    color: #6b6b6b;
  }
  .result {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  .result span {
    font-size: 36px;
    line-height: 140%;
    color: #ebebeb;
  }
  .secondary {
    color: #975dfa;
  }
  .tertiary {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0.01%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #462878;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  }
  .quartiary {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #7f45e2;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  }
`;
