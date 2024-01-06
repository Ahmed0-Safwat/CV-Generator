import { useMutation } from "@tanstack/react-query";

const useDeleteProfileImage = () => {
  const deleteProfileImage = async () => {
    const token = sessionStorage.getItem("token");

    const response = await fetch(
      "https://moaaaz2002-001-site1.btempurl.com/api/profileimages/user",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error posting data");
    }
    return await response.json();
  };

  return useMutation(deleteProfileImage);
};

export default useDeleteProfileImage;
