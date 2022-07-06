<template>
  <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#deleteModal"
  >
    Delete
  </button>
  <DeleteModal :product="product" />
</template>

<script>
import DeleteModal from './DeleteModal.vue';
export default {
    name: "DeleteProduct",
    props: ["product"],
    methods: {
        deleteProduct() { },
    },
    components: { DeleteModal }
};
</script>
