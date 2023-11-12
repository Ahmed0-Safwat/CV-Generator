import { useMutation } from "@tanstack/react-query";

const useHelpForm = () => {
  const helpForm = async (data) => {
    const response = await fetch(
      "https://moaaz2002-001-site1.atempurl.com/api/Support/Messages",
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

  return useMutation(helpForm);
};

export default useHelpForm;
