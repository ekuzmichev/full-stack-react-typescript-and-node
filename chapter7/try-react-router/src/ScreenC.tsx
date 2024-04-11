import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
}

const ScreenC = (props: ScreenCProps) => {
  const { message } = props;
  
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  const onGoBackBtnClick = () => {
    navigate(-1);
  };

  return (
    <div>
      {message}; Got user: {userId}
      <div>
        <button onClick={onGoBackBtnClick}>Go back</button>
      </div>
    </div>
  );
};

export default ScreenC;
