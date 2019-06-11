import { GARCONS } from "../constants/action-types"
import { FILLES } from "../constants/action-types"
import { JUNGLE } from "../constants/action-types"
import { DESERT } from "../constants/action-types"

export const bgg = () => {
  return {
      type: GARCONS
  };
}

export const bgf = () => {
    return {
        type: FILLES
    };
  }

  export const bgj = () => {
    return {
        type: JUNGLE
    };
  }

  export const bgd = () => {
    return {
        type: DESERT
    };
  }