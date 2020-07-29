export default {
  CHANGE_VALUE: (state, index, item) => {
    if (state.form[index] in state.form) {
      state.form[index].value = item;
    }
  },
};
