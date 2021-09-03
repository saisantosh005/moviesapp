import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import {
  PaginationMainContainer,
  PaginationText,
  Button,
} from './styledComponents'

const Pagination = props => {
  const {increasePageCount, decreasePageCount, pageNumber, totalNumber} = props
  const onIncrease = () => {
    increasePageCount()
  }
  const onDecrease = () => {
    decreasePageCount()
  }

  return (
    <PaginationMainContainer>
      <Button onClick={onDecrease}>
        <IoIosArrowBack />
      </Button>
      <PaginationText>
        {pageNumber} of {totalNumber}
      </PaginationText>
      <Button onClick={onIncrease}>
        <IoIosArrowForward />
      </Button>
    </PaginationMainContainer>
  )
}
export default Pagination
