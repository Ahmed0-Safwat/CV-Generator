import { useMutation } from "@tanstack/react-query";

const useSignupUser = () => {
  const signupUser = async (data) => {
    const response = await fetch(
      "https://moaaaz2002-001-site1.btempurl.com/api/Users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return response;
    }
  };

  return useMutation(signupUser);
};

export default useSignupUser;
