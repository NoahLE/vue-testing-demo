import { mount } from "@vue/test-utils";
import Rendering from "@/components/Rendering.vue";

describe("Rendering.vue", () => {
  it("renders a greeting", () => {
    const wrapper = mount(Rendering);
    expect(wrapper.text()).toMatch("Vue and TDD");
    // console.log(wrapper.html());
  });
});
