<template>
    <div class="container-fluid text-center">
        <div class="page403">
            <h1>403 PAGE</h1>
            <p id="credit">
                Quay về
                <a href="/">Trang chủ</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NoPermission',
        data() {
            return {}
        },
        mounted() {
            document.title = '403 Page'
        }
    }
</script>
