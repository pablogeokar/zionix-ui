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

## Component `Text`

```js
  <Text level={1} fontWeight={700}>Text Style h1</Text>
  <Text level={2} lineHeight={1.6}>Text Style h2</Text>
  <Text level={3} size="xlarge">Text Style h3</Text>
  <Text>Text span</Text>
  <Text level={4}>Text Style h4</Text>
  <Text level={5}>Text Style h5</Text>
  <Text level={6}>Text Style h1</Text>
```
