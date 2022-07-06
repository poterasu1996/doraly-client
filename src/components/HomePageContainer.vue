<template>
    <div class="home-page">
        <h1>Doraly application</h1>
        <router-link to="/products" class="link">Product page &RightArrow;</router-link>
    </div>
</template>

<script>
export default {
    name: "HomePageContainer"
}
</script>

<style scoped>
.link {
    text-decoration: none;
}
.link:hover {
    color:red;
}
</style>
