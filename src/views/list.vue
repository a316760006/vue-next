<template>
  <div>
    <div v-for="(item,key) in arr"
         :key="">
    </div>
  </div>
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
