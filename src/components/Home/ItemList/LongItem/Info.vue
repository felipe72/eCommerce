<template>
  <div class="flex-grow-1">
    <p
      class="mb-0 mt-4 subtitle-2"
      v-html="title"
    />
    <p class="mb-0 caption">
      By {{ brand }}
    </p>
    <p
      class="caption mt-2 block-with-text"
      v-html="description"
    />
  </div>
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
      required: true,
    }
  }
}
</script>

<style lang="sass" scoped>
.block-with-text 
  overflow: hidden
  position: relative 
  line-height: 1.2em
  max-height: 9.4em 
  text-align: justify  
  margin-right: -1em
  padding-right: 1em

.block-with-text:before 
  content: '...'
  position: absolute
  right: 0
  bottom: 0

.block-with-text:after 
  content: ''
  position: absolute
  right: 0
  width: 1em
  height: 1em
  margin-top: 0.2em
  background: white
</style>