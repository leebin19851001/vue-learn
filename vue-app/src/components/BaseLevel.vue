<script>
export default {
  functional: true,
  props: {
    level: Number,
    required: true,
  },
  render(h, context) {
    const { props, slots } = context
    const tag = 'h' + props.level;
    return (
      <tag>
        { slots().default }
      </tag>
    )
  }
}
</script>