import axios from "axios";
import { API } from "../utils/Constants";

export async function updateProfileData(Data) {
  try {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json"
    };

    let bodyContent = JSON.stringify(Data);

    let reqOptions = {
      url: API.baseURL,
      method: "POST",
      headers: headersList,
      data: bodyContent
    };

    let response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: "something went wrong" };
  }
}
