import styled from 'styled-components'

const BannerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  background-image: url(${props => props.url2});
  background-size: cover;
  height: 427px;

  @media screen and (min-width: 768px) {
    height: 605px;
    background-image: url(${props => props.url1});
    background-size: cover;
  }
`
const ShadowDiv = styled.div`
  width: 100%;
  height: 162px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(24, 24, 24, 0.546875) 38.26%,
    #181818 92.82%,
    #181818 98.68%,
    #181818 108.61%
  );
  @media screen and (min-width: 768px) {
    height: 162px;
  }
`

const DetailsContainer = styled.div`
  width: 296px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 183px;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-left: 164px;
    margin-top: 199px;
  }
`
const BannerMainHeading = styled.h1`
  color: #ffffff;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 64px;
    line-height: 62px;
  }
`
const BannerDescription = styled.p`
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
`
const BannerSectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #171f46;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  width: 74px;
  height: 40px;
  @media screen and (min-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
    line-height: 24px;
  }
`
export {
  BannerSectionContainer,
  DetailsContainer,
  BannerMainHeading,
  BannerDescription,
  BannerSectionButton,
  ShadowDiv,
}
