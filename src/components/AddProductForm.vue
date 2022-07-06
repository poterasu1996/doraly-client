<script>
import { API } from '@/api/CRUD'; 

export default {
    name: 'AddProductForm',
    methods: {
        submitForm() {
            this.$formkit.submit('add-product-form')
        },
        submitToServer(data) {
            API.addProduct(data);
            console.log('form data', data)
        }
    }
}
</script>

<template>
    <FormKit
        type="form"
        id="add-product-form"
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
            value="false"
            :options="{
                true: 'True',
                false: 'False'
            }"
        />
        <!-- <FormKit 
            type="submit"
            label="Add product"
        /> -->
        
    </FormKit>
    <button 
        type="button" 
        @click="submitForm" 
        class="btn btn-primary"
        data-bs-dismiss="modal"    
    > 
      Add product
    </button>
</template>