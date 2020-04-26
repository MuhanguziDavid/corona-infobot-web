import React from 'react';
import { Table } from 'react-bootstrap';

const TreesTable = props => {
  const {retrievedTrees, handleSubmit, handleClick} = props;
  return (
    <div className="dashboard-container__card2__table">
      <Table striped bordered hover size="sm">
        {retrievedTrees.type === "treeList" ? (
          // display trees list (all trees)
          <React.Fragment>
            <thead>
              <tr>
                <th>id</th>
                <th>tree</th>
              </tr>
            </thead>
            <tbody>
              {retrievedTrees.payloadData.map((tree, index) => (
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
          retrievedTrees.type === 'tree' ? (
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
                {retrievedTrees.payloadData.map((tree, index) => (
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
            retrievedTrees.type === 'intent' ? (
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
                  {retrievedTrees.payloadData.map((tree, index) => (
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
            ) : (
              // dispaly answers
              <React.Fragment>
                <thead>
                  <tr>
                    <th>body</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{retrievedTrees.body}</td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          )
        )}
      </Table>
    </div>
  )
}

export default TreesTable;
