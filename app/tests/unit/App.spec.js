import { mount, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import SimpleCalculator from '@/components/SimpleCalculator.vue'
import { isIterable } from 'core-js'

describe('App.vue', () => {
  // const wrapper = mount(App)

  // it('it contains SimpleCalculator component', () => {
  //   expect(wrapper.html()).toContain('<h3>Welcome to Your Vue.js App</h3>')
  // })

  it('Renders props.msg when passed', () => {
    const msg = "Test message"
    const wrapper = shallowMount(SimpleCalculator, {
      propsData: { msg }
    })
    expect(wrapper.vm.msg).toMatch(msg)
  })
})
