<template>
  <div class="table-section mt-5">

    <table class="table">
      <thead>
        <tr class="table-dark">
          <th v-for="th in tableHeader" :key="th">{{ th.text }}</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item._id">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.weight }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.color }}</td>
          <td>{{ item.isDeleted }}</td>
          <td>
            <EditProduct :product="item" />
            <DeleteProduct :product="item" />
          </td>
        </tr>
      </tbody>
    </table>
    <DeleteModal />
  </div>
</template>


<script>
import DeleteModal from './DeleteModal.vue';
import EditProduct from './EditProduct.vue';
import DeleteProduct from './DeleteProduct.vue';

export default {
  name: "ProductTable",
  props: {
    columns: Array,
    entries: Array
  },
  computed: {
    tableHeader() {
      return this.columns || []
    },
    tableData() {
      return this.entries || []
    }
  },
  components: { DeleteModal, EditProduct, DeleteProduct },
};
</script>

<style scoped lang="scss">
/* Adopt bootstrap pagination stylesheet. */
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

  /* Write your own CSS for pagination */
  .pagination {
  }
  .page-item {
  }
.edit-btn {
  width: 20px;
  height: 20px;
}
</style>
