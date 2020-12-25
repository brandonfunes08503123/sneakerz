import { connect } from "react-redux";
import SearchItems from "./search_items";

const mapStateToProps = (state, ownProps) => {
  console.log("Own Props", ownProps);
  const params = new URLSearchParams(ownProps.location.search);
  let value = params.get("query");

  let items = Object.values(state.entities.sneakers).map((sneaker) => {
    if (sneaker.name.includes(value)) {
      return sneaker;
    }
  });

};

export default connect(mapStateToProps, null)(SearchItems);
