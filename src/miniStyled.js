import React, { useMemo } from 'react';
import { compile, serialize, stringify } from 'stylis';
import { generateAlphabeticName } from './generateAlphabeticName';
import domElements from './domElements';

let cache = [];

const stylis = (string, className) => serialize(compile(`.${className}{${string}}`), stringify);

function styled(Tag) {
  const isInputInvalid = typeof(Tag) !== 'function' && !domElements.includes(Tag);
  if (isInputInvalid) {
    throw Error('Invalid input. Expected HTML Element name, or React Component.');
  }

  return (rawStyles, ...parameters) => {
    return function WrappedComponent (props) {
      const css = useMemo(() => reconcileStyles(rawStyles, parameters, props), [props]);
      const hash = getUID(css);
      const processedStyles = runStylis(css, hash);
      const classes = [hash, props.className].join(' ');

      useMemo(() => injectCSS(hash, processedStyles), [hash, processedStyles]);

      return <Tag {...props} className={classes} />;
    }
  }
}

domElements.forEach(element => {
  styled[element] = styled(element);
});

function generateHashCode(string) {
  return string.split('').reduce(function(a, b) {
    a = ((a<<5) - a) + b.charCodeAt(0);
    return a & a 
  }, 0);              
}

function getUID(css) {
  return generateAlphabeticName(generateHashCode(css));
}

function reconcileStyles(styles, args, props) {
  const resolvedArgs = args.map(i => i(props));
  const interpolatedStyles = resolvedArgs.reduce(
    (prev, cur, i) => prev+cur+styles[i + 1], styles[0]
  );
  return interpolatedStyles;
}

function runStylis(css, hash) {
  return stylis(css, hash);
}

/**
 * Break stylis in rules and inject them via CSSOM.
 * 
 * @param {string} hash Generated HASH for class name, such as 'fmwOTC'
 * @param {string} css Resolved CSS as string
 * @returns 
 */
function injectCSS(hash, css) {
  const styleSheet = document.styleSheets[0];

  // This works. But it is not good. I should use stylis middleware to get these rules
  const splitRules = css.split('}');
  
  if (cache.includes(hash)) return;

  splitRules.forEach(rule => {
    if (rule) {
      // Reapplies the missing '}' from previous split
      const resolvedRule = `${rule}}`;
      const index = rule.includes('media') ? styleSheet.cssRules.length : 0;
      styleSheet.insertRule(resolvedRule, index);
    }
  })

  cache.push(hash);
}

export default styled;
