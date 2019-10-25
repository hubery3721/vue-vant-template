<template>
    <div>
        <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
            <div slot="tags">
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
            </div>
            <div slot="footer">
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </div>
        </van-card>

        <van-cell-group class="user-group">
            <van-cell icon="records" title="全部订单" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell icon="points" title="我的积分" is-link />
            <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
    </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    }
};
</script>

<style lang="scss">
.user {
    &-poster {
        width: 100%;
        height: 53vw;
        display: block;
    }

    &-group {
        margin-bottom: 15px;
    }

    &-links {
        padding: 15px 0;
        font-size: 24px;
        text-align: center;
        background-color: #fff;

        .van-icon {
            display: block;
            font-size: 48px;
        }
    }
}
</style>