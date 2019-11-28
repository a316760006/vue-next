// levelfn.js
export default {
  data() {
    return {
      msg: "123"
    };
  },
  methods: {
    handleChange(e) {
      this.msg = e.target.value;
    }
  },
  render() {
    // v-html
    return (
      <div>
        {this.msg}
        {/* <input value={this.msg} on-input={this.handleChange} /> */}
        <input v-model={this.msg} />
      </div>
    );
  }
};
