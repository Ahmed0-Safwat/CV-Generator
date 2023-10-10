import { useMutation } from "@tanstack/react-query";

const useSignupUser = () => {
  const signupUser = async (data) => {
    const response = await fetch(
      "http://moaaz2002-001-site1.atempurl.com/api/Users/register",
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
      throw new Error("Error posting data");
    }
  };

  return useMutation(signupUser);
};

export default useSignupUser;
