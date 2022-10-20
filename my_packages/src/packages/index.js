import HelloWorld from "./HelloWorld/index.vue";

// 按需引入
export { HelloWorld };

const component = [HelloWorld];

const MukUI = {
  install(App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

export default MukUI;
