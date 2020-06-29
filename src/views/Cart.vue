<template>
  <section class="cart">
    <div class="cart__store">
      <header>
        <h2 class="title cart__title">Shopping basket</h2>
        <span class="undo" v-if="Object.keys(delItem).length > 0"
          >Deleted. <a href="#" @click.prevent="revivalItem()">Restore</a></span
        >
        <span v-else></span>
      </header>
      <div class="body">
        <ul class="cart__list">
          <li
            class="cart__product product"
            v-for="item in cart"
            v-bind:key="item.id"
          >
            <div class="product__product-wrapper">
              <img :src="item.img" :alt="item.img" />
            </div>
            <div class="product__details">
              <h3 class="title">
                {{ item.name }}
              </h3>
              <span class="product__price">{{ item.cost }} $</span>
              <div class="product__actions">
                <div class="product__quantity">
                  <label for="product__cd-product">Кол-во</label>
                  <span class="product__select">
                    <input
                      name="quantity"
                      id="number"
                      @change="chengeQt()"
                      v-model.number="item.qt"
                      type="number"
                      min="1"
                      max="100"
                    />
                  </span>
                </div>
                <a
                  class="product__delete-item"
                  @click.prevent="removeItem(item.id)"
                  >&#10005;</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
      <footer>
        <router-link to="/checkout" class="checkout btn">
          <em
            >Итого - <span>{{ Total }} $</span></em
          >
        </router-link>
      </footer>
    </div>

    <form action="" class="cart__form"></form>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      cartOpen: null,
    };
  },
  computed: {
    ...mapGetters(["cart", "TotalPositions", "delItem", "Total"]),
  },
  methods: {
    ...mapActions(["removeItem", "chengeQt", "revivalItem"]),
    showCart(event) {
      console.log(event);
    },
  },
};
</script>
<style lang="scss">
.cart {
  padding: 10px;
  padding-top: 77px;
  display: flex;
  min-height: 100vh;
  &__store {
    width: 50%;
    border: 1px solid black;
  }
  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
}
.product {
  position: relative;
  display: flex;
  background-color: $palaceholder;
  margin-bottom: 20px;
  &__product-wrapper {
    max-width: 100px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid $darker;
    background-color: $white;
  }
  &__list {
  }
  &__delete-item {
    position: absolute;
    right: 10px;
    top: 1px;
  }
  &__details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
