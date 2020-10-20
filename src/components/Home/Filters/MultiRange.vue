<template>
  <div>
    <p>Multi Range</p>
    <v-radio-group v-model="rangeModel">
      <v-radio
        v-for="({ label }, index) in options"
        :key="label"
        :value="index"
        :label="label"
      />
    </v-radio-group>
    <div v-show="options[value].label === 'Custom'">
      <div>
        <p>Custom range</p>
        <p>${{ customRange[0] }} - ${{ customRange[1] }}</p>
      </div>
      <v-range-slider
        v-model="customRange"
        :max="1000"
        :min="0"
        :step="10"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import debounce from 'lodash/debounce';

export default {
  name: 'MultiRange',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      customRange: [0, 1000],
      options: [
        { label: '$0 - $10', min: 0, max: 10 },
        { label: '$10 - $100', min: 10, max: 100 },
        { label: '$100 - $500', min: 100, max: 500 },
        { label: '$500 and higher', min: 500, max: 99999 },
        { label: 'All', min: 0, max: 99999 },
        { label: 'Custom' },
      ],
    };
  },
  computed: {
    delayedRange() {
      return debounce(this.setRange, 1000);
    },
    rangeModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
        const { min, max } = this.options[value];
        this.customRange = [min, max];
      },
    },
  },
  watch: {
    customRange(value) {
      this.delayedRange(value);
    },
  },
  methods: {
    ...mapActions(['setRange']),
  },
};
</script>
