// levelfn.js
export default {
  props: {
    type: {
      type: String
    }
  },
  methods: {
    handleClick() {
      alert(1);
    }
  },
  render() {
    // createElement  vnode 虚拟dom  用对象描述dom结构
    // console.log(h);
    // this是当前组件实例
    //this.$slot.default 取默认插槽
    // return h(`h${this.type}`, {}, "我是函数组件");
    // return h(`h${this.type}`, {}, this.$slot.default, [
    //   h("span", { on: { click() {handleClick} } }, "span")
    // ]);
    // jsx语法
    const tag = `h${this.type}`;
    return <tag>{this.$slots.default}</tag>;
    // return <div on-click={this.handleClick}>hello</div>;
  }
};
