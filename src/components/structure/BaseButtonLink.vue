<template>
    <a-button type="primary">
        <router-link :to="toLink">
            Login/Register
        </router-link>
    </a-button>
</template>

<script lang="ts" setup>

interface IBaseButtonLinkProps {
    toLink: string;
}

// eslint-disable-next-line no-undef
defineProps<IBaseButtonLinkProps>()

</script>

<style lang="scss">
.ant-btn-primary {
    background: var(--primary-500);
    border-color: var(--primary-500);

    &:hover {
        background: var(--primary-700);
        box-shadow: var(--shadow-3);
    }
}
</style>