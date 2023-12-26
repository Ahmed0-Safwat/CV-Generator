import { useMutation } from "@tanstack/react-query";

const useHelpForm = () => {
  const helpForm = async (data) => {
    const response = await fetch(
      "https://moaaaz2002-001-site1.btempurl.com/api/Support/Message",
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
