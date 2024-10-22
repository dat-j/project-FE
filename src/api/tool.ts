import { API } from "./api";
import useRequest from "./useRequest";

interface UserResponse {
  data?: {
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
    };
  };
}
export function useFetch(){
  const Request = useRequest();
  async function fetchUser(value: any) {
    return await Request.post<UserResponse>(API.USER_SIGN_IN, value);
  }
  return {fetchUser}
};

