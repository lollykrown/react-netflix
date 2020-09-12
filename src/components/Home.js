import React, { Component } from "react";
// import { ProductConsumer } from "../../context";
import MyCarousel from "./MyCarousel";
import ItemList from "./ItemList";
import Frame from "./Frame";
import TextFrame from "./TextFrame";
import { Link } from "react-router-dom";

import {accessoriesProducts} from '../../data/accessories';
import {kidsProducts} from '../../data/kids';
import {beautyProducts} from '../../data/beauty';

export default class Home extends Component {
  state = {
    accessories: accessoriesProducts,
    kids: kidsProducts,
    beauty: beautyProducts
  };
  render() {
    return (
      <section className="container-fluid my-3 custom-padd">
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-10 col-lg-8 order-md-1 order-lg-2">
                <MyCarousel />
              </div>
              <div className="col-lg-2 custom-bg">
                <ItemList />
              </div>
              <div className="col-12 col-lg-2 custom-bg order-sm-3 order-lg-3 pt-4">
                <Link to="/products" className="card mb-5">
                  <img className="card-image img-fluid" src="img/ani1.gif"  height="120" alt="gif1" />
                </Link>
                <Link to="/products" className="card mt-5">
                <img className="card-image img-fluid" src="img/ani3.gif" height="120" alt="gif1" />
                </Link>
                {/* <div className="card my-2">
                <img className="card-image img-fluid" src="img/ani2.gif" height="120" alt="gif1" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-3">
              <div className="col-6 col-lg-3 pl-0 pr-2 ">
                <div className="card bg-primary">
                  <div className="card-body">
                    Buy Airtime
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 pr-2">
                <div className="card bg-warning">
                  <div className="card-body">
                    Order Food Online
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 pr-2">
                <div className="card bg-info">
                  <div className="card-body">
                    Book Airline Tickets Online
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 pr-0">
                <div className="card  bg-danger">
                  <div className="card-body">
                    Stream Live Sport Online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <Frame elem="test" className="mx-xs-0 mx-lg-4 px-lg-4" />
        <Frame elem='' className="mx-xs-0 mx-lg-4 px-lg-4" />
        <Frame elem='' className="mx-xs-0 mx-lg-4 px-lg-4" />
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
        <TextFrame className="mx-xs-0 mx-lg-4 px-lg-4" />

      </section>
    );
  }
}
