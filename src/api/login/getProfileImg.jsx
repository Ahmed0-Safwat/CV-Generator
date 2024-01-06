import { useQuery } from "@tanstack/react-query";

const useFetchProfileImage = (enabled) => {
  const fetchProfileImage = async () => {
    // Retrieve the token from session storage
    const token = sessionStorage.getItem("token");

    const response = await fetch(
      "https://moaaaz2002-001-site1.btempurl.com/api/profileimages/user",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return await response.json();
  };

  return useQuery(["profileImage"], fetchProfileImage, {
    enabled,
  });
};

export default useFetchProfileImage;
