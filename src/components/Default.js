import React from 'react';

function Default() {
    console.log(this.props)
    return (
        <div className="container">
           <div className="row">
              <div className="col-10 mx-auto text-center text-title
              text-capitalize pt-5 white">
                <h1 className="display-3">4040</h1>
                <h1>error</h1>
                <h2>page not found</h2>
                <h3> the requested URL<span className="text-danger">
                  {this.props.location.pathname}</span>{" "} was not found</h3>
              </div>
           </div>
        </div>
    );
}

export default Default;
