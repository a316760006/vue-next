<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="move">
      <!-- keepalive 和动画一起使用 动画要放到外层 -->
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: { name: 1 },
      move: "slide-left"
    };
  },
  watch: {
    $route: {
      // 固定的函数名,监听路由
      handler(to, form) {
        // 通过路由判断动画向左还是向右
        if (to && form) {
          if (to.meta.idx > form.meta.idx) {
            // 后面比前面打 做向左的动画
            this.move = "slide-left";
          } else {
            // 否则是向右的动画
            this.move = "slide-right";
          }
        }
      },
      // 立即执行 handler
      immediate: true
      // 表示深层监控
      // deep: true,
      // 懒加载  computed  缓存
      // lazy: true
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s linear;
}

.slide-left-enter-active {
  position: absolute;
  top: 86px;
  left: 0;
  width: 100%;
}

.slide-left-enter {
  transform: translate(100%);
}

.slide-left-leave-to {
  transform: translate(-100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s linear;
}

.slide-right-enter-active {
  position: absolute;
  top: 86px;
  right: 0;
  width: 100%;
}

.slide-right-enter {
  transform: translate(-100%);
}

.slide-right-leave-to {
  transform: translate(100%);
}
</style>