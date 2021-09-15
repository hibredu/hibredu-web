<script>
export default {
  methods: {
    validateEmail(email) {
      if(/.+@.+\..+/.test(email)) {
        return true
      } else {
        return false
      }
    }
  },
};
</script>

