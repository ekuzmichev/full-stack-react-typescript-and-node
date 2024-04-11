import { useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
}

const ScreenC = (props: ScreenCProps) => {
  const { message } = props;
  let { userId } = useParams();
  return <div>{message}; Got user: {userId}</div>;
};

export default ScreenC;
