import { Navigate } from "react-router-dom";

interface MyComponentProps {
  someProp: string;
  anotherProp: number;
}

interface PrivateRouteProps {
  element: React.ComponentType<MyComponentProps>;
  isAllowed: boolean;
}

const PrivateRoute = ({
  element: Component,
  isAllowed,
  ...rest
}: PrivateRouteProps) => {
  const componentProps: MyComponentProps = {
    someProp: "Example",
    anotherProp: 123,
  };

  return isAllowed ? (
    <Component {...componentProps} {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
