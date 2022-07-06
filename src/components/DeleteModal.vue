<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Delete Modal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this product?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteProduct(product)"
            data-bs-dismiss="modal"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from "@/api/CRUD";

export default {
  name: "DeleteModal",
  props: ["product"],
  methods: {
    deleteProduct(data) {
      const item = {
        id: data._id,
        name: data.name,
        weight: data.weight,
        code: data.code,
        color: data.color,
        price: data.price,
        isDeleted: true,
      };
      API.deleteProduct(item);
    },
  },
};
</script>
