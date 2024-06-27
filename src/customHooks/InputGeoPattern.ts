import { useState } from "react";

const useGeorgianPattern = () => {
  const [geoErrorMessage, setGeoErrorMessage] = useState<{
    [key: string]: string;
  }>({});
  const handleGeorgianInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const georgianPattern = /^[\u10A0-\u10FF\u2D00-\u2D2F]+$/;
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];
    const currentId = event.currentTarget.id;
    if (allowedKeys.includes(event.key) || georgianPattern.test(event.key)) {
      setGeoErrorMessage((prevErrors) => ({
        ...prevErrors,
        [currentId]: "",
      }));
      return;
    } else {
      setGeoErrorMessage((prevErrors) => ({
        ...prevErrors,
        [currentId]: "ქართული",
      }));
      return event.preventDefault();
    }
  };

  return { handleGeorgianInput, geoErrorMessage };
};

export default useGeorgianPattern;
