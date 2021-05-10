import { Table } from "reactstrap";
import { Row, Col } from "reactstrap";

const Todos = (props) => {
  const { todos } = props;
  console.log("todos Todos Component", todos);

  return (
    <>
      <h1>Todo List Page</h1>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((list) => {
                <tr>
                  <td>{list.title}</td>
                  <td>{list.desription}</td>
                </tr>;
              })}
            </tbody>
          </Table>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </>
  );
};

export default Todos;
