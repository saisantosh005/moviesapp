import styled from 'styled-components'

const SlickMainContainer = styled.div`
  color: #ffffff;
  font-size: 10px;
  background-color: none;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`
const Image = styled.img`
  max-width: 90px;
  max-height: 64px;
  margin-right: 13px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    min-width: 254px;
    min-height: 170px;
  }
`

const ArrowIcon = styled.div`
  color: #ffffff;
`
export {SlickMainContainer, Image, ArrowIcon}
