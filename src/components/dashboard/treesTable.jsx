import React from 'react';
import { Table } from 'react-bootstrap';

const TreesTable = props => {
  const {retrievedTrees} = props;
  return (
    <div className="dashboard-container__card2__table">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {retrievedTrees.map(tree => (
            <React.Fragment key={tree.id}>
              <tr>
                <td>{tree.id}</td>
                <td>{tree.title}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TreesTable;
