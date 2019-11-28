// src/lib/util.js
import loading from '../components/loading.vue'
const lazyC = (asyncFunction) => {
    const component = () => ({
        component: asyncFunction(),
        loading
    });
    // lazyC 最后要返回一个组件, cli 不支持
    return {
        rernder: h => h(component)
    };
}
export default lazyC