<template>
  <section class="cart">
    <div class="cart__store">
      <header>
        <h2>Shopping basket</h2>
        <span
          class="undo"
          v-bind:class="Object.keys(delItem).length > 0 ? 'visible' : ''"
          >удалено.
          <a href="#" @click.prevent="revivalItem()">Восстановить</a></span
        >
      </header>

      <div class="body">
        <ul>
          <li class="product" v-for="item in cart" v-bind:key="item.id">
            <div class="product-image">
              <img :src="item.img" :alt="item.img" />
            </div>
            <div class="product-details">
              <h3>
                {{ item.name }}
              </h3>
              <span class="price">{{ item.cost }} $</span>
              <div class="actions">
                <a class="delete-item" @click.prevent="removeItem(item.id)"
                  >Удалить</a
                >
                <div class="quantity">
                  <label for="cd-product">Кол-во</label>
                  <span class="select">
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
  padding-top: 80px;

  display: flex;
  min-height: 100vh;
}
</style>
