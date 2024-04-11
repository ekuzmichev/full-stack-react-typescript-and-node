import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
}

const ScreenC = (props: ScreenCProps) => {
  const { message } = props;
  let { userId } = useParams();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <div>
      {message}; Got user: {userId}
    </div>
  );
};

export default ScreenC;
