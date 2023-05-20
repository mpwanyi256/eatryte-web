import { shallowMount } from "@vue/test-utils";
import BoardCardComponent from "@/components/Board/BoardCard.vue";
import Button from "@/components/generics/Button.vue";
import CreateTaskModal from "@/components/Board/CreateTaskModal.vue";

describe("BoardCardComponent", () => {
  it("renders the card content", () => {
    const card = {
      id: 1,
      title: "Test Card",
      assignee: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
      },
      total_points: 5,
      comment_count: 2,
    };
    const column = {
      name: "Column A",
    };
    const wrapper = shallowMount(BoardCardComponent, {
      props: {
        card,
        column,
        lists: [],
      },
      global: {
        components: {
          Button,
          CreateTaskModal,
        },
        stubs: {
          VAvatar: true,
          VImg: true,
        },
      },
    });

    expect(wrapper.find(".card__content_container_title").text()).toBe(
      card.title
    );
    expect(wrapper.find(".card__members .author").exists()).toBe(true);
    expect(wrapper.find(".card__misc-item").text()).toContain(
      card.total_points.toString()
    );
    expect(
      wrapper.find(".card__misc-item .mdi-comment-text-outline").exists()
    ).toBe(true);
  });
});
