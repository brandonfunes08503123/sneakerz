import * as APIUtil from "../util/sneakers_api.util";

export const RECEIEVE_ALL_SNEAKERS = "RECEIEVE_ALL_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER";
export const RECEIVE_ALSO_VIEWED_SNEAKERS = "ALSO_VIEWED_SNEAKERS";

export const collectAllSneakers = (sneakers) => ({
  type: RECEIEVE_ALL_SNEAKERS,
  sneakers,
});

export const collectSneaker = (sneaker) => ({
  type: RECEIVE_SNEAKER,
  sneaker,
});

export const alsoViewed = (alsoViewedSneakers) => ({
  type: RECEIVE_ALSO_VIEWED_SNEAKERS,
  alsoViewedSneakers,
});

export const getAllSneakers = () => (dispatch) => {
  return APIUtil.getAllShoes().then((sneakers) =>
    dispatch(collectAllSneakers(sneakers))
  );
};

// need to add a route for the different collections
//

export const getSneaker = (skuID) => (dispatch) => {
  return APIUtil.getShoe(skuID).then((sneaker) =>
    dispatch(collectSneaker(sneaker))
  );
};

export const getAlsoViewed = (sneakerID) => (dispatch) => {
  return APIUtil.getAlsoViewed(sneakerID).then((alsoViewedSneakers) =>
    dispatch(alsoViewed(alsoViewedSneakers))
  );
};
