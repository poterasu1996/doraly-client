<script>
import { API } from '@/api/CRUD'; 

export default {
    name: 'EditProductForm',
    props: ['product'],
    methods: {
        submitForm() {
            this.$formkit.submit('edit-product-form')
        },
        submitToServer(data) {
            const item = {
                ...data, 
                id: this.$props.product._id
            }
            API.updateProduct(item);
            // console.log('ID', typeof this.$props.product._id)
            console.log('form data', item)
        }
    }
}
</script>

<template>
    <!-- <h4>{{product}}</h4> -->
    <FormKit
        type="form"
        id="edit-product-form"
        :value="{
            name: product.name,
            code: product.code,
            weight: product.code,
            price: product.price,
            color: product.color,
        }"
        @submit="submitToServer"
        :actions="false"
    >
        <FormKit 
            type="text"
            name="name"
            placeholder="Product name"
            validation="required"
        />
        <FormKit 
            type="number"
            name="code"
            placeholder="Code"
            validation="required"
        />
        <FormKit 
            type="number"
            name="weight"
            placeholder="Weight"
            validation="required"
        />
        <FormKit 
            type="number"
            name="price"
            placeholder="Price"
            validation="required"
        />
        <FormKit 
            type="text"
            name="color"
            placeholder="Color"
            validation="required"
        />
        <FormKit 
            type="radio"
            name="isDeleted"
            label="Is deleted"
            :options="{
                true: 'True',
                false: 'False'
            }"
        />
        
    </FormKit>
    <button 
        type="button" 
        @click="submitForm" 
        class="btn btn-primary"
        data-bs-dismiss="modal"    
    > 
      Edit product
    </button>
</template>