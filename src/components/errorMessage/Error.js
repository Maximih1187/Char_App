import jpeg from "./error.jpeg";

const ErrorMessage = () => {
  return (
    <img
      src={jpeg}
      style={{
        display: "block",
        width: "400px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
      alt="error"
    />
  );
};

export default ErrorMessage;
