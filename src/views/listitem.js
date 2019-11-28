// listitem.js
export default {
  props: ["render", "item"],
  render(h) {
    // about自定义render需要传的参数
    return this.render(h, this.item);
  }
};
