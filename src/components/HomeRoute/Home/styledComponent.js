import styled from 'styled-components'

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  min-height: 100vh;
  background: black;
`
const BannerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  background-image: url('https://res.cloudinary.com/delguky36/image/upload/v1630496082/wp2581913-man-of-steel-wallpaper_1_envfzl.png');
  height: 427px;
  background-size: cover;

  @media screen and (min-width: 768px) {
    height: 605px;
    background-image: url('https://res.cloudinary.com/delguky36/image/upload/v1630380340/Image_ixm9tv.png');
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

const TrendingSectionContainer = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    max-width: 75%;
    margin-left: 102px;
    margin-right: 101px;
    margin-top: 32px;
  }
`
const SlickHeaderText = styled.h1`
  color: #ffffff;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  margin: 0px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`

export {
  HomeMainContainer,
  TrendingSectionContainer,
  BannerSectionContainer,
  DetailsContainer,
  BannerDescription,
  BannerMainHeading,
  BannerSectionButton,
  ShadowDiv,
  SlickHeaderText,
}
