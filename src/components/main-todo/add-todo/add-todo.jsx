import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddTodo = () => {
  // toggle todo type between true & false
  let isImportant = false;
  const toggleImportant = () => {
    document.getElementById("important-toggle").classList.toggle("checked");
    if (!isImportant)
      document.getElementById("tick").style.maxWidth = "20px";
    else
      document.getElementById("tick").style.maxWidth = "0px";
      
    isImportant = !isImportant;
  };

  //add todo list to local stroage
  const mySwal = withReactContent(Swal);
  const addTodoList = () => {
    let todoName = document.getElementById("todo-name-inp").value;
    let todoDate = document.getElementById("todo-date").value;
    if (!todoName.trim() || !todoDate.trim()) {
      mySwal.fire(
        "Error",
        "Todo's name or date is empty!",
        "error"
      ) 

      return false;
    };
    let count = localStorage.getItem("count") ? localStorage.getItem("count") : 1;
    localStorage.setItem(`todo${count}`, todoName);
    localStorage.setItem(`todoDate${count}`, todoDate);
    if (isImportant) {
      localStorage.setItem(`todo-important${count}`, 'Is important for you!');
    } else {
      localStorage.setItem(`todo-important${count}`, 'not Important.');
    }
    localStorage.setItem("count", +(count) + 1);
    let allCount = localStorage.getItem("all-count") ? localStorage.getItem("all-count") : 1;
    localStorage.setItem("all-count", +allCount + 1);
    window.location.reload();
    
  };

  return (
    <div className="todo-control m-2 p-2">

      <div className="m-2">
        
        <div className="add-todo p-4 rounded-2 row position-relative">

          <div className="p-2 col-6">
            <label htmlFor="#todo-name-inp"> <strong> Todo Name <span className="text-danger"> * </span> </strong> </label>
            <br />
            <input className="mt-2 todo-name-inp w-100 p-1" type="text" id="todo-name-inp"/>
          </div>

          <div className="p-2 col-6">
            <label htmlFor="#todo-date"> <strong> Todo Date <span className="text-danger"> * </span> </strong>  </label>
            <br />
            <input className="mt-2 w-100 p-1" type="date" id="todo-date" />
          </div>

          <div className="p-2 col-12 d-flex align-items-center">
            <span htmlFor=""> <strong> is it Important for You? </strong> </span>

            <button id="important-toggle" className="check-box mt-0 mb-0 m-2 rounded-1 shadow d-flex align-items-center justify-content-center" onClick={toggleImportant}>
              <img id="tick" src="https://img.icons8.com/ios-filled/50/ffffff/checkmark--v1.png" alt="" />
            </button>

          </div>

          <button className="col-6 col-sm-1 rounded-2 p-1 position-absolute add-btn shadow" onClick={ addTodoList }>
            <strong>
              Add
            </strong>
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddTodo;