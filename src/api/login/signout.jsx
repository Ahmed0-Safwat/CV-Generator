import { useMutation } from "@tanstack/react-query";

const useSignoutUser = () => {
  const signoutUser = async (data) => {
    const token = sessionStorage.getItem("token");
    console.log("token", token);
    // const response = await fetch(
    //   "https://moaaaz2002-001-site1.btempurl.com/api/Users/logout",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );

    // if (response.ok) {
    //   const responseData = await response.json();
    //   return responseData;
    // } else {
    //   return response;
    // }
  };

  return useMutation(signoutUser);
};

export default useSignoutUser;
