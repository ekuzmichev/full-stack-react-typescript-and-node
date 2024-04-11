interface ScreenCProps {
  message: string;
}

const ScreenC = (props: ScreenCProps) => {
  const { message } = props;
  return <div>{message}</div>;
};

export default ScreenC;
