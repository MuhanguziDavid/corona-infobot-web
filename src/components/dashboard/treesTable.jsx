import React from 'react';
import { Table } from 'react-bootstrap';

const TreesTable = props => {
  const {retrievedTrees, handleSubmit, handleClick} = props;
  return (
    <div className="dashboard-container__card2__table">
      <Table striped bordered hover size="sm">
        {retrievedTrees.data[0] && retrievedTrees.data[0].type === "tree" ? (
          // display trees list (all trees)
          <React.Fragment>
            <thead>
              <tr>
                <th>id</th>
                <th>list of trees</th>
              </tr>
            </thead>
            <tbody>
              {retrievedTrees.data.map((tree, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleClick(tree.id, tree.type)}>
                    <td>{tree.id}</td>
                    <td>{tree.title}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </React.Fragment>
        ) : (
          retrievedTrees.data.type === 'tree' ? (
            // dispaly trees
            <React.Fragment>
              <thead>
                <tr>
                  <th>No</th>
                  <th>type</th>
                  <th>name</th>
                  <th>body</th>
                </tr>
              </thead>
              <tbody>
                {retrievedTrees.data.payloadData.map((tree, index) => (
                  <React.Fragment key={index}>
                    <tr onClick={() => handleClick(tree.id, tree.type)}>
                      <td>{tree.number ? tree.number : 'N/A'}</td>
                      <td>{tree.type}</td>
                      <td>{tree.name}</td>
                      <td>{tree.body}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </React.Fragment>
          ) : (
            // dispaly intents
            <React.Fragment>
              <thead>
                <tr>
                  <th>No</th>
                  <th>type</th>
                  <th>title</th>
                </tr>
              </thead>
              <tbody>
                {retrievedTrees.data.payloadData.map((tree, index) => (
                  <React.Fragment key={index}>
                    <tr onClick={() => handleClick(tree.id, tree.type)}>
                      <td>{tree.number ? tree.number : 'N/A'}</td>
                      <td>{tree.type}</td>
                      <td>{tree.title}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </React.Fragment>
          )
        )}
      </Table>
    </div>
  )
}

export default TreesTable;
