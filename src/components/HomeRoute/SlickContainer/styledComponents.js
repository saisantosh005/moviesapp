import styled from 'styled-components'

const SlickMainContainer = styled.div`
  color: #ffffff;
`
const Image = styled.img`
  width: 90px;
  height: 64px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 254px;
    height: 170px;
  }
`
export {SlickMainContainer, Image}
