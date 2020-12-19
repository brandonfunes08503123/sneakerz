import * as APIUtil from "../util/sneakers_api.util";

export const RECEIEVE_ALL_SNEAKERS = "RECEIEVE_ALL_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER";

export const collectAllSneakers = (sneakers) => ({
  type: RECEIEVE_ALL_SNEAKERS,
  sneakers,
});

export const collectSneaker = (sneaker) => ({
  type: RECEIVE_SNEAKER,
  sneaker,
});

export const getAllSneakers = () => (dispatch) => {
  return APIUtil.getAllShoes().then((sneakers) =>
    dispatch(collectAllSneakers(sneakers))
  );
};

export const getSneaker = (shoe) => (dispatch) => {
  return APIUtil.getShoe(shoe).then((sneaker) =>
    dispatch(collectSneaker(sneaker))
  );
};
