import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Helmet } from "react-helmet";

Meteor.startup(function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});

export const App = props => {
  return (
    <div>
      <Helmet>
        <title>FocalLocal Public Happiness Map</title>
        <meta
          name="description"
          content="The FocalLocal Public Happiness Movement, for a happier, safer, and more connected place for everybody. Find public happiness events happening around you using this map."
        />
        <meta name="robots" content="all" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
    </div>
  );
};
