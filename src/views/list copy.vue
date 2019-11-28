<template>
  <ul>
    <template>
      <div v-for='a in arr'
           :key="a">
        <!-- template没有h -->
        <listItem :render='render'
                  v-if="render"
                  :item='a'></listItem>
        <!-- <li v-else>{{a}}</li> -->
      </div>
    </template>
  </ul>
</template>
<script>
import listItem from "./listitem";
export default {
  props: ["arr", "render"],
  components: {
    listItem
  }
};
</script>
