import { API } from "./api";
import useRequest from "./useRequest";
import {replace} from "stylis";

export interface UserResponse {
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

  async function fetchUserDetail(value: any) {
    return await Request.get(API.GET_USER_DATA.replace("{id}",value));
  }

  return {fetchUser,fetchUserDetail}
};

