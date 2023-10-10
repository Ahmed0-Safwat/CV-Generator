import { useMutation } from "@tanstack/react-query";

const useSigninUser = () => {
  const signinUser = async (data) => {
    const response = await fetch(
      "http://moaaz2002-001-site1.atempurl.com/api/Users/login",
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

  return useMutation(signinUser);
};

export default useSigninUser;
