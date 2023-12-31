import { useMutation } from "@tanstack/react-query";

const useVerifyEmail = () => {
  const verifyEmail = async (data) => {
    const response = await fetch(
      `https://moaaaz2002-001-site1.btempurl.com/api/Users/Email/VerifyMail?email=${data?.email}&token=${data?.token}`,
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

  return useMutation(verifyEmail);
};

export default useVerifyEmail;
