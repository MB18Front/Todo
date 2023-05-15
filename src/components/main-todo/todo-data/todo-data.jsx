import { useEffect } from "react";

const TodoData = () => {

  const date = new Date();
  let
    donedTodo = +localStorage.getItem("doned"),
    allCount = +localStorage.getItem("all-count"),
    present = (donedTodo * 100) / (allCount - 1);
  useEffect(
    () => {
      document.getElementById("present").style.width = `${present}%`;
    }
  )

  return (
    <div className="todo-data p-2 m-2 row rounded-2">
      <div className="today-Date rounded-2 p-1 m-2 d-flex align-items-center">
        <div>
          <h5 className="m-0">
            <strong>
              Today
            </strong> : <span className="pt-3"> {`${ date.getFullYear() } / ${ date.getMonth() } / ${ date.getDate() }`} </span>
          </h5>
        </div>
      </div>

      <div className="todos-you-did p-1 m-2 rounded-2  d-flex align-items-center">
        <div>
          <h5 className="m-0">
            <strong>
              doned
            </strong> : <span> {localStorage.getItem("doned") ? localStorage.getItem("doned") : "0"} </span>
          </h5>
        </div>
      </div>

      <div className="present-complete rounded-1 position-relative bg-light m-2 col d-flex align-items-center">
        <div id="present" className="present rounded-1">
          
        </div>
      </div>
    </div>
  )
};

export default TodoData;
