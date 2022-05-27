<template>
    <BaseContainer class="main">

        <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
            class="form" @finish="onFinish" @finishFailed="onFinishFailed">
            <TheLogo class="icon" />
            <a-typography-title level="2">
                Login
            </a-typography-title>
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password" />
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 24 }">
                <a-button type="primary" html-type="submit" block>Submit</a-button>
            </a-form-item>
        </a-form>
    </BaseContainer>

</template>

<script lang="ts" setup>
import { reactive } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TheLogo from '@/components/UI/TheLogo.vue';

interface IUserLogin {
    username: string;
    password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formState: IUserLogin = reactive({
    username: '',
    password: '',
})

const onFinish = (values: any) => {
    console.log('Success', values)
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
}


</script>

<style lang="scss">
.main {
    display: grid;
    place-items: center;
    min-height: 100vh;

    .form {
        max-width: 400px;
        border-top: 5px solid var(--primary-500);
        width: 90vw;
        box-shadow: var(--shadow-2);
        padding: 2rem 2.5rem;

        .icon {
            display: block;
            margin: 0px auto 1.38rem
        }

        h1 {
            text-align: center;
        }
    }
}
</style>