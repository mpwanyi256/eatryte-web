import { shallowMount } from "@vue/test-utils";
import TextFieldComponent from "@/components/generics/TextField.vue";

describe("TextFieldComponent", () => {
  it('renders the input element with default type "text"', () => {
    const wrapper = shallowMount(TextFieldComponent);
    expect(wrapper.find("input").attributes("type")).toBe("text");
  });

  it("renders the input element with the specified type", () => {
    const type = "password";
    const wrapper = shallowMount(TextFieldComponent, {
      props: {
        type,
      },
    });

    expect(wrapper.find("input").attributes("type")).toBe(type);
  });

  it("binds the input value with v-model", async () => {
    const wrapper = shallowMount(TextFieldComponent);
    const input = wrapper.find("input");
    await input.setValue("Test Value");

    expect(wrapper.vm.input).toBe("Test Value");
  });

  it("renders the input element with disabled attribute when disabled prop is true", () => {
    const wrapper = shallowMount(TextFieldComponent, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.props("disabled")).toBeTruthy();
  });

  it("renders the input element with placeholder", () => {
    const placeholder = "Enter your name";
    const wrapper = shallowMount(TextFieldComponent, {
      props: {
        placeholder,
      },
    });

    expect(wrapper.find("input").attributes("placeholder")).toBe(placeholder);
  });
});
