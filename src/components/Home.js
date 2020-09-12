import React, { Component } from "react";
// import { ProductConsumer } from "../../context";
// import MyCarousel from "./MyCarousel";
// import ItemList from "./ItemList";
// import Frame from "./Frame";
// import TextFrame from "./TextFrame";
// import { Link } from "react-router-dom";

// import {accessoriesProducts} from '../../data/accessories';
// import {kidsProducts} from '../../data/kids';
// import {beautyProducts} from '../../data/beauty';

export default class Home extends Component {
  // state = {
  //   accessories: accessoriesProducts,
  //   kids: kidsProducts,
  //   beauty: beautyProducts
  // };
  render() {
    return (
      <section className="container-fluid my-3 custom-padd">
        <div class="container-fluid">
         <h2 class="vid">{}</h2>
          <div class="row vid">
              {/* <div *ngFor="let m of filteredMovies; index as j" class="col-md-4"> */}


              {/* </div> */}
          </div>
      </div>
        {/* <ProductConsumer>
          {(value) => {
              const { kids, beauty } = value;
              if (kids !== 'undefined'){
                // console.log(kids[0].name)
              return (
              <React.Fragment>
                  <Frame elem="elem" className="mx-xs-0 mx-lg-4 px-lg-4" />
              </React.Fragment>
              )}
          }}
         </ProductConsumer> */}

      </section>
    );
  }
}
