<template>
  <div class="z-menu flex">
    <!-- <router-link class="z-menu-item" to="/">
      <span class="titleSpan">首页</span>
    </router-link>
    <router-link class="z-menu-item" to="/project-detail-all">
      <span class="titleSpan">项目</span>
    </router-link> -->
    <ul class="z-menu flex">
      <li
        v-for="item in dataList"
        :key="item.title"
        :class="{ active: item.active }"
        @mouseover="item.active = true"
        @mouseout="item.active = false"
        class="z-menu-item"
      >
        <a class="router-name">{{ item.title }}</a>
        <template v-if="item.children && item.children.length">
          <div class="z-menu-item-list">
            <dl
              v-show="item.active"
              v-for="child in item.children"
              :key="child.title"
            >
              <dt>
                <span class="menu-list-name">{{ child.title }}</span>
              </dt>
              <template v-if="child.children && child.children.length">
                <dd v-for="lastChild in child.children" :key="lastChild.title">
                  <span class="menu-list-child-name">{{
                    lastChild.title
                  }}</span>
                </dd>
              </template>
            </dl>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
// 通过ref设置数据为响应式
import { ref } from "vue";

const dataList = ref([
  {
    title: "title1",
    router: "/",
    icon: null,
    class: null,
    children: [
      {
        title: "child1-1",
        router: "/",
        children: [
          { title: "child1-1-1", router: "/", icon: null, class: null },
          { title: "child1-1-2", router: "/", icon: null, class: null },
          { title: "child1-1-3", router: "/", icon: null, class: null },
          { title: "child1-1-4", router: "/", icon: null, class: null },
        ],
      },
      { title: "child1-2", router: "/", icon: null, class: null },
      { title: "child1-3", router: "/", icon: null, class: null },
      { title: "child1-4", router: "/", icon: null, class: null },
    ],
  },
  { title: "title2", router: "/", icon: null, class: null },
  { title: "title3", router: "/", icon: null, class: null },
  { title: "title4", router: "/", icon: null, class: null },
]);

// function setActiveStatus(data, status) {
//   data.active = status;
// }
</script>

<script>
export default {
  name: "z-menu",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}

dd {
  margin: 0;
}
.z-menu {
  height: 64px;
  margin: 0px;
  padding: 0px;

  .router-name {
    line-height: 64px;
    font-size: 16px;
    margin: 0 30px;
    height: 100%;
    display: block;
    cursor: pointer;
  }
  .active {
    .router-name {
      color: #00d2ff;
    }
    border-bottom: 3px solid #00d2ff;
  }

  .z-menu-item {
    list-style: none;
    .z-menu-item-list {
      position: fixed;
      width: 100%;
      transition: all 0.5s;
      background-color: rgba(240, 240, 240, 1);
      dl {
        width: 13%;
        margin: 0 1.5%;
        float: left;
        .menu-list-name {
          font-size: 14px;
          font-weight: bold;
          line-height: 55px;
        }

        .menu-list-child-name {
          font-size: 12px;
          color: #a4a7ae;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
