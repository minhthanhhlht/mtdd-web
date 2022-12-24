<template>
   <el-footer class="footer">
        <div>
            Copyright @ 2022 By MTDD
            <a href="https://minhthanhhlht.com/">Website</a>
        </div>
    </el-footer>
</template>

<script>

export default {
    name: "Footer"
}


</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: fixed;
    background-color: transparent !important;
    color: var(--el-text-color-secondary);
    a {
        color: var(--el-text-color-secondary);
    }
}
</style>