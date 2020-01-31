import React, { Component } from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

/**
 * Import Shop dat into the state of the component
 * Instantiate an instance of collections in order to
 * follow the principle of unidirectional data flow in our react app
 * Import collection Preview and iterate in collectons state
 */

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return <div className="shop-page">
    {collections.map(({id, ...othercollectionProps}) => (
      <CollectionPreview key={id} {...othercollectionProps}/>
    ))}</div>;
  }
}
export default ShopPage;
