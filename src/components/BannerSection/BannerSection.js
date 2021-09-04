import {
  BannerSectionContainer,
  DetailsContainer,
  BannerMainHeading,
  BannerDescription,
  BannerSectionButton,
  ShadowDiv,
} from './styledComponents'

const BannerSection = props => {
  const {title, description, url1, url2} = props
  return (
    <BannerSectionContainer url1={url1} url2={url2}>
      <DetailsContainer>
        <BannerMainHeading>{title}</BannerMainHeading>
        <BannerDescription>{description}</BannerDescription>
        <BannerSectionButton>Play</BannerSectionButton>
      </DetailsContainer>
      <ShadowDiv />
    </BannerSectionContainer>
  )
}

export default BannerSection
