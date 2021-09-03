import styled from 'styled-components'
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai'

const FooterMainContainer = styled.div`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 96px;
`

const IconContainer = styled.div``
const ContactText = styled.p`
  color: #ffffff;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
`
const GoogleIcon = styled(AiOutlineGoogle)`
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-right: 24px;
`
const TwitterIcon = styled(AiOutlineTwitter)`
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-right: 24px;
`
const InstagramIcon = styled(AiOutlineInstagram)`
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-right: 24px;
`
const YouTubeIcon = styled(AiFillYoutube)`
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-right: 24px;
`
export {
  FooterMainContainer,
  IconContainer,
  ContactText,
  GoogleIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
}
