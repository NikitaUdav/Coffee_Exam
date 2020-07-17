<template>
  <section class="cart">
    <div class="cart__store">
      <header>
        <h2 class="title cart__title">Shopping Cart</h2>
        <span class="undo" v-if="Object.keys(delItem).length > 0">
          Deleted.
          <a href="#" @click.prevent="revivalItem()">Restore</a>
        </span>
        <span v-else></span>
      </header>
      <div class="body">
        <ul class="cart__list">
          <li
            :id="item.id"
            class="cart__product product"
            :class="{ red: i === activeItem }"
            v-for="(item, i) in cart"
            v-bind:key="item.id"
          >
            <div class="product__product-wrapper">
              <img :src="item.img" :alt="item.img" />
            </div>
            <div class="product__details">
              <h3 class="title">{{ item.name }}</h3>
              <span class="product__price">$ {{ item.cost }}</span>
              <div class="product__actions">
                <div class="product__quantity">
                  <input
                    class="product__quantity"
                    name="quantity"
                    id="number"
                    @change="chengeQt()"
                    v-model.number="item.qt"
                    type="number"
                    min="1"
                    max="100"
                  />
                </div>
                <button
                  class="product__delete-item"
                  @mouseenter="selectItem(i)"
                  @mouseleave="delselectItem()"
                  @click.prevent="removeItem(item.id), delselectItem()"
                >&#10005;</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <the-pay-form />
  </section>
</template>
<script>
import ThePayForm from "../components/common/ThePayForm";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      cartOpen: null,
      activeItem: null
    };
  },
  components: {
    ThePayForm
  },
  computed: {
    ...mapGetters(["cart", "TotalPositions", "delItem", "Total"])
  },
  methods: {
    ...mapActions(["removeItem", "chengeQt", "revivalItem"]),
    showCart(event) {
      console.log(event);
    },
    selectItem(i) {
      this.activeItem = i;
    },
    delselectItem() {
      this.activeItem = null;
    }
  }
};
</script>
<style lang="scss">
.cart {
  padding: 10px;
  padding-bottom: 30px;
  padding-top: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  @media screen and (min-width: $screen-desktop) {
    flex-direction: row;
    align-items: flex-start;
  }
  background: rgba(217, 217, 217, 1);
  background: -moz-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(217, 217, 217, 1)),
    color-stop(100%, rgba(245, 245, 245, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d9d9d9', endColorstr='#f5f5f5', GradientType=0 );

  &__store {
    width: 100%;
    @media screen and (min-width: $screen-desktop) {
      width: 50%;
    }
  }
  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
}
.product {
  transition: all ease 0.4s;
  position: relative;
  display: flex;
  border-bottom: 1px solid $palaceholder;
  padding: 26px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: $screen-tablet) {
    justify-content: start;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 0;
    padding-top: 0;
  }
  &__product-wrapper {
    display: flex;
    max-width: 150px;
    max-height: 200px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid $darker;
    background-color: $white;
    @media screen and (min-width: $screen-tablet) {
      max-width: 200px;
    }
  }

  &__price {
    min-width: 100px;
    @include text($H350, 400, $dark);
  }
  &__quantity {
    text-align: center;
    font-size: $H300;
    background-color: inherit;
    outline: none;
    border: 1px solid $dark;
    border-radius: 10px;
    :first-child {
      border: none;
    }
  }
  &__delete-item {
    position: absolute;
    outline: none;
    border: none;
    background-color: inherit;
    font-size: 17px;
    cursor: pointer;
    right: 10px;
    top: 1px;
  }
  &__details {
    padding: 10px;
    width: 45%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    :not(:last-child) {
      margin-bottom: 24px;
    }
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  }
}

.red {
  background-color: rgba(255, 9, 9, 0.8);
}
</style>
