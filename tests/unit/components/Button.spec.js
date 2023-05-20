import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/generics/Button.vue";

describe("ButtonComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ButtonComponent, {
      slots: {
        default: "Click me",
      },
      props: {
        icon: "home",
        iconRight: "cart",
        disabled: true,
      },
    });
  });

  it("renders the button with slot content", () => {
    expect(wrapper.text()).toContain("Click me");
  });

  it("renders the button with left icon", () => {
    expect(wrapper.find("i.icon").classes()).toContain("mdi-home");
  });

  it("renders the button with right icon", () => {
    expect(wrapper.find("i.right.icon").classes()).toContain("mdi-cart");
  });

  it("disables the button when disabled prop is true", () => {
    expect(wrapper.props("disabled")).toBe(true);
  });
});
