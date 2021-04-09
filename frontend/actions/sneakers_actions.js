import * as APIUtil from "../util/sneakers_api_util";

export const RECEIEVE_ALL_SNEAKERS = "RECEIEVE_ALL_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER";
export const RECEIVE_ALSO_VIEWED_SNEAKERS = "ALSO_VIEWED_SNEAKERS";

/**GRABS PARTIAL COLLECTION */
export const RECEIVE_ADIDAS_FRONT_PAGE_COLLECTION =
  "RECEIVE_ADIDAS_FRONT_PAGE_COLLECTION";
export const RECEIVE_YEEZY_FRONT_PAGE_COLLECTION =
  "RECEIVE_YEEZY_FRONT_PAGE_COLLECTION";
export const RECEIVE_SBS_FRONT_PAGE_COLLECTION =
  "RECEIVE_SBS_FRONT_PAGE_COLLECTION";
export const RECEIVE_JORDAN_FRONT_PAGE_COLLECTION =
  "RECEIVE_JORDAN_FRONT_PAGE_COLLECTION";

/** GRABS FULL COLLECTION*/

export const RECEIVE_ADIDAS_COLLECTION = "RECEIVE_ADIDAS_COLLECTION";
export const RECEIVE_YEEZY_COLLECTION = "RECEIVE_YEEZY_COLLECTION";
export const RECEIVE_SBS_COLLECTION = "RECEIVE_SBS_COLLECTION";
export const RECEIVE_JORDAN_COLLECTION = "RECEIVE_JORDAN_COLLECTION";

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

/** GRABS PARTIAL COLLECTION*/
export const getAdidasFrontPageSneakers = (sneakers) => ({
  type: RECEIVE_ADIDAS_FRONT_PAGE_COLLECTION,
  sneakers,
});

export const getYeezyFrontPageSneakers = (sneakers) => ({
  type: RECEIVE_YEEZY_FRONT_PAGE_COLLECTION,
  sneakers,
});

export const getJordanFrontPageSneakers = (sneakers) => ({
  type: RECEIVE_JORDAN_FRONT_PAGE_COLLECTION,
  sneakers,
});

export const getSbsFrontPageSneakers = (sneakers) => ({
  type: RECEIVE_SBS_FRONT_PAGE_COLLECTION,
  sneakers,
});

/** GRABS FULL COLLECTION */

export const getAdidasSneakers = (sneakers) => ({
  type: RECEIVE_ADIDAS_COLLECTION,
  sneakers,
});

export const getYeezySneakers = (sneakers) => ({
  type: RECEIVE_YEEZY_COLLECTION,
  sneakers,
});

export const getJordanSneakers = (sneakers) => ({
  type: RECEIVE_JORDAN_COLLECTION,
  sneakers,
});

export const getSbsSneakers = (sneakers) => ({
  type: RECEIVE_SBS_COLLECTION,
  sneakers,
});

/** action creators */

export const getAllSneakers = () => (dispatch) => {
  return APIUtil.getAllShoes().then((sneakers) =>
    dispatch(collectAllSneakers(sneakers))
  );
};

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

/** GRABS PARTIAL COLLECTION */

export const getAdidasFrontPageCollection = () => (dispatch) => {
  return APIUtil.getAdidasFrontPageCollection().then((sneakers) =>
    dispatch(getAdidasFrontPageSneakers(sneakers))
  );
};

export const getYeezyFrontPageCollection = () => (dispatch) => {
  return APIUtil.getYeezyFrontPageCollection().then((sneakers) =>
    dispatch(getYeezyFrontPageSneakers(sneakers))
  );
};

export const getSbsFrontPageCollection = () => (dispatch) => {
  return APIUtil.getSbsFrontPageCollection().then((sneakers) =>
    dispatch(getSbsFrontPageSneakers(sneakers))
  );
};

export const getJordanFrontPageCollection = () => (dispatch) => {
  return APIUtil.getJordanFrontPageCollection().then((sneakers) =>
    dispatch(getJordanFrontPageSneakers(sneakers))
  );
};

/** GRABS FULL COLLECTION  */
export const getAdidasCollection = () => (dispatch) => {
  return APIUtil.getAdidasFullCollection().then((sneakers) =>
    dispatch(getAdidasSneakers(sneakers))
  );
};

export const getYeezyCollection = () => (dispatch) => {
  return APIUtil.getYeezyFullCollection().then((sneakers) =>
    dispatch(getYeezySneakers(sneakers))
  );
};

export const getSbsCollection = () => (dispatch) => {
  return APIUtil.getSbsFullCollection().then((sneakers) =>
    dispatch(getSbsSneakers(sneakers))
  );
};

export const getJordanCollection = () => (dispatch) => {
  return APIUtil.getJordanFullCollection().then((sneakers) =>
    dispatch(getJordanSneakers(sneakers))
  );
};
