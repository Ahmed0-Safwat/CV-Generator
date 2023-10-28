import React, { useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import CircularProgress from "@mui/material/CircularProgress";

const WithUserProvider = (Component) => {
  const WrappedComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

      console.log("sessionStorageUser", sessionStorageUser);
      if (sessionStorageUser) {
        useStore.setState({
          globalState: {
            user: sessionStorageUser,
            image: sessionStorageUser?.image,
          },
        });
      }

      setIsLoading(false);
    }, []);

    return isLoading ? <CircularProgress /> : <Component {...props} />;
  };

  return WrappedComponent;
};

export default WithUserProvider;
