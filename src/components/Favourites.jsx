import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const Favourites = () => {
  const favContent = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();

  return (
        <Container>
        <span className="mx-auto my-3">
      <h1>Favourites Jobs</h1>
      <Link to={"/"} className="display-6">Return to the Homepage</Link>

        </span>
      {favContent.map((data) => (
          <Row
          key={data._id}
            className="mx-0 mt-3 p-3"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
          >
            <Col xs={3}>
              <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={6}>
              <a href={data.url} target="_blank" rel="noreferrer">
                {data.title}
              </a>
            </Col>
            <Col xs={3} className="d-flex justify-content-end">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FAVOURITE", payload: { id: data._id } });
                }}
              >
                <BsTrash3 color="white"/>
              </Button>
            </Col>
          </Row>
      ))}
      </Container>
  );
};

export default Favourites;
