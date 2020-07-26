<template>
  <form id="appForm" @submit="clearCart" action="" class="pay-form">
    <h2 class="title pay-form__title">Contact information</h2>
    <ul class="pay-form__list">
      <li class="pay-form__item" v-for="(item, index) in form" :key="item.id">
        <label class="pay-form__uper-title">{{ item.name }}</label>
        <!-- <span class="fa" v-if="controls[index].activated" :class="controls[index].error ? 'fa-exclamation-circle text-danger' : 'fa-check-circle text-success'"> -->
        <input
          class="pay-form__input"
          :name="item.name"
          :type="item.type"
          :placeholder="item.placeHolder"
          :value="item.value"
          @input="onInput(index, $event.target.value)"
          :maxlength="item.maxl"
          v-mask="item.mask"
        />
      </li>
    </ul>
    <button
      class="pay-form__button"
      type="submit"
      :disabled="done < form.length"
    >
      <span class="pay-form__price">To pay ${{ Total }}</span>
    </button>
  </form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mask } from "vue-the-mask";
export default {
  name: "ThePayForm",
  directives: { mask },
  computed: {
    ...mapGetters(["Total"]),

    done() {
      let done = 0;

      for (let i = 0; i < this.controls.length; i++) {
        if (!this.controls[i].error) {
          done++;
        }
      }

      return done;
    },
  },
  data() {
    return {
      name: "",
      phone: 0,
      form: [
        {
          id: "firstName",
          name: "First name",
          type: "text",
          placeHolder: "Ivan",
          value: "",
          pattern: /^[a-zA-Z ]{2}/,
          mask: "",
          maxl: 12,
        },
        {
          id: "lastName",
          name: "Last name",
          type: "text",
          placeHolder: "Groznyi",
          value: "",
          pattern: "^[a-zA-Z ]{2}",
          mask: "",
          maxl: 12,
        },
        {
          id: "email",
          name: "Email",
          type: "email",
          placeHolder: "example@mail.com",
          value: "",
          mask: "",
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          maxl: 30,
        },
        {
          id: "phone",
          name: "Phone",
          type: "tel",
          placeHolder: "+380(00)000-00-00",
          value: "",
          mask: "+###(##)###-##-##",
          pattern: "",
          maxl: 12,
        },
      ],
      controls: [],
      formSubmited: false,
    };
  },
  created() {
    for (let i = 0; i < this.form.length; i++) {
      let pattern = new RegExp(this.form[i].pattern);
      this.controls.push({
        error: !pattern.test(this.form[i].value),
        activated: this.form[i].value != "",
      });
    }
  },
  methods: {
    ...mapActions(["clearCart"]),
    onInput(index, value) {
      let data = this.form[index];
      let control = this.controls[index];
      let pattern = new RegExp(data.pattern);
      data.value = value;
      control.error = !pattern.test(value);
      control.activated = true;
    },
  },
};
</script>
<style lang="scss">
.pay-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 840px) {
    width: 50%;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__list {
    width: 100%;
    margin-bottom: 40px;
    @media screen and (min-width: 840px) {
      width: 50%;
    }
  }
  &__item {
    padding: 5px;
    margin-bottom: 5px;
  }
  &__uper-title {
    margin-bottom: 5px;
  }
  &__input {
    @include text($H300, 400, $dark);
    width: 100%;
    outline: none;
    border: 1px solid $grey;
    border-radius: 10px;
    min-height: 40px;
    padding: 2px;
    padding-left: 5px;
  }
  &__button {
    @include text($H400, 400, $sale);
    position: relative;

    transition: all ease 0.3s;
    border: none;
    outline: none;
    background-color: $late;
    text-transform: uppercase;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
    min-height: 70px;
    -webkit-box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.35);
    box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.35);
    &:disabled {
      background-color: $grey;
    }
    @media screen and (min-width: $screen-tablet) {
      &:disabled {
        &::after {
          content: "finish form";
          background-color: rgb(105, 2, 2);
        }
      }
      &:hover {
        &::after {
          opacity: 1;
        }
      }

      &::after {
        transition: all ease 0.3s;
        content: "ORDER !";
        @include text($H600, 400, $sale);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        background-color: rgba(11, 161, 44, 1);
      }
    }
  }
}
</style>
