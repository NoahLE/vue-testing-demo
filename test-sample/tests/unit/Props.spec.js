import { mount } from "@vue/test-utils";
import Props from "@/components/Props.vue";

const msg = "submit";
const factory = (propsData) => {
  return mount(Props, {
    propsData: {
      msg,
      ...propsData,
    },
  });
};

describe("Props.vue", () => {
  it("displays a non authorized message", () => {
    // const msg = "submit";
    // const wrapper = mount(Props, {
    //   propsData: {
    //     msg: msg,
    //   },
    // });
    const wrapper = factory();
    // as an alternative you can use setProps
    // https://vue-test-utils.vuejs.org/api/wrapper-array/#setprops

    // console.log(wrapper.html())

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});

describe("Props.vue", () => {
  it("displays a admin privileges message", () => {
    const wrapper = factory({ isAdmin: true })

    //   console.log(wrapper.html())
    // Warning: Find will be depreciated and will be replaced by findComponent
    // https://vue-test-utils.vuejs.org/api/wrapper/#find
    // https://vue-test-utils.vuejs.org/api/wrapper/findComponent.html
    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});
