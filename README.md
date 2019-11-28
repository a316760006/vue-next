# render 函数和 JSX 应用(五)

> 地址：https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx

## 一.模板缺陷

模板的最大特点是扩展难度大，不易扩展。可能会造成逻辑冗余

```html
<Level :type="1">哈哈</Level>
<Level :type="2">哈哈</Level>
<Level :type="3">哈哈</Level>
```

Level 组件需要对不同的 type 产生不同的标签

```html
<template>
  <h1 v-if="type==1">
    <slot></slot>
  </h1>
  <h2 v-else-if="type==2">
    <slot></slot>
  </h2>
  <h3 v-else-if="type==3">
    <slot></slot>
  </h3>
</template>
<script>
  export default {
    props: {
      type: {
        type: Number
      }
    }
  };
</script>
```

## 二.函数式组件

函数式组件没有模板,只允许提供 render 函数

```javascript
export default {
  render(h) {
    return h('h' + this.type, {}, this.$slots.default);
  },
  props: {
    type: {
      type: Number
    }
  }
};
```

> 复杂的逻辑变得非常简单

## 三.JSX 应用

使用 jsx 会让代码看起来更加简洁易于读取

```javascript
export default {
  render(h) {
    const tag = 'h' + this.type;
    return <tag>{this.$slots.default}</tag>;
  },
  props: {
    type: {
      type: Number
    }
  }
};
```

## 四.render 方法订制组件

编写 List 组件可以根据用户传入的数据自动循环列表

```html
<List :data="data"></List>
<script>
  import List from './components/List';
  export default {
    data() {
      return { data: ['苹果', '香蕉', '橘子'] };
    },
    components: {
      List
    }
  };
</script>

<!-- List组件渲染列表 -->
<template>
  <div class="list">
    <div v-for="(item,index) in data" :key="index">
      <li>{{item}}</li>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array,
      default: () => []
    }
  };
</script>
```

通过 render 方法来订制组件,在父组件中传入 render 方法

```html
<List :data="data" :render="render"></List> render(h, name) { return
<span>{name}</span>; }
```

我们需要 createElement 方法，就会想到可以编写个函数组件，将 createElement 方法传递出来

```html
<template>
  <div class="list">
    <div v-for="(item,index) in data" :key="index">
      <li v-if="!render">{{item}}</li>
      <!-- 将render方法传到函数组件中，将渲染项传入到组件中，在内部回调这个render方法 -->
      <ListItem v-else :item="item" :render="render"></ListItem>
    </div>
  </div>
</template>
<script>
  import ListItem from './ListItem';
  export default {
    components: {
      ListItem
    },
    props: {
      render: {
        type: Function
      },
      data: Array,
      default: () => []
    }
  };
</script>
```

ListItem.vue 调用  最外层的 render 方法，将 createElement 和当前项传递出来

```html
<script>
  export default {
    props: {
      render: {
        type: Function
      },
      item: {}
    },
    render(h) {
      return this.render(h, this.item);
    }
  };
</script>
```

## 五.scope-slot

使用 v-slot 将内部值传即可

```html
<List :arr="arr">
  <template v-slot="{item}">
    {{item}}
  </template>
</List>

<div v-for="(item,key) in arr" :key="key">
  <slot :item="item"></slot>
</div>
```
