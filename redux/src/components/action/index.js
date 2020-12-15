  
import { SET_TECHNOLOGY } from "../constants";

export const setTechnology = technology => {
  return {
    type: SET_TECHNOLOGY,
    technology
  };
}