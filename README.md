# mini-styled 💅

### Abstract
This is meant to be a subset of [styled-components](https://github.com/styled-components/styled-components) features. It was made as a study project in order to give better understanding of the original
`styled-components` source and some of the concepts usages.

### Example

```jsx
import styled from 'mini-styled';

const Button = styled.button`
  background-color: ${props => props.bg || 'white'};
  color: white;
  border: 24px;

  &:hover {
    background-color: blue;
  }
`;

const MyComponent = () => (
  <>
    <h1>Heading</h1>
    <Button bg="#92929C">Click me</Button>
  </>
);
```

### API

The existing API at this moment expose only the `styled` factory, which works for HTML Elements and React Components, just as styled.
It supports media queries, pseudo classes and general features oferred by [Stylis.js](https://stylis.js.org/). Check TODO for planned functionalities.


### Installation

```bash
npm i mini-styled
// or
yarn add mini-styled
```

### TODO

- [ ] Add tests
- [ ] Make proper use of [stylis middleware](https://github.com/thysultan/stylis.js#middleware) to inject rules via CSSOM
- [ ] Add vendor prefixes (also from stylis)
