import { mount } from "@vue/test-utils";
import PageComponent from "@/components/generics/Page.vue";

describe("PageComponent", () => {
  let wrapper;
  const title = "Page Title";
  const contentSlotContent = "<p>Page content</p>";
  const optionsSlotContent =
    "<button>Option 1</button><button>Option 2</button>";

  beforeEach(() => {
    wrapper = mount(PageComponent, {
      slots: {
        options: optionsSlotContent,
        content: contentSlotContent,
      },
      props: {
        title,
        iconRight: "cart",
        disabled: true,
      },
    });
  });
  it("renders the page title", () => {
    expect(wrapper.find(".page_header_title").text()).toBe(title);
  });

  it("renders the page options slot if provided", () => {
    expect(wrapper.find(".page_header_options").html()).toContain(
      optionsSlotContent
    );
  });

  it("renders the page content slot", () => {
    expect(wrapper.find(".page-content").html()).toContain(contentSlotContent);
  });
});
