<template>
    <main class="main">
        <nav>
            <TheLogo />
        </nav>
        <BaseContainer class="page">
            <a-row class="row" type="flex" align="middle" justify="center">
                <a-col :span="12">
                    <div class="info">
                        <h1>
                            Job <span>Tracking</span> App
                        </h1>
                        <p>
                            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin
                            coffee chia.
                            Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1
                            brunch
                            narwhal.
                        </p>
                        <BaseButtonLink toLink="/auth" />
                    </div>
                </a-col>
                <a-col :span="12">
                    <img src="@/assets/images/main.svg" alt="landing" class="main-img">
                </a-col>
            </a-row>
        </BaseContainer>

    </main>
</template>

<script lang="ts" setup >
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TheLogo from '@/components/UI/TheLogo.vue';

</script>

<style lang="scss" scoped >
nav {
    width: var(--fluid-width);
    max-width: var(--max-wdith);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;

}

.row {
    width: 100%;
}

.page {
    min-height: calc(100vh - var(--nav-height));
    margin-top: -3rem;
    display: grid;
    place-items: center;

    .info {
        h1 {
            font-weight: 700;
            margin-top: 0;

            span {
                color: var(--primary-500);
            }
        }

        p {
            color: var(--grey-500);
            margin-bottom: 1.5rem;
            max-width: 40em;
        }
    }
}

.main-img {
    display: block;
    object-fit: cover;
    width: 100%;
}
</style>