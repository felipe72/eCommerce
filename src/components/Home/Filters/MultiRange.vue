<template>
  <div>
    <p>Multi Range</p>
    <v-radio-group v-model="radioGroup">
      <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n" />
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'MultiRange',
  data() {
    return { options: [] }
  },
};
</script>
