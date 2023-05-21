import { shallowMount } from "@vue/test-utils";
import BoardColumnComponent from "@/components/Board/BoardColumn.vue";

describe("BoardColumnComponent", () => {
  it("renders the column name correctly", () => {
    const column = {
      name: "Column 1",
    };

    const wrapper = shallowMount(BoardColumnComponent, {
      props: {
        column,
      },
    });

    const columnName = wrapper.find(".column-label");
    expect(columnName.text()).toBe("Column 1");
  });

  it("renders the slot content when cards are present", () => {
    const wrapper = shallowMount(BoardColumnComponent, {
      slots: {
        default: '<div class="slot-content">Card 1</div>',
      },
      props: {
        hasCards: true,
        column: {
          name: "Column 1",
        },
      },
    });

    const slotContent = wrapper.find(".slot-content");
    expect(slotContent.exists()).toBeTruthy();
    expect(slotContent.text()).toBe("Card 1");
  });

  it("renders the empty state message when no cards are present", () => {
    const wrapper = shallowMount(BoardColumnComponent, {
      props: {
        hasCards: false,
        column: {
          name: "Column 1",
        },
      },
    });

    const emptyState = wrapper.find(".column-empty-state");
    expect(emptyState.exists()).toBeTruthy();
    expect(emptyState.text()).toContain("No results found in this column.");
  });

  it('emits a "scroll-to-card" event when the component is mounted', () => {
    const wrapper = shallowMount(BoardColumnComponent, {
      props: {
        column: {
          name: "Column 1",
        },
      },
    });
    wrapper.vm.$emit("scroll-to-card");
    expect(wrapper.emitted("scroll-to-card")).toBeTruthy();
  });
});
