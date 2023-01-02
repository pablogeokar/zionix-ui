# zionix-ui

A collection of ready-to-use components based on styled-components (Under Construction)

THIS COMPONENT IS STILL BEING DEVELOPED, IF YOU WANT TO CONTRIBUTE YOU CAN CONTACT US.

## Quick start

Import into `pages/_app.ts` ThemeContextProvider and ThemeFont

First you will import the ThemeContextProvider and ThemeFont to the main page of your react project as in the example below,
ThemeFont is optional, if you already have your own font loading routine, this component can be safely left out.

Primeiro você irá importar o ThemeContextProvider e o ThemeFont para a página principal do seu projeto react como no exemplo abaixo,
o ThemeFont é opcional, caso você já tenha sua própria rotina de carregamento de fontes, este componente poderá ficar de fora tranquilamente.

```js
import { ThemeContextProvider, ThemeFont } from "@zionix/ui";

<>
  <ThemeFont />
  <ThemeContextProvider>
    <Component {...pageProps} />
  </ThemeContextProvider>
</>;
```

### Global vars css

These are the global variables used by @zionix/ui and customize your own components:

```css
root: {
  --bg: #f1f2f6;
  --black: #333333;
  --white: #ffffff;
  --primary: #227093;
  --secondary: #2c2c54;
  --accent: #ff5252;
  --lightGray: #bbbbbb;

  --text-xsmall: 1rem;
  --text-small: 1.2rem;
  --text-normal: 1.6rem;
  --text-large: 2.1rem;
  --text-xlarge: 3.2rem;
  --text-xxlarge: 4rem;

  --gap: 1.6rem;
  --padding: 1.6rem;
  --borderRadius: 0.8rem;
}
```

### Component `Text`

```js
  <Text level={1} primary>Typografy</Text>
  <Text level={2} secondary>Text h2 element text</Text>
  <Text level={3} accent>Text h3 element text</Text>
  <Text>Simple span element text</Text>
  <Text level={4} color='var(--lightGray)'>Text h4 element text</Text>
  <Text level={5}>Text h5 element text</Text>
  <Text level={6}>Text h6 element text</Text>
```

### Component `Box`

```js
<Box>
  <Text level={1}>Hello, </Text>
  <Text>This is a simple box</Text>
</Box>
```
