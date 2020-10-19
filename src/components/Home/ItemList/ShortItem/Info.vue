<template>
  <v-card-title class="d-flex flex-column align-stretch">
    <div class="d-flex flex-grow-1">
      <p
        class="subtitle-2 mb-0 d-inline-block text-truncate"
        style="max-width: 150px;"
        v-html="title"
      />
      <div class="d-flex ml-auto">
        <v-chip
          label
          small
          class="ma-0 px-2"
        >
          <p class="ma-0 mr-2">
            3.4
          </p>
          <v-icon small>
            mdi-star-outline
          </v-icon>
        </v-chip>
      </div>
    </div>
    <p class="caption">
      By {{ brand }}
    </p>
    <p
      class="caption mt-2 block-with-text "
      v-html="description.slice(0, 300) + '...'"
    />
  </v-card-title>
</template>

<script>
export default {
  name: 'Info',
  props: {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
html 
  --lh: 1.4rem
  line-height: var(--lh)


.block-with-text 
  --max-lines: 1
  position: relative
  max-height: calc(var(--lh) * var(--max-lines))
  overflow: hidden
  padding-right: 1rem // space for ellipsis 

.block-with-text::before 
  position: absolute
  content: "..."
  inset-block-end: 0 // "bottom" 
  inset-inline-end: 0 // "right" 

.block-with-text::after 
  content: ""
  position: absolute
  inset-inline-end: 0 // "right" 
  width: 1rem
  height: 1rem
  background: white


</style>