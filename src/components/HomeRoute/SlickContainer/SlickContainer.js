import Slider from 'react-slick'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import {SlickMainContainer, Image} from './styledComponents'

const SlickSection = props => {
  const {dataList} = props
  const renderSlickList = dataList.map(each => {
    const url = `https://image.tmdb.org/t/p/w500/${each.url}`
    return <Image src={url} key={each.id} />
  })

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <SlickMainContainer>
      <Slider {...settings}>{renderSlickList}</Slider>
    </SlickMainContainer>
  )
}
export default SlickSection
