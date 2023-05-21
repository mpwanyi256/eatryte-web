# Technical assignment front-end engineer
Create a minimal Kanban board on which you can create, view and move tickets between columns.

Your task is to:

- be able to create tickets on the board.
- be able to move tickets between the various columns in an interactive way, persisting across page refreshes.
- be able to share a direct link to the ticket.

You are free to use the tools you prefer, however, we strongly suggest you keep the hard skills of the job offer in mind.

**Minimal requirements**

The three pillars of front-end development are HTML, CSS and JavaScript. We would like to see you know how to use them for the right job.
* Use the most relevant technology for the role you've applied for (e.g. React, Vue.js)
* Pay attention to semantics: any HTML might work, but choosing the right tags show you care.
* Show us you know how to create a modern user interface using your favourite styling solution.
* Interact with an API. [JSON Server](https://github.com/typicode/json-server) can be used to add a fake REST API or you can decide to build your own.

**Timing**

You have one week to complete the assignment. You decide yourself how much time and effort you invest in it, but quality(!) and a reasonable delivery time are always highly appreciated. 
Please send us an email (jobs@madewithlove.com) when you think the assignment is ready for review. Please mention your name, Github username, and a link to what we need to review.


# Kanban Board
This is the Vue App setup for Kanban “monorepo” Board app and Dummy REST Api. The app uses Vue 3 with composition API and typescript. The app also uses some components from vuetify library.

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
