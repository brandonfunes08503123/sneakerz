import * as APIUtil from "../util/search_api_util.js";

export const SEARCH_RESULT = "SEARCH_RESULT";
export const NO_RESULT = "NO_RESULT";

export const receiveResult = (sneakerRes) => ({
  type: SEARCH_RESULT,
  sneakerRes,
});

export const noResult = (noResultStr) => ({
  type: NO_RESULT,
  noResultStr,
});

export const searchValue = (shoeStr) => (dispatch) => {
  return APIUtil.searchShoe(shoeStr).then((sneakerRes) => {
    if (typeof sneakerRes[0] === "string") {
      dispatch(noResult(sneakerRes));
    } else {
      dispatch(receiveResult(sneakerRes));
    }
  });
};
