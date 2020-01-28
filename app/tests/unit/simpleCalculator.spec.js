import { shallowMount } from '@vue/test-utils'
import SimpleCalculator from '@/components/SimpleCalculator.vue'

describe('ButtonCount.vue', () => {
  const wrapper = shallowMount(SimpleCalculator)

  // checks SimpleCalculator is a component.
  it('Register is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // checks value of one of the counters is zero initially
  it('count is initially zero', () => {
    expect(wrapper.vm.num1).toBe(0)
  })

  // check the select present or not
  it('is the button present', () => {
    expect(wrapper.contains('select')).toBe(true)
  })

  // checks the counter increment on clicking the button
//   it('counter incremented or not', () => {
//     expect(wrapper.vm.count).toBe(0)
//     const button = wrapper.find('button')
//     button.trigger('click')
//     expect(wrapper.vm.count).toBe(1)
//   })
})
