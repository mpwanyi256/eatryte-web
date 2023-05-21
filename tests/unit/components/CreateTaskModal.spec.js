import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import CreateTaskModal from "@/components/Board/CreateTaskModal.vue";

describe("CreateTaskModal", () => {
  let wrapper;
  beforeEach(() => {
    let store = createStore({
      actions: {
        "board/createCard": jest.fn().mockResolvedValue(),
      },
    });
    wrapper = mount(CreateTaskModal, {
      global: {
        plugins: [store],
        stubs: {
          VTextarea: true,
          VBtn: true,
          VForm: true,
          VIcon: true,
          VDialog: true,
          VCard: true,
        },
      },
    });
  });
  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('emits a "close" event when the modal is closed', async () => {
    await wrapper.vm.createTicket(); // Simulate submitting the form
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
