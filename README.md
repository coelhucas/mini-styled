# mini-styled 💅

## Abstract
This is meant to be a subset of [styled-components](https://github.com/styled-components/styled-components) features. It was made as a study project in order to give better understanding of the original
`styled-components` source and some of the concepts usages.

⚠️ This doesn't work with SSR, since this library uses a [browser API](https://developer.mozilla.org/en-US/docs/Web/API/Document). If you need something for a real production application, use [styled-components](https://github.com/styled-components/styled-components) instead.

## Installation

```bash
npm i mini-styled
```
or if you're using yarn
```bash
yarn add mini-styled
```

## Example

```jsx
import React from 'react';

import styled from 'mini-styled';

const Wrapper = styled.section`
  padding: 24px;
  background: papayawhip;
`;

const Button = styled.button`
  background-color: ${props => props.customBg || 'white'};
  color: palevioletred;
  border: 24px;

  &:hover {
    background-color: pink;
  }
`;

const MyComponent = () => (
  <Wrapper>
    <Button customBg="yellow">Click me</Button>
  </Wrapper>
);
```
And then you'll see this in your project:

![image](https://user-images.githubusercontent.com/28108272/132994589-7b1c3c9d-9396-479e-8efd-79b4fa13cead.png)

## API

The existing API at this moment expose only the `styled` factory, which works for HTML Elements and React Components, just as styled.
It supports media queries, pseudo classes and general features oferred by [Stylis.js](https://stylis.js.org/). Check [TODO](#todo) for planned functionalities.

## TODO

- [ ] Add tests
- [ ] Make proper use of [stylis middleware](https://github.com/thysultan/stylis.js#middleware) to inject rules via CSSOM
- [ ] Add vendor prefixes (also from stylis)
- [ ] Make it work natively with SSR

Feel free to contribute to this project, to increase its features, improve its code and etc!
And although this isn't a project I'm willing to take too seriously, feel free to report issues, I'll take a look as soon as possible.

## Acknowledgements
- Special thanks to [Josh](https://twitter.com/JoshWComeau).

I started this project by navigating and studying styled-components source, but his post on [Demystifying styled-components](https://www.joshwcomeau.com/react/demystifying-styled-components/) really gave me some insights that I applied to the final structure of the code for the sake of simplicity :)
