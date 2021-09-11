<script>
export default {
  methods: {
    validateEmail(string) {
      let user = string.value.substring(0, string.value.indexOf("@"));
      let domain = string.value.substring(
        string.value.indexOf("@") + 1,
        string.value.length
      );

      if (
        user.length >= 1 &&
        domain.length >= 3 &&
        user.search("@") == -1 &&
        domain.search("@") == -1 &&
        user.search(" ") == -1 &&
        domain.search(" ") == -1 &&
        domain.search(".") != -1 &&
        domain.indexOf(".") >= 1 &&
        domain.lastIndexOf(".") < domain.length - 1
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

