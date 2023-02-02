import React, { memo } from "react";
// import PropTypes from 'prop-types'
import { LoadingAnimationWarpper } from "./style";

const LoadingAnimation = memo(function LoadingAnimation(props) {
  return (
    <LoadingAnimationWarpper>
      <div className="load"></div>
      <div className="load two"></div>
      <div className="load three"></div>
    </LoadingAnimationWarpper>
  );
});

LoadingAnimation.propTypes = {};

export default LoadingAnimation;
