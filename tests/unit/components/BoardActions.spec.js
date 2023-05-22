import { mount, shallowMount } from "@vue/test-utils";
import BoardActions from "@/components/Board/BoardActions.vue";
import Button from "@/components/generics/Button.vue";
import CreateTaskModal from "@/components/Board/CreateTaskModal.vue";
import { createStore } from "vuex";

describe("BoardActions", () => {
  it("renders the search input and create task button", () => {
    const wrapper = mount(BoardActions);

    const searchInput = wrapper.find(".board-actions_search");
    const createTaskButton = wrapper.findComponent(Button);

    expect(searchInput.exists()).toBe(true);
    expect(createTaskButton.exists()).toBe(true);
    expect(createTaskButton.text()).toContain("Create Task");
  });

  it("opens the create task modal when the create task button is clicked", () => {
    let store = createStore({});
    const wrapper = mount(BoardActions, {
      global: {
        plugins: [store],
        stubs: {
          VDialog: true,
          VCard: true,
          VIcon: true,
          VForm: true,
          VBtn: true,
          VTextarea: true,
        },
      },
    });

    wrapper.vm.dialog = true;
    const createTaskButton = wrapper.findComponent(Button);
    createTaskButton.trigger("click");
    const createTaskModal = wrapper.findComponent(CreateTaskModal);
    expect(createTaskModal.exists()).toBe(false);
  });

  it('closes the create task modal when the modal emits a "close" event', () => {
    let store = createStore({});
    const wrapper = shallowMount(BoardActions, {
      global: {
        plugins: [store],
        stubs: {
          VDialog: true,
          VCard: true,
          VIcon: true,
          VForm: true,
          VBtn: true,
          VTextarea: true,
        },
      },
    });

    const createTaskButton = wrapper.findComponent(Button);
    createTaskButton.trigger("click");
    const updatedCreateTaskModal = wrapper.findComponent(CreateTaskModal);
    expect(updatedCreateTaskModal.exists()).toBe(false);
  });
});
