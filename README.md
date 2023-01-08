  <p align="center">
     <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="ReactJs" />
     <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Nextjs compatible" />
     <a href="https://zionix-ui.vercel.app"> <img src="https://img.shields.io/website?down_message=offline&label=ZIONIX%20docs&up_message=online&url=https%3A%2F%2Fzionix-ui.vercel.app%2F" alt="PRs welcome!" /></a>
  </p>

# Zionix-ui

A collection of ready-to-use components based on pure clean css modules 🚧 is under Construction!

THIS COMPONENT IS STILL BEING DEVELOPED, IF YOU WANT TO CONTRIBUTE YOU CAN CONTACT US.

🇧🇷 Alô galera do Brasil, esta biblioteca ainda está em construção, caso alguém queira ajudar é só me gritar 😀


## Quick start

Import into `pages/_app.ts` ThemeContextProvider and ThemeFont

First you will import the ThemeContextProvider and ThemeFont to the main page of your react project as in the example below,
ThemeFont is optional, if you already have your own font loading routine, this component can be safely left out.

🇧🇷 Primeiro você irá importar o ThemeContextProvider e o ThemeFont para a página principal do seu projeto react como no exemplo abaixo,
o ThemeFont é opcional, caso você já tenha sua própria rotina de carregamento de fontes, este componente poderá ficar de fora tranquilamente.
Alô galera do meu Braza lembrem-se de incluir no header do seu html a tag acima para que a responsividade funcione corretamente.

```js
import { ThemeContextProvider, ThemeFont } from "@zionix/ui";

  <ThemeFont font="Poppins" /> {/*ThemeFont is optional*/}
  <ThemeContextProvider>
    <Component {...pageProps} />
  </ThemeContextProvider>
```
An important detail, I know that many know but it is worth remembering once again, for correct responsiveness it is mandatory to insert the tag below in the header of your html.

```html
<header>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
</header>
```


Using the example above the default theme will be applied, to add your custom theme, our library also allows theme customization.

🇧🇷 Exemplo de como personalizar seu próprio tema

```js
import { ThemeContextProvider, ThemeFont, ThemeType } from "@zionix/ui";

// Minimal Example
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

// Full Example
const themeWithFullOptions: ThemeType = {
  colors: {
    accent: "#f72585",
    black: "#333333",
    body: "#f5f5f5",
    error: "#D32F2F",
    lightGray: "#c4c4c4",
    primary: "#0288D1",
    secondary: "#616161",
    success: "#689F38",
    warning: "#FBC02D",
    white: "#ffffff",
  },
  components: {
    card: {
      filter: "drop-shadow(0 5px 4px var(--lightGray))",
    },
  },
  layout: {
    borderRadius: "0.8rem",
    gap: "1.6rem",
    padding: "1.6rem",
  },
  sizes: {
    text: "clamp(1.6rem, 1.250vw, 1.6rem)",
    h1: "clamp(3.6rem, 2.6vw, 4.2rem)",
    h2: "clamp(2.882rem, 2.08vw, 3.4rem)",
    h3: "clamp(2.1rem, 1.6vw, 2.7rem)",
    h4: "clamp(1.6rem, 1.250vw, 2.1rem)",
    h5: "clamp(1.2rem, 1vw, 1.5rem)",
    h6: "clamp(.9rem, 0.7vw, 1.1rem)",
  },
};

  <ThemeFont font="Poppins" />
  <ThemeContextProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeContextProvider>

```

### `useThemeContext` hook

You can access theme variables through useThemeContext, the sky is the limit on your creativity to build your own derived components.

🇧🇷 Você pode acessar as variáveis do tema através do useThemeContext, o céu é o limite da sua criatividade para construir seus próprios componentes derivados.

```js
import { useThemeContext } from "@zionix/ui";

const theme = useThemeContext();
console.log(theme.colors.primary);
```

### `Marker` Component

```js
    <Marker />
    <Marker primary />
    <Marker secondary />
    <Marker accent />
    <Marker success />
    <Marker warning />
    <Marker error />
    <Marker color='#8e44ad' />
    <Marker size={30} />
```

### `Text` Component

```js
    <Text level={1} fontWeight={800}>Typography h1</Text>
    <Text level={1} primary>Typography h1</Text>
    <Text level={2} secondary>Typography h2</Text>
    <Text level={3} fontWeight={600}>Typography h3</Text>
    <Text level={4} accent>Typography h4</Text>
    <Text level={5}>Typography h5</Text>
    <Text level={6}>Typography h6</Text>
    <Text level={6} color='var(--black)'>Typography h6</Text>
    <Text secondary>Simple text with normal size</Text>
    <Text>Simple text with normal size</Text>
```

### `Button` Component

Normal

```js
    <Button>Login</Button>
    <Button btnPrimary><Icon icon='LockKeyOpen' />Sign In</Button>
    <Button btnSecondary><Icon icon='LockKeyOpen' />Login</Button>
    <Button btnAccent>Login</Button>
    <Button btnSuccess>Login</Button>
    <Button btnWarning>Login</Button>
    <Button btnError>Login</Button>
```

Background transparent with inverted colors

```js
    <Button btnInverted>Login</Button>
    <Button btnPrimary btnInverted><Icon icon='LockKeyOpen' />Sign In</Button>
    <Button btnSecondary btnInverted><Icon icon='LockKeyOpen' />Login</Button>
    <Button btnAccent btnInverted>Login</Button>
    <Button btnSuccess btnInverted>Login</Button>
    <Button btnWarning btnInverted>Login</Button>
    <Button btnError btnInverted>Login</Button>
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

### `Card` Component

```js
<Card.Container maxWidth="650px">
  <Text level={1} secondary>
    Hello,
  </Text>
  <Card.Row>
    <Input label="Name" />
    <Input label="Last name" />
  </Card.Row>

  <Input label="E-mail" type="email" />

  <Card.Row end>
    <Button btnPrimary btnInverted btnBorderNone>
      <Icon iconName="User" />
      Join now
    </Button>
    <Button btnPrimary>
      <Icon iconName="LockKeyOpen" />
      Sign In
    </Button>
  </Card.Row>
</Card.Container>
```

Calm down guys, I'm still creating the components, I'm working alone and I can only work in the library in my spare time :D

### Global vars css

These are the global variables used by @zionix/ui and customize your own css components:

```css
root: {
  --accent: #f72585;
  --bg: #f5f5f5;
  --black: #333333;
  --error: #d32f2f;
  --lightGray: #c4c4c4;
  --primary: #0288d1;
  --secondary: #616161;
  --success: #689f38;
  --warning: #fbc02d;
  --white: #ffffff;

  --component-card--filter: drop-shadow(0 5px 4px var(--lightGray));
  --borderRadius: 0.8rem;
  --gap: 1.6rem;
  --padding: 1.6rem;
}
```
