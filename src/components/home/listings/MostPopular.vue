<template>
  <div class="popular">
    <div class="popular_container">
      <div class="popular_container_header pt-4 pb-2 ml-1 mr-2">
        <h5>{{ routeInfo.title }}</h5>
        <p>
          <slot name="route"></slot>
        </p>
      </div>
      <div class="popular_container_list">
        <div
          class="popular_container_list_item"
          v-for="{
            id,
            name,
            coverImage,
            rating,
            cusines,
            average_delivery_time,
            averageMealForTwo,
            currency,
            currentOffer,
          } in restaurants"
          :key="id"
        >
          <div class="popular_container_list_item_image">
            <div class="popular_container_list_item_image_city">
              <span class="popular_container_list_item_image_city_badge">
                Kampala
              </span>
            </div>
            <div class="popular_container_list_item_image_favorite">
              <v-icon>mdi-heart-outline</v-icon>
            </div>
            <v-img
              class="popular_container_list_item_image_image"
              aspect-ratio="16/9"
              cover
              :src="coverImage"
            />
            <div class="popular_container_list_item_image_rating">
              <span class="popular_container_list_item_image_rating_badge">
                <v-icon icon="mdi-star-outline" size="small"></v-icon>
                {{ rating.rate }} ({{ rating.outOf }})
              </span>
            </div>
          </div>
          <div class="popular_container_list_item_info">
            <div class="popular_container_list_item_info_title">
              <h6 class="mb-1 popular_container_list_item_info_title_name">
                {{ name }}
              </h6>
              <p class="mb-3">{{ cusines.join(", ") }}</p>
              <p class="mb-3 popular_container_list_item_info_title_time">
                <span class="average">
                  <v-icon icon="mdi-clock-outline" size="small"></v-icon>
                  {{ average_delivery_time }} min
                </span>
                <span class="average_price_for_two">
                  <v-icon icon="mdi-cash" size="small"></v-icon>
                  {{ averageMealForTwo }} {{ currency }} FOR TWO
                </span>
              </p>
            </div>
            <div class="popular_container_list_item_info_offer">
              <span class="popular_container_list_item_info_offer_badge mr-1">
                OFFER
              </span>
              <small>
                {{ currentOffer.description }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { routeInfo } from "@/types/generics";

export default defineComponent({
  name: "MostPopular",
  props: {
    routeInfo: {
      type: Object as PropType<routeInfo>,
      default: () => ({}),
    },
  },
  setup(props) {
    const restaurants = ref([
      {
        id: 1,
        name: "Thai Famous Cuisine",
        coverImage: "https://pos.prodevkampala.com/img/popular1.png",
        cusines: ["American", "BBQ", "Burgers"],
        average_delivery_time: 30,
        averageMealForTwo: 30,
        currency: "UGX",
        rating: {
          rate: 4.5,
          outOf: 300,
        },
        currentOffer: {
          description: "Use Coupon 50OFF ",
        },
      },
      {
        id: 2,
        name: "Inkoko rotisserie",
        coverImage: "https://pos.prodevkampala.com/img/popular2.png",
        cusines: ["Vegeterian", "Indian", "Thai"],
        average_delivery_time: 30,
        averageMealForTwo: 50,
        currency: "UGX",
        rating: {
          rate: 4.5,
          outOf: 300,
        },
        currentOffer: {
          description: "Use Coupon 50OFF ",
        },
      },
      {
        id: 3,
        name: "Gators Cafe",
        coverImage: "https://pos.prodevkampala.com/img/popular6.png",
        cusines: ["Humbergers", "North", "Pure veg"],
        average_delivery_time: 30,
        averageMealForTwo: 20,
        currency: "UGX",
        rating: {
          rate: 4.5,
          outOf: 300,
        },
        currentOffer: {
          description: "Use Coupon 50OFF ",
        },
      },
      {
        id: 3,
        name: "Gators Cafe",
        coverImage: "https://pos.prodevkampala.com/img/popular4.png",
        cusines: ["Humbergers", "North", "Pure veg"],
        average_delivery_time: 30,
        averageMealForTwo: 20,
        currency: "UGX",
        rating: {
          rate: 4.5,
          outOf: 300,
        },
        currentOffer: {
          description: "Use Coupon 50OFF ",
        },
      },
      {
        id: 3,
        name: "Gators Cafe",
        coverImage: "https://pos.prodevkampala.com/img/popular8.png",
        cusines: ["Humbergers", "North", "Pure veg"],
        average_delivery_time: 30,
        averageMealForTwo: 20,
        currency: "UGX",
        rating: {
          rate: 4.5,
          outOf: 300,
        },
        currentOffer: {
          description: "Use Coupon 50OFF ",
        },
      },
    ]);
    const goTo = (route: string) => {
      console.log("go to", props.routeInfo.path.name);
    };

    return {
      restaurants,
      goTo,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.popular {
  display: block;
  height: auto;
  color: $black;
  width: 100%;
  height: 100%;
  @include scrollbar-hidden();
  padding-bottom: 1rem;

  &_container {
    @include page-flex();
    display: flex;
    flex-direction: column;

    &_header {
      display: block;
      position: relative;
      justify-content: center;
      width: 100%;
      height: 3.5rem;

      h5 {
        --bs-heading-color: $black;
        position: absolute;
        left: 0.5rem;
        line-height: 1.2;
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bs-heading-color, inherit);
      }

      p {
        position: absolute;
        right: 0.5rem;
        font-weight: 500;
        cursor: pointer;

        ::v-deep a {
          outline: none;
          color: $red;
          text-decoration: none;
        }
      }
    }

    &_list {
      min-height: 23.544rem;
      background: inherit;
      height: auto;
      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      margin-bottom: 1rem;
      @include scrollbar-hidden();

      @media #{$mobile-small} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      @media #{$mobile} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      &_item {
        display: inline-block;
        width: 16.7rem;
        --bs-bg-opacity: 1;
        --bs-white-rgb: 255, 255, 255;
        --bs-body-color-rgb: 33, 37, 41;
        border-radius: 0.375rem;
        background-color: rgba(
          var(--bs-white-rgb),
          var(--bs-bg-opacity)
        ) !important;
        box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075) !important;
        overflow: hidden;

        @media #{$laptop-large} {
          min-width: 15.6rem;
          max-width: 15.6rem;
        }

        @media #{$laptop} {
          min-width: 14.7rem;
          max-width: 14.7rem;
        }

        @media #{$tablet} {
          min-width: 10.5rem;
          max-width: 10.5rem;
        }

        @media #{$allSmallScreens} {
          min-width: 24rem;
          max-width: 24rem;
        }

        // @media #{$mobile-medium} {
        //   min-width: 22rem;
        //   max-width: 22rem;
        // }

        @media #{$mobile-small} {
          min-width: 21rem;
          max-width: 21rem;
        }

        &_image {
          width: 100%;
          height: 9.882rem;
          overflow: hidden;
          position: relative;
          cursor: pointer;

          @media #{$laptop-large} {
            height: 9.882rem;
          }

          @media #{$laptop} {
            height: 8.504rem;
          }

          @media #{$tablet} {
            height: 6.613rem;
          }

          @media #{$allSmallScreens} {
            height: 13.228rem;
          }

          // @media #{$mobile-medium} {
          //   height: 20rem;
          // }

          // @media #{$mobile-small} {
          //   height: 21.732rem;
          // }

          &_city {
            position: absolute;
            left: 0.5rem;
            top: 0.5rem;
            z-index: 2;

            &_badge {
              background: $black;
              color: $white;
              padding: 0.25rem 0.5rem;
              border-radius: 0.25rem;
              font-size: 0.75rem;
              font-weight: 700;
            }

            &:hover {
              color: $accent;
              cursor: pointer;
            }
          }

          &_image {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 0;
            z-index: 1;
          }

          &_favorite {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            z-index: 2;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
            background: $white;
            border-radius: 50%;
            color: $red;

            &:hover {
              color: $accent;
              cursor: pointer;
            }
          }

          &_rating {
            position: absolute;
            right: 0.5rem;
            bottom: 0.5rem;
            display: block;
            background: #198754;
            color: $white;
            z-index: 3;
            border-radius: 0.25rem;
            padding: 0 0.25rem;

            &_badge {
              display: contents;
              font-size: 0.688rem;
              padding: 0.313rem;
              box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
              font-weight: 800;
            }
          }
        }

        &_info {
          padding: 1rem !important;
          overflow: hidden;
          display: block;

          &_title {
            &_name {
              overflow: hidden;
              white-space: nowrap;
              font-size: 0.938rem;
              text-overflow: ellipsis;
              font-weight: 500;
            }

            p {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 0.75rem;
              letter-spacing: 0.2px;
            }

            &_time {
              width: 100%;
              .average {
                left: 0;
                --bs-bg-opacity: 1;
                --bs-light-rgb: 248, 249, 250;
                background-color: rgba(
                  var(--bs-light-rgb),
                  var(--bs-bg-opacity)
                ) !important;
                width: auto;
                padding-top: 0.25rem !important;
                padding-bottom: 0.25rem !important;
              }

              .average_price_for_two {
                float: right;
                color: rgba(0, 0, 0, 0.5) !important;
              }
            }
          }

          &_offer {
            display: block;

            &_badge {
              background-color: RGBA(
                25,
                135,
                84,
                var(--bs-bg-opacity, 1)
              ) !important;
              --bs-badge-padding-x: 0.65em;
              --bs-badge-padding-y: 0.35em;
              --bs-badge-font-size: 0.75em;
              --bs-badge-font-weight: 700;
              --bs-badge-color: #fff;
              --bs-badge-border-radius: 0.375rem;
              display: inline-block;
              padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
              font-size: var(--bs-badge-font-size);
              font-weight: var(--bs-badge-font-weight);
              line-height: 1;
              color: var(--bs-badge-color);
              text-align: center;
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: var(--bs-badge-border-radius);
            }
          }
        }
      }
    }
  }
}
</style>
