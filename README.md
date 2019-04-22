# vue-demo

## Prerequisites
```bash
# be sure that you have node installed - install from node.js website
$ node -v
v11.2.0
$ npm -v
6.7.0
# install the vue application creator
$ npm install -g @vue/cli
```

## Creating the project
```bash
$ cd design-meetup-vue-demo
$ vue create vue-demo
```
- features: babel, router, css preprocessors, linter, vuex
- use history mode
- sass/css (w/dart)
- eslint errors only
- no lint on save
- separate config files.

## Development Server
```bash
$ cd design-meetup-vue-demo
$ npm run serve
```

## Source Code

All the interesting things are under the `/src` folder.
* `src/component/DynamicChart.vue` is a component that displays an SVG line graph.
* `src/router.js` contains the definition of how the pages (the URL and the views) are handled.
* `src/store.js` contains all the global data for the app (uses Vuex).
* `src/App.vue` contains the outer-most component, including the navigation and the placeholder for where to put the pages.
* `src/ChartView.vue` is the component for the main page (route is `/`) and contains a component of its own to actually show the chart.
* `/src/InputView.vue` in the component for the input page (route is `/input`) and contains an input that changes the title.

## Steps that created this demo
* Open in browser (follow instructions from `nmp run serve`)
* Open in your IDE of choice (WebStorm, VSCode, Atom, etc...)
* Create two pages by renaming Home.vue and About.vue to ChartView.vue and InputView.vue.
* Set up rudimentary pages (add style section, remove demo stuff).
* Change router.js and App.vue to reference the changed views.
* Add `title` to vuex w/getters,mutation,and action, and input control on the input page that sets it with `@change`.
* Add an svg component with the outline of a graph, put it on the chart page.
* Add 5 numeric inputs to the chart page, with `v-model`.
* Add a few styles to center it.
* Pass those inputs to svg component.
* Draw the lines.
* Add page transitions.

## Compiles and minifies for production
```bash
npm run build
```
That will leave a static site that you can FTP to any public location.
