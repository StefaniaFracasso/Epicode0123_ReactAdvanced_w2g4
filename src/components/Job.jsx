import { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const Job = ({ data }) => {

  const iconStyle = {
    fontSize: '20px',
  }
  
  const dispatch = useDispatch()

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if(clicked){
      dispatch({
        type: 'REMOVE_FAVOURITE',
        payload: data
      })
    } else {
      dispatch({
        type: 'ADD_FAVOURITE',
        payload: data
      })
    }
    setClicked(!clicked)
  }

  return(
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className='d-flex justify-content-end'>
        <Button 
          variant="primary"
          onClick={handleClick}
        >
          {clicked ? <AiFillStar style={iconStyle} color='gold'/> : <AiOutlineStar style={iconStyle}/>}
        </Button>
      </Col>
    </Row>
  )
}

export default Job
