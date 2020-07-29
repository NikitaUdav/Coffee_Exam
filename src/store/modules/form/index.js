import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  form: [
    {
      id: "firstName",
      name: "First name",
      type: "text",
      placeHolder: "Ivan",
      value: "",
      pattern: "^[a-zA-Z ]{2,}",
      maxl: 12,
    },
    {
      id: "lastName",
      name: "Last name",
      type: "text",
      placeHolder: "Groznyi",
      value: "",
      pattern: "^[a-zA-Z ]{2,}",
      maxl: 12,
    },
    {
      id: "email",
      name: "Email",
      type: "email",
      placeHolder: "example@mail.com",
      value: "",
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      maxl: 30,
    },
    {
      id: "phone",
      name: "Phone",
      type: "tel",
      placeHolder: "+380(00)000-00-00",
      value: "",
      pattern: "[0-9]{12,}",
      maxl: 17,
    },
  ],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
