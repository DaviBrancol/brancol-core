# @brancol/core

Core Provider for the StyledComponents Theme and functionalities of the @brancol design guide.
You may need this core package in order to access the functions of the @brancol/components developed in separated packages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Tests](#tests)
- [ChangeLog](#changelog)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install @brancol/core
    $ yarn add @brancol/core

## Usage

To start using the other components and set your StyleGuide Theme, import the BrancolProvider and set the new theme properties or override the current ones.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import BrancolProvider from "@brancol/core";

const theme = {
  colors: {
    myColor: "#abc",
  },
};

ReactDOM.render(
  <BrancolProvider theme={theme}>
    <App />
  </BrancolProvider>,
  document.getElementById("root")
);
```

## Examples

Want to know more about the packages available for using along with this core?

Checkout the full under development project at [React Alleria]("https://github.com/DaviBrancol/React-Alleria").

## Props

Here is a full detailed list of the props you can send to use the BrancolProvider.

| Name  | Type                    | Default | Description                                                                 | Values       |
| ----- | ----------------------- | ------- | --------------------------------------------------------------------------- | ------------ |
| theme | StyledComponents<Theme> | null    | Styled theme object for overriding the theme properties for the components. | Theme Object |

## Tests

This core component is already tested using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/). The tests covers if the default properties are applied, and if the new ones, both added and override, are also applied. You may create your own tests using this modules as well.

## More about me

You can find more about myself and the projects I develop at the following channels.

[Github Profile](https://github.com/DaviBrancol)<br>
[Personal Website](https://davibrancol.com.br)<br>
[Instagram Profile](https://instagram.com/davibrancol17)<br>

## ChangeLog

#### 0.1.0

- Added core theme properties about fontFamily and colors to the theme.
- Added tests on the base of the ThemeProvider and it's override.
- Added dependencies and peerDependencies to the project.
