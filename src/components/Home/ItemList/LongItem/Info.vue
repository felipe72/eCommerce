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
      v-html="description.slice(0, 300) + '...'"
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
      type: String,
      required: true,
    }
  }
}
</script>
