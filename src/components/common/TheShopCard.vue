<template>
  <div>
    <ul class="products-store__shop-list">
      <li
        v-for="item in mass"
        :key="item.id"
        class="shop-card "
        uk-parallax="opacity: 0,1; y: 150,0; viewport: 0.3"
      >
        <div class="shop-card__img-wrapper">
          <img class="imgs" :src="item.img" :alt="item.img" />
        </div>

        <h3 class="shop-card__title title">{{ item.name }}</h3>
        <span class="shop-card__price">${{ item.cost }}</span>
        <div class="shop-card__inpunts">
          <button
            @click="addToItems(item), notification(item.name)"
            class="shop-card__button"
          >
            add to cart
          </button>

          <button
            @click="calModal(item.description, item.name)"
            class="shop-card__button"
            href="#modal-center"
            uk-toggle
          >
            info
          </button>
        </div>
      </li>
    </ul>

    <div id="modal-center" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button
          class="uk-modal-close-default modal"
          type="button"
          uk-close
        ></button>
        <h3 class="title modal__title">{{ modalName }}</h3>
        <ul class="modal__list">
          <li
            v-for="(value, name) in modal"
            :key="value.id"
            class="modal__item"
          >
            <article class="modal__article">
              <span class="modal__name">{{ name }}</span>
              <span class="modal__value">{{ value }}</span>
            </article>
          </li>
          <li v-if="virtues.length > 1" class="modal__item">
            <span class="modal__name">Virtues</span>
            <ul>
              <li class="modal__virtues" v-for="virt in virtues" :key="virt.id">
                <span>- {{ virt }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import UIkit from "uikit";
export default {
  name: "TheShopCard",
  props: {
    mass: Array,
  },
  data() {
    return {
      modal: {},
      modalName: "",
      virtues: [],
    };
  },
  methods: {
    ...mapActions(["addToItems"]),
    notification(name) {
      UIkit.notification({
        message: `${name} added to cart`,
        status: "success",
        pos: "top-right",
        timeout: 5000,
      });
    },
    calModal(item, name) {
      const dot = ".";
      if (item) {
        this.virtues = [...item.virtues.split(dot)];
        delete item.virtues;
        this.modal = item;
        this.modalName = name;
      } else {
        this.modalName = "No discription";
        this.modal = {};
      }
    },
  },
};
</script>
<style lang="scss">
.shop-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $grey;
  width: 95%;
  max-width: 350px;
  border-radius: 5px;
  margin-bottom: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: $screen-tablet) {
    transition: all ease 0.3s;
    width: 45%;
    &:hover {
      transform: scale(1.1) !important;
    }
  }
  @media screen and (min-width: $screen-hd) {
    max-width: 300px;
    max-height: 500px;
  }
  @media screen and (min-width: $screen-retina) {
    max-width: 320px;
  }
  &__img-wrapper {
    background-color: white;
    position: relative;
    width: 100%;
    height: 370px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  &__title {
    color: $grey-light;
    margin-bottom: 10px;
  }
  &__price {
    @include text($H400, 400, #ffec3d);
    margin-bottom: 20px;
  }
  &__inpunts {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    :first-child {
      order: 3;
    }
    :last-child {
      margin-bottom: 34px;
    }
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      :first-child {
        order: -1;
      }
      :last-child {
        margin-bottom: 0px;
      }
    }
  }
  &__button {
    @include text($H350, 700, $late);
    padding: 10px 15px 10px 15px;
    transition: all ease-in 0.3s;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: capitalize;
    @media screen and (min-width: $screen-tablet) {
      &:hover {
        color: $light;
        background-color: $late;
      }
    }
  }
}
.modal {
  text-align: center;
  &__title {
    text-align: center;
    margin-bottom: 20px;
  }
  &__virtues {
    padding: 5px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    border-bottom: $dark solid 1px;
    margin-bottom: 15px;
  }
  &__article {
    padding: 5px;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
  }
  &__name {
    @include text($H200, 700, $dark);
    &::after {
      content: ":";
    }
  }
}
.imgs {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-height: 300px;
  max-width: 100%;
  vertical-align: middle;
}
.uk-notification-message {
  background-color: $grey !important;
}
</style>
