import { useMutation } from "@tanstack/react-query";

const useProfileImage = () => {
  const profileImage = async (formData) => {
    const token = sessionStorage.getItem("token");

    const response = await fetch(
      "https://moaaaz2002-001-site1.btempurl.com/api/profileimages/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error posting data");
    }
    return await response.json();
  };

  return useMutation(profileImage);
};

export default useProfileImage;
