<script>
    import EditModal from "./EditModal.vue";

    export default {
        name: 'EditProduct',
        props: ['product'],
        components: { EditModal },
        methods: {
          showProd() {
            console.log(this.product)
          }
        }
    }
</script>

<template>
  <button
    type="button"
    class="btn btn-primary mx-2"
    data-bs-toggle="modal"
    data-bs-target="#editModal"
    @click="showProd()"
  >
    Edit
  </button>
  <EditModal :product="product" />
</template>
