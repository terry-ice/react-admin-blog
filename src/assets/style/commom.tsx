import styled, { css } from "styled-components";

export const margin = () => css`
  padding: 0;
  margin: 0;
`;

const btn = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  font-size: 13px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #fff;
`;

export const btnPrimary = btn("#2E5BFF", "#2E5BFF");

export const StyleLaber = styled.div.attrs((props: any) => ({
  width: props.width || "100%",
  height: props.height || "40px",
  size: props.size || "13px"
}))`
  label {
    display: flex;
    flex-direction: column;
    color: #b0bac9;
    font-size: ${props => props.size};
    margin-top: 20px;
    input {
      margin-top: 5px;
      width: ${props => props.width};
      height: ${props => props.height};
      background: rgba(224, 231, 255, 0.2);
      border-radius: 5px;
      color: #2e384d;
      border: 1px solid rgba(224, 231, 255, 1);
    }
    textarea {
      margin-top: 5px;
      width: ${props => props.width};
      height: ${props => props.height};
      background: rgba(224, 231, 255, 0.2);
      border-radius: 5px;
      color: #2e384d;
      border: 1px solid rgba(224, 231, 255, 1);
    }
  }
`;

export const StyleBtn = styled.div.attrs((props: any) => ({
  width: props.width || "320px",
  height: props.height || "50px"
}))`
  button {
    margin-top: 26px;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    &[type="submit"] {
      ${btnPrimary};
    }
    &[type="button"] {
      ${btnDefault};
    }
  }
`;

export const StyleTitle = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
  h3 {
    font-size: 22px;
    color: #2e384d;
    flex: 1;
    ${margin};
  }
`;
