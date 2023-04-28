import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const [jobs, setJobs] = useState([])

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
        console.log('dati array',data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={10} className="mx-auto my-xs-1 my-md-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={12} md={2} className="mx-auto my-xs-1 my-md-3">
          <Link to={'/favourites'} className='btn btn-success'>
            FAVOURITES JOBS
          </Link>
        </Col>
        <Col xs={10} className="mx-auto mt-xs-3 mt-md-0">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
