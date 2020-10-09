
import { mount } from "@vue/test-utils"
import Computed from "@/components/Computed.vue"

describe("Computed", () => {
  it("renders even numbers", () => {
    const wrapper = mount(Computed, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe("2, 4, 6, 8")
  })

  it("renders odd numbers", () => {
    const localThis = { even: false }

    expect(Computed.computed.numbers.call(localThis))
      .toBe("1, 3, 5, 7, 9")
  })
})