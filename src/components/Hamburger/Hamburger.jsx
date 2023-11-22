import "./Hamburger.scss";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <>
      <div className="hamburger" onClick={onClick}>
        {isOpen ? (
          <div className="burger">&times;</div>
        ) : (
          <div className="burger">&#9776;</div>
        )}
      </div>
    </>
  );
};

export default Hamburger;
