import React from 'react';
import useHTTP from '../../components/useHTTP';
import Card from '../../components/Card';

const apiUrl = 'https://5d1ac8b7dd81710014e87e54.mockapi.io/api/todos';

const Dashboard = () => {
  const { response, isLoading } = useHTTP(apiUrl);

  return (
    <>
      {isLoading && (
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!isLoading && (
        <div className="row">
          <div className="col-sm-6">
            <Card
              header="Todo"
              title={`You have ${
                response.filter(todo => !todo.isCompleted).length
              } tasks to be done.`}
            />
          </div>
          <div className="col-sm-6">
            <Card
              header="Completed"
              title={`Completed ${
                response.filter(todo => todo.isCompleted).length
              } tasks.`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
