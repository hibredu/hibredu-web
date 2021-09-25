<script>
import moment from "moment";

export default {
  methods: {
    validateEmail(email) {
      if (/.+@.+\..+/.test(email)) {
        return true;
      } else {
        return false;
      }
    },
    formatDate(date) {
      if (date === null) {
        return null;
      } else {
        return moment(date).format("DD/MM/YYYY");
      }
    },
  },
};
</script>

