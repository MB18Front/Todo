import { useEffect } from "react";

const TodosAdded = () => {
  useEffect(
    () => {
      let count = localStorage.getItem("count");
      const todoArea = document.getElementById("todo-area");

      for (let i = 1; i < count; i++) {
        todoArea.innerHTML +=
          `
            <div id="todo${i}" class="todo shadow rounded-1 bg-light p-4 mt-2 mb-2 m-1">
              <div>
                <h4 class="m-0">
                  <strong>
                    ${localStorage.getItem(`todo${i}`)}    
                  </strong>
                </h4>

                <h5>
                  <strong> Must be done by </strong> ${localStorage.getItem(`todoDate${i}`)} 
                </h5>

                <p>
                  ${localStorage.getItem(`todo-important${i}`)}
                </p>
                
                <div class="row">
                  <button id="btn-doned" class="btn-link p-2 rounded-1 col-12 m-1">
                    <strong>
                      Doned
                    </strong>
                  </button>
                  <button id="btn-del" class="btn-link p-2 rounded-1 col-12 m-1 invert">
                    <strong>
                      Delete
                    </strong>
                  </button>
                </div>
              </div>

            </div>
          `;
        
        if (localStorage.getItem(`todo${i}-doned`)) {
          document.getElementById(`todo${i}`).className += " doned";
        }
      };  
      
      const
        deleteBtns = document.querySelectorAll("#btn-del"),
        donedBtns = document.querySelectorAll("#btn-doned");
      
      deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          let el = btn.parentElement.parentElement.parentElement,
            index = el.id[el.id.length - 1],
            count = localStorage.getItem("count");
          localStorage.removeItem(el.id);
          localStorage.removeItem("todoDate" + index);// el.id[el.id.length - 1] = last charachter of el.id
          localStorage.removeItem("todo-important" + index);
          localStorage.removeItem(`todo${index}-doned`)
          localStorage.setItem("count", +count - 1);
          el.remove();
          window.location.reload()
        });
      });

      donedBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          let
            el = btn.parentElement.parentElement.parentElement,
            index = el.id[el.id.length - 1],
            donedCount = localStorage.getItem("doned") ? localStorage.getItem("doned") : 0;
          localStorage.setItem(`todo${index}-doned`, true);
          localStorage.setItem("doned", +donedCount + 1)
          window.location.reload();
        });
      });

    }
  )
};


export default TodosAdded;