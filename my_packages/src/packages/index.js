// 菜单栏
import menu from "./menu";

// 方案1：按需引入
export { menu };
// 方案2：全部引入
const component = [menu];

// 组件前缀 -个人特有
// const prefix = "z-";

const UI = {
  install(App) {
    component.forEach((item) => {
      // App.component(prefix + item.name, item);
      App.component(item.name, item);
    });
  },
};

export default UI;
