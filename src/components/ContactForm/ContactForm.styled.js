import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: white;
  border: 3px solid #010f3f;
  border-radius: 4px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #010f3f;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #010f3f;
  color: #010f3f;
  font-size: 20px;
`;
