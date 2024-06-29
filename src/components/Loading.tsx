import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="10"
      animationDuration="0.8"
      width="300"
      visible={true}
    />
  );
}
export default Loader;
