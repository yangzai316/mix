import React, { useMemo } from 'react';

const BoxModel = () => {
  return (
    <div className="box-model">
      <div className="m-top"></div>
      <div className="m-right"></div>
      <div className="m-bottom"></div>
      <div className="m-left"></div>
      <div className="b-top"></div>
      <div className="b-right"></div>
      <div className="b-bottom"></div>
      <div className="b-left"></div>
      <div className="p-top"></div>
      <div className="p-right"></div>
      <div className="p-bottom"></div>
      <div className="p-left"></div>
    </div>
  );
};

export default BoxModel;
