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
  <ThemeFont font="Poppins" />
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
    lightGray: "#bbbbbb",
  },
};

<>
  <ThemeFont font="Poppins" />
  <ThemeContextProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeContextProvider>
</>;
```

### Global vars css

These are the global variables used by @zionix/ui and customize your own css components:

```css
root: {
  --accent: #f72585;
  --bg: #f5f5f5;
  --black: #333333;
  --error: #d32f2f;
  --lightGray: #bbbbbb;
  --primary: #0288d1;
  --secondary: #616161;
  --success: #689f38;
  --warning: #fbc02d;
  --white: #ffffff;

  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;

  --borderRadius: 0.5rem;
  --gap: 1rem;
  --padding: 1rem;
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

### `Button` Component

Normal

```js
    <Button>Login</Button>
    <Button isPrimary>Login</Button>
    <Button isSecondary>Login</Button>
    <Button isAccent>Login</Button>
    <Button isSuccess>Login</Button>
    <Button isWarning>Login</Button>
    <Button isError>Login</Button>
```

Background transparent with inverted colors

```js
    <Button isInverted>Login</Button>
    <Button isPrimary isInverted>Login</Button>
    <Button isSecondary isInverted>Login</Button>
    <Button isAccent isInverted>Login</Button>
    <Button isSuccess isInverted>Login</Button>
    <Button isWarning isInverted>Login</Button>
    <Button isError isInverted>Login</Button>
```

### `Icon` Component

Built-in [phosphor-icons](https://https://phosphoricons.com) icon pack, to see the full list of icons, go to the [phosphor-icons](https://https://phosphoricons.com) website and search for the icon you need.

```js
    <Icon icon="Alarm" size={48} />
    <Icon icon="Alien" size={48} />
    <Icon icon="Dog" size={48} />
    <Icon icon="House" size={48} />
    <Icon icon="Pencil" size={48} />
    <Icon icon="User" size={48} />
    <Icon icon="Users" size={48} />

    <Icon icon="Alarm" weight="duotone" />
    <Icon icon="Alien" weight="duotone" />
    <Icon icon="Dog" weight="duotone" />
    <Icon icon="House" weight="duotone" />
    <Icon icon="Pencil" weight="duotone" />
    <Icon icon="User" weight="duotone" />
    <Icon icon="Users" weight="duotone" />

    <Icon icon="Alarm" weight="bold" />
    <Icon icon="Alien" weight="bold" />
    <Icon icon="Dog" weight="bold" />
    <Icon icon="House" weight="bold" />
    <Icon icon="Pencil" weight="bold" />
    <Icon icon="User" weight="bold" />
    <Icon icon="Users" weight="bold" />
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
  <Input label="E-mail" type="email" />
</Box.Container>
```

Calm down guys, I'm still creating the components, I'm working alone and I can only work in the library in my spare time :D
