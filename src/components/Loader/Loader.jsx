import { ThreeDots } from "react-loader-spinner";
const Loader = ({ status }) => {
  return (
    <ThreeDots
      visible={status}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loader;
