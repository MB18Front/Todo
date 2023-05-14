import "./header.css";

const Header = () => {
  return (
    <>
      <header className="bg-light p-1">
        <div className="m-0 w-100 p-2 row align-items-center">

          <h2 className="col-6 m-0">
            <strong>
              Todo
            </strong>
          </h2>
          
          <div className="col-6 m-0" dir="rtl">
            <a className="decoration-none btn-support btn btn-dark" href="https://coffeebede.com/mbn.front" target="_">Support Me</a>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;