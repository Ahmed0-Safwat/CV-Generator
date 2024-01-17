import { useMutation } from "@tanstack/react-query";

const useSignoutUser = () => {
  const signoutUser = async (data) => {};

  return useMutation(signoutUser);
};

export default useSignoutUser;
