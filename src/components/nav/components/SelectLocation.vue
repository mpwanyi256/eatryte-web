<template>
  <div class="location_select">
    <div class="location_select_search">
      <div class="location_select_search_wrapper">
        <v-icon
          size="x-small"
          class="location_select_search_wrapper_search_icon"
          icon="mdi-magnify"
        />
        <input
          v-model.trim="search"
          type="text"
          class="location_select_search_wrapper_search_input"
          placeholder="Search location"
        >
      </div>
    </div>
    <div
      v-if="selectedCountry"
      class="location_select_search_wrapper_active_country"
    >
      <v-icon
        x-small
        class="location_select_search_wrapper_cancel_icon"
      >
        mdi-navigation-variant-outline
      </v-icon>
      <p>{{ selectedCountry.name }} ({{ selectedCountry.code }})</p>
    </div>
    <div class="location_select_search_wrapper_countries_list">
      <div
        v-for="country in filterCountries"
        :key="country._id"
        class="location_select_search_wrapper_countries_list_country"
        :class="isSelectedCountry(country) ? 'active' : ''"
        @click="setCountry(country)"
      >
        <label :for="country._id">{{ country.name }} ({{ country.code }})</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";

export default defineComponent({
  name: "SelectLocation",

  props: {
    searchFilter: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const Store = useStore<State>();
    const countriesList = computed(() => Store.state.app.countries);
    const selectedCountry = computed(() => Store.state.app.selectedCountry);
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

    const setCountry = (country: any) => {
      Store.commit("app/setCountry", country);
    };

    const isSelectedCountry = (country: any): boolean => {
      return !!(selectedCountry.value && country._id === selectedCountry.value._id);
    };

    return {
      countriesList,
      search,
      filterCountries,
      selectedCountry,
      setCountry,
      isSelectedCountry,
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
        max-width: 18.75rem;
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
        border-bottom: 0.019rem solid $nav-border;
        height: 2rem;
        padding: 0.5rem;
        color: $menuRed;
        font-weight: 700;
        letter-spacing: 0.013rem;
        font-size: 0.813rem;

        &:hover {
          cursor: pointer;
        }

        i {
          height: 0.375rem;
          width: 0.375rem;
          margin: 0.5rem;
        }
      }

      &_countries_list {
        height: 12.375rem;
        display: flex;
        flex-direction: column;
        gap: 0;
        overflow-y: auto;
        @include scrollbar-thin();

        .active {
          background-color: $menuRed;
           label {
            color: $white;
            font-weight: 700;
           }
        }

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
