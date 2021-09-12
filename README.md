# mini-styled 💅

## Abstract
This is meant to be a subset of [styled-components](https://github.com/styled-components/styled-components) features. It was made as a study project in order to give better understanding of the original
`styled-components` source and some of the concepts usages.

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
    <Button customBg="#92929C">Click me</Button>
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

Feel free to contribute to this project, to increase its features, improve its code and etc!

## Acknowledgements
- Special thanks to [Josh](https://twitter.com/JoshWComeau).

I started this project by navigating and studying styled-components source, but his post on [Demystifying styled-components](https://www.joshwcomeau.com/react/demystifying-styled-components/) really gave me some insights that I applied to the final structure of the code for the sake of simplicity :)

## License

```
The MIT License (MIT)

Copyright 2021 Lucas Coelho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
