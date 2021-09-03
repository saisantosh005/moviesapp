import Slider from 'react-slick'
import {SlickMainContainer, Image} from './styledComponents'

const SlickSection = props => {
  const {dataList} = props
  const renderSlickList = dataList.map(each => {
    const url = `https://image.tmdb.org/t/p/w500/${each.url}`
    return <Image src={url} key={each.id} />
  })

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
