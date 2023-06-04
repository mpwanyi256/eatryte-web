<template>
  <div class="listing">
    <div class="listing_container">
      <div class="listing_container_header pt-4 pb-2">
        <h5>Trending this week</h5>
        <a href="#"> View all >> </a>
      </div>
      <div class="listing_container_list">
        <div
          class="listing_container_list_item"
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
          <div class="listing_container_list_item_image">
            <div class="listing_container_list_item_image_city">
              <span class="listing_container_list_item_image_city_badge">
                Kampala
              </span>
            </div>
            <div class="listing_container_list_item_image_favorite">
              <v-icon>mdi-heart-outline</v-icon>
            </div>
            <v-img
              class="listing_container_list_item_image_img"
              aspect-ratio="16/9"
              cover
              :src="coverImage"
            />
            <div class="listing_container_list_item_image_rating">
              <span class="listing_container_list_item_image_rating_badge">
                <v-icon icon="mdi-star-outline" size="small"></v-icon>
                {{ rating.rate }} ({{ rating.outOf }})
              </span>
            </div>
          </div>
          <div class="listing_container_list_item_info">
            <div class="listing_container_list_item_info_title">
              <h6 class="mb-1 listing_container_list_item_info_title_name">
                {{ name }}
              </h6>
              <p class="mb-3">{{ cusines.join(", ") }}</p>
              <p class="mb-3 listing_container_list_item_info_title_time">
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
            <div class="listing_container_list_item_info_offer">
              <span class="listing_container_list_item_info_offer_badge mr-1">
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Company-listing",
  setup() {
    const restaurants = ref([
      {
        id: 1,
        name: "Thai Famous Cuisine",
        coverImage: "https://pos.prodevkampala.com/img/trending1.png",
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
        coverImage: "https://pos.prodevkampala.com/img/trending2.png",
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
        coverImage: "https://pos.prodevkampala.com/img/trending3.png",
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
        coverImage: "https://pos.prodevkampala.com/img/trending3.png",
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
        coverImage: "https://pos.prodevkampala.com/img/trending3.png",
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

    return {
      restaurants,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.listing {
  display: block;
  // flex-direction: column;
  min-height: 11.875rem;
  color: $black;
  width: 100%;

  &_container {
    @include page-flex();
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &_header {
      display: block;
      position: relative;
      justify-content: center;
      width: 100%;
      height: 3.5rem;

      h5 {
        --bs-heading-color: $black;
        position: absolute;
        left: 0;
        line-height: 1.2;
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--bs-heading-color, inherit);
      }

      a {
        position: absolute;
        right: 0;
        outline: none !important;
        color: $red;
        text-decoration: none;
        font-weight: 500 !important;
      }
    }

    &_list {
      min-height: 23.544rem;
      max-height: 23.544rem;
      gap: 1rem;
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      padding: 0 1rem;
      @include scrollbar-hidden();

      &_item {
        float: left;
        min-width: 22.75rem;
        max-width: 22.75rem;
        display: block;
        --bs-bg-opacity: 1;
        --bs-white-rgb: 255, 255, 255;
        --bs-body-color-rgb: 33, 37, 41;
        border-radius: 0.375rem;
        background-color: rgba(
          var(--bs-white-rgb),
          var(--bs-bg-opacity)
        ) !important;
        height: 100%;
        box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075) !important;

        @media #{$mobile} {
          min-width: 14.25rem;
          max-width: 14.25rem;
        }

        @media #{$mobile-small} {
          min-width: 16rem;
          max-width: 16rem;
        }

        @media #{$tablet} {
          min-width: 14.8rem;
          max-width: 14.8rem;
        }

        @media #{$laptop} {
          min-width: 18.875rem;
          max-width: 18.875rem;
        }

        @media #{$laptop-medium} {
          min-width: 16.6rem;
          max-width: 16.6rem;
        }

        &_image {
          width: 100%;
          height: 13.7rem;
          overflow: hidden;
          position: relative;
          cursor: pointer;

          @media #{$mobile} {
            height: 8.976rem;
          }

          @media #{$mobile-small} {
            height: 10.079rem;
          }

          @media #{$tablet} {
            height: 9.369rem;
          }

          @media #{$laptop} {
            height: 8.504rem;
          }

          @media #{$laptop-medium} {
            height: 10.276rem;
          }

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

          &_img {
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
