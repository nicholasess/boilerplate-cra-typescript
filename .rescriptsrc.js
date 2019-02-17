module.exports = [
  [
    "use-babel-config",
    {
      presets: ["react-app"],
      plugins: [
        "react-require",
        [
          "module-resolver",
          {
            root: ".",
            alias: {
              "@components": "./src/components",
              "@pages": "./src/pages",
              "@helpers": "./src/helpers",
              "@services": "./src/services"
            }
          }
        ]
      ]
    }
  ]
];
