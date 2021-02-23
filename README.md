<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.anf-dz.com">
    <img alt="Gatsby" src="./src/assets/images/logo.svg" />
  </a>
</p>
<h1 align="center">
  Association National des Financiers
</h1>

This is the official website of **ANF**  association made using [gatsbyjs](https://www.gatsbyjs.com) and [wordpress](https://www.wordpress.org) as backend(source of data).


## 🚀 Quick start

1.  **Setup wordpress:**

    First of all, install [wordpress](https://www.wordpress.org) then navigate to plugins section on youd wordpress dashboard to install those plugins:

  - [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
  - [WPGatsby](https://wordpress.org/plugins/wp-gatsby/)
  - [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
  - [WPGraphQL for Advanced Custom Fields](https://www.wpgraphql.com/acf/)

  Secondly, setup `ACF` by adding new fields and create new field to `wordpress posts` to save(upload) `.pdf` file with those configuration:
  
  ```
  Field name is: "document"
  Return value: "File URL"
  Show in GraphQL: "Yes"
  GraphQL Field Name: "acf"
  ```

  ***Note***: 
  Don't forget to enable those plugins


2.  **Gatsby:**

    To start the dev mode clone this repos and run one of those command to install dependencies: 

    ```sh
    yarn
    # or
    npm install
    ```

    After 1 step run:

    ```sh
    # for development mode
    yarn develop
    # to build your project
    yarn build
    ```

    and like that you're happy to go.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/siemah/anf-dz.com)

<!-- AUTO-GENERATED-CONTENT:END -->
