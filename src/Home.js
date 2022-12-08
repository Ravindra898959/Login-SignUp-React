import React from "react";
import HeaderContent from "./Components/HeaderContent";

const Home = () => {
  // const [modal, setModal] = useState(false);
  return (
    <>
      {/* <div className="home-modal">
        <h1>Are you sure you want to open the modal </h1>
        <button
          className="btn"
          onClick={() => {
            setModal(true);
          }}
        >
          Open
        </button>
        {modal && <Modal closeModal={setModal} />}
      </div> */}
      <HeaderContent />
    </>
  );
};

export default Home;
