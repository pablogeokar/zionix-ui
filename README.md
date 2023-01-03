![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

# Zionix-ui

A collection of ready-to-use components based on pure clean css modules 🚧 is under Construction!

🇧🇷 Alô galera do Brasil, esta biblioteca ainda está em construção, caso alguém queira ajudar é só me gritar 😀

THIS COMPONENT IS STILL BEING DEVELOPED, IF YOU WANT TO CONTRIBUTE YOU CAN CONTACT US.

## Quick start

Import into `pages/_app.ts` ThemeContextProvider and ThemeFont

First you will import the ThemeContextProvider and ThemeFont to the main page of your react project as in the example below,
ThemeFont is optional, if you already have your own font loading routine, this component can be safely left out.

🇧🇷 Primeiro você irá importar o ThemeContextProvider e o ThemeFont para a página principal do seu projeto react como no exemplo abaixo,
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

Using the example above the default theme will be applied, to add your custom theme, our library also allows theme customization.

🇧🇷 Exemplo de como personalizar seu próprio tema

```js
import { ThemeContextProvider, ThemeFont, ThemeType } from "@zionix/ui";

const theme: ThemeType = {
  colors: {
    body: "#f5f5f5",
    black: "#333333",
    white: "#ffffff",
    primary: "#6A5ACD",
    secondary: "#B8860B",
    accent: "#ff5252",
    lightGray: "#bbbbbb"
  },
};

<>
  <ThemeFont />
  <ThemeContextProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeContextProvider>
</>;
```

### Global vars css

These are the global variables used by @zionix/ui and customize your own css components:

```css
root: {
  --bg: #f1f2f6;
  --black: #333333;
  --white: #ffffff;
  --primary: #227093;
  --secondary: #2c2c54;
  --accent: #ff5252;
  --lightGray: #bbbbbb;

  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;

  --gap: 1rem;
  --padding: 1rem;
  --borderRadius: 0.5rem;
}
```

### `useThemeContext` hook

You can access theme variables through useThemeContext, the sky is the limit on your creativity to build your own derived components.

🇧🇷 Você pode acessar as variáveis do tema através do useThemeContext, o céu é o limite da sua criatividade para construir seus próprios componentes derivados.

```js
import { useThemeContext } from "@zionix/ui";

const theme = useThemeContext();
console.log(theme.colors.primary);
```

### `Text` Component

```js
  <Text level={1} primary >Typography</Text>
  <Text level={2} secondary>Text h2 element text</Text>
  <Text level={3} accent>Text h3 element text</Text>
  <Text>Simple span element text</Text>
  <Text level={4} color='var(--lightGray)'>Text h4 element text</Text>
  <Text level={5}>Text h5 element text</Text>
  <Text level={6}>Text h6 element text</Text>
```

### `Input` Component
```js
  <Input label="Name" />
```

### `Box` Component

```js
  <Box.Container>
    <Text level={1}>Hello, </Text>
    <Box.Row>
      <Input label="Name" />
      <Input label="Last name" />
    </Box.Row>
      <Input label="E-mail" type='email' />
  </Box.Container >
```
Calm down guys, I'm still creating the components, I'm working alone and I can only work in the library in my spare time :D
