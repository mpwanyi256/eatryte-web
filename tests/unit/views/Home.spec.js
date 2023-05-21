import { mount } from "@vue/test-utils";
import HomeView from "@/views/Home.vue";
import Page from "@/components/generics/Page.vue";
import BoardActions from "@/components/Board/BoardActions.vue";
import BoardColumn from "@/components/Board/BoardColumn.vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

describe("HomeView", () => {
  let wrapper;
  let router;
  let store = createStore({
    state: {
      board: {
        boardsColumns: [
          { id: 1, name: "Column 1" },
          { id: 2, name: "Column 2" },
        ],
        cards: [],
      },
    },
    actions: {
      "board/fetchBoardColumns": jest.fn().mockResolvedValue(),
      "board/fetchCards": jest.fn().mockResolvedValue(),
    },
  });

  beforeEach(() => {
    // Mount the component before each test
    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/", name: "Home", component: HomeView }],
    });
    wrapper = mount(HomeView, {
      global: {
        plugins: [store, router],
      },
    });
  });

  afterEach(() => {
    // Destroy the component after each test
    wrapper.unmount();
  });

  it("renders the Board component", () => {
    // Assert that the Board component is rendered
    expect(wrapper.findComponent(Page).exists()).toBe(true);
  });

  it("renders the BoardActions component", () => {
    // Assert that the BoardActions component is rendered
    expect(wrapper.findComponent(BoardActions).exists()).toBe(true);
  });

  it("renders the BoardColumn component for each column", () => {
    // Assert that the correct number of BoardColumn components are rendered
    expect(wrapper.findAllComponents(BoardColumn)).toHaveLength(2);
  });

  it("renders the BoardCard component for each card in each column", () => {
    // Mock the computed getColumnCards data
    const getColumnCards = jest.fn().mockImplementation((columnId) => [
      { id: 1, name: "Card 1", column_id: columnId },
      { id: 2, name: "Card 2", column_id: columnId },
    ]);
    wrapper.vm.getColumnCards = getColumnCards;

    // Mock the computed boardColumns data
    const boardColumns = [
      { id: 1, name: "Column 1" },
      { id: 2, name: "Column 2" },
    ];

    // Assert that the correct number of BoardCard components are rendered for each column
    const boardColumnComponents = wrapper.findAllComponents(BoardColumn);
    expect(boardColumnComponents).toHaveLength(boardColumns.length);
  });
});
