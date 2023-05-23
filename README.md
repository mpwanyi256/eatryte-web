# Kanban Board
This is the Vue App setup for Kanban “monorepo” Board app and Dummy REST Api. The app uses Vue 3 with composition API and typescript. The app also uses some components from vuetify library.

![Screenshot 2023-05-23 at 15 29 16](https://github.com/mpwanyi256/board/assets/20843520/76ce1f63-3638-40fd-9252-c853a1e6d882)


## Requirements

System requirements include:

- node: version >= 16.13.0
- yarn: version 1.22.X


### Initial package install

At the root repository level, you just need to run the usual install command here:

```
yarn or npm install


### Compiles and hot-reloads for development

At the root repository level, execute:

```
yarn run serve // starts up the json server and dev serve
```

### Run your tests

At the root repository level, execute:

```
yarn run test:unit // runs unit tests

### Using Environment Variables

You will need to create a `.env` file at the root level and copy contents from `.env.example` which holds all environment variables used in the app config file. Or run the command below after you have created the `.env` file.

```
cp .env.example .env
```

## ESLint and Prettier
Run the command below to lint and fix files.

```
yarn run lint // lints everything
```

## Useful Links
- [Vue Js 3](https://vuejs.org/guide/introduction.html#what-is-vue)
- [Vuetify 3](https://vuetifyjs.com/en/introduction/why-vuetify/)
