<script>
import AddProductForm from './AddProductForm.vue';
export default {
    name: "AddProduct",
    components: { AddProductForm }
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="addProduct"
    tabindex="-1"
    aria-labelledby="addProductLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addProductLabel">Add product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <AddProductForm />
        </div>
      </div>
    </div>
  </div>
</template>
