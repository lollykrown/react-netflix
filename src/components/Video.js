import React, { Component } from "react";
// import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Video extends Component {

  render() {
    return (
      <section className="container-fluid my-3 custom-padd">
        <div class="container-fluid">
         <h2 class="vid">{}</h2>
          <div class="row vid">
                  <div class="card" >
                      <Link to="/movies'/m.id">
                      <figure class="figure">
                        <img src="'https://image.tmdb.org/t/p/w500/' + m?.poster_path" class="figure-img img-fluid rounded" alt="poster" width="200" height="300"/>
                        <figcaption class="figure-caption" title="m.title">{}</figcaption>
                      </figure>
                    </Link>
                      <div>
                      <p class="r-date"><strong>{}</strong></p>
                      <span class="fa fa-heart-o"></span>
                      <span class="fa fa-heart" ></span>
                    </div>
                  </div>
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
