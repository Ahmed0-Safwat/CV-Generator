import React, { useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const WithUserProvider = (Component) => {
  const getImage = async () => {
    const token = sessionStorage.getItem("token");

    const response = await fetch(
      "https://moaaaz2002-001-site1.btempurl.com/api/profileimages/user",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return await response.json();
  };

  const WrappedComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

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
