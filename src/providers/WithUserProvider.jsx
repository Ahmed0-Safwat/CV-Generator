import React, { useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

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

    return isLoading ? (
      <Stack height="100%" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Stack>
    ) : (
      <Component {...props} />
    );
  };

  return WrappedComponent;
};

export default WithUserProvider;
