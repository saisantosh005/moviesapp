import styled from 'styled-components'

const PaginationMainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
`
const Button = styled.button`
  align-items: center;
  background: none;
  height: 32px;
  width: 32px;
  color: #d7dfe9;
  border: 1px solid #d7dfe9;
  font-size: 15px;
  box-sizing: border-box;
  border-radius: 2px;
`

const PaginationText = styled.p`
  color: #cbd5e1;
  font-family: 'Bree Serif';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  margin: 0px;
  margin-left: 16px;
  margin-right: 16px;
`
export {PaginationMainContainer, Button, PaginationText}
