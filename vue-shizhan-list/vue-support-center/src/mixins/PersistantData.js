export default function(id, fields) {
  return {
    watch: fields.reduce((obj, field) => {
      obj[field] = function(val) {
        localStorage.setItem(`${id}.${field}`, JSON.stringify(val));
      };
      return obj;
    }, {}),
    created() {
      for (const field of fields) {
        const savedValue = localStorage.getItem(`${id}.${field}`);
        if (savedValue !== null) {
          this.$data[field] = JSON.parse(savedValue);
        }
      }
    },
    methods: {
      saveAllPersistantData() {
        for (const field of fields) {
          localStorage.setItem(
            `${id}.${field}`,
            JSON.stringify(this.$data[field])
          );
        }
      }
    },
    beforeDestroy() {
      this.saveAllPersistantData();
    }
  };
}