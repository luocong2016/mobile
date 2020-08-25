export function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {}
  const slots = context.slots()
  Object.keys(slots).forEach(key => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key]
    }
  })
  return scopedSlots
}
