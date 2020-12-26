import { connect } from "react-redux";
import SearchItems from "./search_items";

const mapStateToProps = (state, ownProps) => {
  const params = new URLSearchParams(ownProps.location.search);
  let value = params.get("query");
  let items = [];

  Object.values(state.entities.sneakers).map((sneaker) => {
    console.log("value: ", value);
    console.log("sneaker: ", sneaker);

    if (sneaker.name.toLowerCase().includes(value.toLowerCase())) {
      items.push(sneaker);
    }
  });

  console.log(items);
  return {
    items,
  };
};

export default connect(mapStateToProps, null)(SearchItems);
