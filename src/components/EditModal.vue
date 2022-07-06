<script>
import EditProductForm from './EditProductForm.vue';
export default {
    name: "EditModal",
    props: ["product"],
    components: { EditProductForm },
    methods: {
      showProd() {
        console.log(this.product)
      }
    }
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Edit Modal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <EditProductForm :product="product" />
        </div>
        <button @click="showProd()">Modal Product</button>
      </div>
    </div>
  </div>
</template>
