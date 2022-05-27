<template>
    <section class="container">
        <slot></slot>
    </section>
</template>
<style lang="scss">
.container {
    max-width: var(--max-width);
    width: var(--fluid-width);
    margin: 0 auto;
}
</style>