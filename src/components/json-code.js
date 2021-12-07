import React from 'react';
import { jsonCode } from './../utils';
 

const HtmlCode = () => {
  const value = jsonCode();
  return (
    <pre>
       {value}
    </pre>
  );
};

export default HtmlCode;
