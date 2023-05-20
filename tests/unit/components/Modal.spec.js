import { mount } from "@vue/test-utils";
import ModalComponent from "@/components/generics/Modal.vue";

describe("ModalComponent", () => {
  let wrapper;
  let title;
  beforeEach(() => {
    title = "Modal Title";
    wrapper = mount(ModalComponent, {
      props: {
        title,
        fullscreen: true,
      },
      global: {
        stubs: {
          VDialog: true,
          VCard: true,
          VIcon: true,
          VAvatar: true,
          VImg: true,
        },
      },
    });
  });

  it("renders the modal with title", () => {
    expect(wrapper.vm.title).toBe(title);
  });

  it("renders the modal with default size", () => {
    expect(wrapper.props("size")).toBe(500);
  });

  it("renders the modal with custom size", () => {
    const size = 800;
    wrapper = mount(ModalComponent, {
      props: {
        size,
      },
      global: {
        stubs: {
          VDialog: true,
          VCard: true,
          VIcon: true,
          VAvatar: true,
          VImg: true,
        },
      },
    });

    expect(wrapper.props("size")).toBe(size);
  });

  it("renders the modal in fullscreen mode", () => {
    expect(wrapper.props("fullscreen")).toBe(true);
  });
});
