import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
`;

Wrapper.displayName = 'TransactionWrapper'

export const Input = styled.input`
  background: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 0 5px;
  margin:0 10px 3px 0;
  min-width: 80px;
  height: 40px;
  outline:none;
`;

Input.displayName = 'Input'

export const Row = styled.div`
  display:flex;
  align-items:center
`;

Input.displayName = 'Row'

export const Button = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 0 21px;
  margin-right: 10px;
  width: 118px;
  height: 40px;
  outline:none;
  box-sizing: border-box;
  background-color: #e0e0e0;
  color: rgba(0,0,0,0.87);
  font-size:18px;

  &:hover{
    cursor:pointer
  }
`;

Button.displayName = 'Button'

export const Comment = styled.textarea`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin:0px;
  line-height: 1.5;
  height: 40px;
  outline:none;
  box-sizing: border-box;
  width: 138px;
  min-width: 140px;

`;

Comment.displayName = 'Comment'