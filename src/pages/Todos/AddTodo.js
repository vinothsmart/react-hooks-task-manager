import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";

const AddTodo = (props) => {
  const { handleChange, addTask, form } = props;
  return (
    <>
      <h1>Add Todo Page</h1>
      <Row>
        <Col lg={3}></Col>
        <Col lg={9}>
          <form onSubmit={addTask}>
            <Row>
              <Col lg={12}>
                <h1>Task</h1>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </Col>
              <Col lg={12}>
                <h1>Description</h1>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </Col>
              <Col lg={12}>
                <Button color="primary">Add Task</Button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </>
  );
};

export default AddTodo;
