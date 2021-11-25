import React from 'react';
import { htmlCode } from './../utils';

import { html_beautify } from 'js-beautify';

const HtmlCode = () => {
  const value = htmlCode();
  return (
    <pre>
      <code>
        {html_beautify(value, {
          indent_size: 2,
          end_with_newline: true,
        })}
      </code>
    </pre>
  );
};

export default HtmlCode;
