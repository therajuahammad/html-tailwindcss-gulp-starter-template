module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 3001,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      css: "./src/css",
      cssLib: "./src/css/lib",
      js: "./src/js",
      img: "./src/img",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      cssLib: "./dist/css/lib",
      js: "./dist/js",
      img: "./dist/img",
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
    },
  },
};
