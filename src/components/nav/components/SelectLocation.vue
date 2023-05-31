<template>
  <div class="location_select">
    <div class="location_select_search">
      <div class="location_select_search_wrapper">
        <v-icon
          size="x-small"
          class="location_select_search_wrapper_search_icon"
          icon="mdi-magnify"
        ></v-icon>
        <input
          type="text"
          v-model.trim="search"
          class="location_select_search_wrapper_search_input"
          placeholder="Search location"
        />
      </div>
    </div>
    <div class="location_select_search_wrapper_active_country">
      <v-icon x-small class="location_select_search_wrapper_cancel_icon"
        >mdi-navigation-variant-outline</v-icon
      >
      <p>Kampala, (Uganda)</p>
    </div>
    <div class="location_select_search_wrapper_countries_list">
      <div
        class="location_select_search_wrapper_countries_list_country"
        v-for="{ id, name } in filterCountries"
        :key="id"
      >
        <input type="radio" id="customRadio1" name="location" />
        <label for="customRadio1">{{ name }}</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "SelectLocation",

  props: {
    searchFilter: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const countriesList = ref([
      {
        id: 1,
        name: "Uganda",
      },
      { id: 3, name: "Rwanda" },
      { id: 2, name: "Kenya" },
      { id: 4, name: "Burundi" },
    ]);
    const search = ref("");

    const filterCountries = computed(() => {
      return countriesList.value.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(
            search.value.toLowerCase() || props.searchFilter.toLowerCase()
          );
      });
    });

    return {
      countriesList,
      search,
      filterCountries,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";
@import "../scss/nav.scss";

.location_select {
  @include showOnHover();

  &_search {
    height: 2rem;
    background-color: $menuRed;
    padding: 1rem;
    display: flex;
    align-content: center;

    &_wrapper {
      background-color: $white;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 0.4rem !important;

      &_search_icon {
        color: $black;
        margin-left: 0.25rem;
      }

      &_search_input {
        width: 100%;
        max-height: 100%;
        max-width: 300px;
        height: 2.5rem;
        border: none;
        border-radius: 0.25rem;
        padding: 0 0.625rem;

        &:focus {
          outline: none;
          border: none;
        }

        @media #{$tablet} {
          display: none !important;
        }

        @media #{$mobile} {
          display: none !important;
        }
      }

      &_active_country {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 0.3px solid $nav-border;
        height: 32px;
        padding: 8px;
        color: $menuRed;
        font-weight: 700;
        letter-spacing: 0.2px;
        font-size: 13px;

        &:hover {
          cursor: pointer;
        }

        i {
          height: 6px;
          width: 6px;
          margin: 8px;
        }
      }

      &_countries_list {
        height: 195px;
        display: flex;
        flex-direction: column;
        gap: 0;
        overflow-y: auto;
        @include scrollbar-thin();

        &_country {
          padding-right: 1.5em;
          padding-left: 0;
          text-align: right;
          display: flex;
          flex-direction: row-reverse;
          min-height: 2rem;
          font-size: 0.813rem;
          border-bottom: 0.019rem solid $nav-border;
          padding: 0.5rem 0 0.5rem 0.5rem;
          align-items: center;
          justify-content: center;

          &:hover {
            cursor: pointer;
          }

          input[type="radio"] {
            border-radius: 50%;
            float: right;
            margin-right: 1.5em;
            margin-left: 0;
            border: 0.063rem solid $menuRed;

            &:checked {
              border-color: $menuRed !important;
              background-color: $menuRed !important;
            }
          }

          label {
            color: $black;
            text-align: left !important;
            display: inline-block;
            width: 100%;
            text-overflow: ellipsis;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
