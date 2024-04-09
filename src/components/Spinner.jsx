import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return (
    <ClipLoader
      color="#4338ca"
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
