<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>
        <van-row>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row>

        <van-row>
            <van-col span="4">span: 4</van-col>
            <van-col span="10" offset="4">offset: 4, span: 10</van-col>
        </van-row>

        <van-row>
            <van-col offset="12" span="12">offset: 12, span: 12</van-col>
        </van-row>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        // HelloWorld
    },
    data() {
        return {
            username: "灿哥",
            email: "2888@gmail.com",
            active: "tab-container1"
        };
    },
    created() {
        this.$api.article
            .articleDetail(3, {
                api: 123
            })
            .then(res => {
                console.log("success");
                // 执行某些操作
            });
    },
    methods: {
        onLoad(id) {}
    }
};
</script>
