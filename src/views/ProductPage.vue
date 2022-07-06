<template>
    <div>
        <h1>Product page</h1>
        <div class="my-3">
            <router-link to="/" class="link">Home page &RightArrow;</router-link>
            <button
              type="button"
              class="btn btn-success ms-3"
              data-bs-toggle="modal"
              data-bs-target="#addProduct"
            >
              Add product
            </button>
        </div>
        <ProductTable :columns="columns" :entries="filteredEntries" />
        <div class="paginations">
            <button @click="previousPage()" class="prev-btn">Previous</button>
            <button v-for="b in nrOfPages" :key="b" @click="setCurrentPage(b)" class="page " :class="{'active': currentPage === b}">{{b}}</button>
            <button @click="nextPage()" class="prev-btn">Next</button>
        </div>
        <AddProductModal />
    </div>
</template>

<script>
import AddProductModal from '../components/AddProductModal.vue'
import ProductTable from '../components/ProductTable.vue'

export default {
    name: 'ProductPage',
    data() {
        return {
            columns: [
                { name: 'id', text: 'Id'},
                { name: 'name', text: 'Name'},
                { name: 'code', text: 'Code'},
                { name: 'weight', text: 'Weight'},
                { name: 'price', text: 'Price'},
                { name: 'color', text: 'Color'},
                { name: 'isDeleted', text: 'Is deleted'},
            ],
            entries: [],
            pageSize: 3,
            currentPage: 1,
            nrOfPages: 1,
            filteredEntries: []
        }
    },
    components: {
        ProductTable,
        AddProductModal,
    },
    created() {
        this.getAllProducts().then(resp => {
            this.entries = resp;
            console.log('entries', this.entries.length)
            this.paginateEntries();
            this.countPages();
        })
    },
    methods: {
        async getAllProducts() {
            const response = await fetch('http://localhost:3000/products')
            return response.json();
        },
        previousPage() {
            if(this.currentPage > 1) this.currentPage--;
            this.paginateEntries();
        },
        nextPage() {
            if((this.currentPage * this.pageSize) < this.entries.length) this.currentPage++
            this.paginateEntries();
        },
        countPages() {
            const nr = this.entries.length / this.pageSize;
            this.nrOfPages = Math.ceil(nr);
            console.log('nr', this.nrOfPages)
        },
        setCurrentPage(nr) {
            this.currentPage = nr;
            this.paginateEntries();
            return nr;
        },
        paginateEntries() {
            const filteredList = this.entries.filter((prod, index) => {
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
            })
            this.filteredEntries = [...filteredList]
        }
    }
    
}
</script>

<style scoped>
    .form-select {
        max-width: 300px;
        margin: 0 10px;
    }
    .prev-btn {
        border: none;
        background-color: #fff;
        font-weight: 700;
        color: purple;
        margin: 0 5px;
    }
    .page  {
        border: none;
        background-color: #fff;
        color: purple;
        margin: 0 3px;
    }
    .page.active {
        border: 1px solid purple;
        border-radius: 50%;
        font-weight: 700;
    }
</style>