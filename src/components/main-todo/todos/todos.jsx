import TodosAdded from "./todos-added";

const Todos = () => {
  
  TodosAdded();

  return (
    <>
      <div className="m-2 mt-4 p-3 todo-display-area rounded-2">
        <h2 className="m-0"> <strong> Todos </strong> </h2>
        <div id="todo-area" className="row p-2">
          <div className="todo shadow rounded-1 bg-light p-4 mt-2 mb-2 m-1">
            <div>
              <h4 className="m-0">
                <strong>
                  Welcome
                </strong>
              </h4>

              <p className="mb-1">
                this is a TodoApp developed by Mobin Bordbari.
                <br />              
              </p>
              <a href="https://github.com" target="_" className="btn-link pt-1 pb-1 p-3 rounded-1 mt-1"> view source on Github </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;