<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
    <level type='1'>不加糖</level>
    <level type='2'>不加糖</level>
    <level type='3'>不加糖</level>
    <level type='4'>不加糖</level>
    <level type='5'>不加糖</level>
    <level type='6'>不加糖</level>
    <List :arr="arr"
          :render="render"></List>
  </div> -->
  <div class="about">
    <List :arr="arr">
      <!-- 用来接收子组件传递过来的值 {a,b} -->
      <!-- v-slot 新版本  slot-scope 老版本的 -->
      <!-- <template v-slot="{item,b}"> -->
      <!-- <span>{{item}}{{b}}</span> -->
      <!-- </template> -->
    </List>
  </div>
</template>
<script>
// import level from "./level";
import List from "./list";
export default {
  data() {
    return {
      arr: ["苹果", "椰子", "柚子"]
    };
  },
  methods: {
    render(h, tag) {
      return <span>###{tag}</span>;
    }
  },
  components: {
    List
  },
  // template 会替换render函数  函数组件直接替换js文件
  render(h) {
    // h --> createElement
    return h("div", { a: 1 }, "hello,world");
  }
};
</script>
