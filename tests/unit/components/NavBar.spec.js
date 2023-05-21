import router from "@/router/";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import NavBar from "@/components/nav/NavBar.vue";

describe("NavBar", () => {
  let wrapper;
  let store = createStore({
    state: {
      app: {
        name: "Kanban",
      },
    },
  });
  beforeEach(() => {
    wrapper = mount(NavBar, {
      global: {
        plugins: [router, store],
        stubs: {
          VIcon: true,
          VCard: true,
          VDialog: true,
          VImg: true,
          VAvatar: true,
        },
      },
    });
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("computes the active route correctly", () => {
    const computedActiveRoute = wrapper.vm.activeRoute;
    expect(computedActiveRoute).toBe("home");
  });

  it("filters routes correctly excluding the active route", () => {
    const computedNavRoutes = wrapper.vm.navRoutes;
    expect(computedNavRoutes).toEqual([
      { icon: "mdi mdi-account", name: "assigned" },
    ]);
  });

  it("checks if a route is active correctly", () => {
    const isActive = wrapper.vm.isActiveRoute("home");
    const isNotActive = wrapper.vm.isActiveRoute("assigned");

    expect(isActive).toBe(true);
    expect(isNotActive).toBe(false);
  });

  it("logs the selected route when clicked", () => {
    const mockConsoleLog = jest.spyOn(console, "log");
    wrapper.vm.gotTopage({ icon: "mdi mdi-home", name: "home" });

    expect(mockConsoleLog).toHaveBeenCalledWith({
      icon: "mdi mdi-home",
      name: "home",
    });
  });

  it('logs "Logout" when performLogout is called', () => {
    const mockConsoleLog = jest.spyOn(console, "log");
    wrapper.vm.performLogout();

    expect(mockConsoleLog).toHaveBeenCalledWith("Logout");
  });
});
