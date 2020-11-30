<template>
  <div>
     <div id="nine-block">
        <div class="block-one">
            <dl>
                <dt>购物指南</dt>
                <dd>
                    <a href="#">购物流程</a>
                </dd>
                <dd>
                    <a href="#">会员介绍</a>
                </dd>
                <dd>
                    <a href="#">生活旅行/团购</a>
                </dd>
                <dd>
                    <a href="#">常见问题</a>
                </dd>
                <dd>
                    <a href="#">购物指南</a>
                </dd>
            </dl>
            <dl>
                <dt>配送方式</dt>
                <dd>
                    <a href="#">上门自提</a>
                </dd>
                <dd>
                    <a href="#">211限时达</a>
                </dd>
                <dd>
                    <a href="#">配送服务查询</a>
                </dd>
                <dd>
                    <a href="#">配送费收取标准</a>
                </dd>
                <dd>
                    <a href="#">海外配送</a>
                </dd>
            </dl>
            <dl>
                <dt>支付方式</dt>
                <dd>
                    <a href="#">货到付款</a>
                </dd>
                <dd>
                    <a href="#">在线支付</a>
                </dd>
                <dd>
                    <a href="#">分期付款</a>
                </dd>
                <dd>
                    <a href="#">邮局汇款</a>
                </dd>
                <dd>
                    <a href="#">公司转账</a>
                </dd>
            </dl>
            <dl>
                <dt>售后服务</dt>
                <dd>
                    <a href="#">售后政策</a>
                </dd>
                <dd>
                    <a href="#">价格保护</a>

                </dd>
                <dd>
                    <a href="#">退款说明</a>
                </dd>
                <dd>
                    <a href="#">返修/退换货</a>
                </dd>
                <dd>
                    <a href="#">取消订单</a>
                </dd>
            </dl>
            <dl>
                <dt>特色服务</dt>
                <dd>
                    <a href="#">夺宝岛</a>
                </dd>
                <dd>
                    <a href="#">DIY装机</a>
                </dd>
                <dd>
                    <a href="#">延保服务</a>
                </dd>
                <dd>
                    <a href="#">尚品汇E卡</a>
                </dd>
                <dd>
                    <a href="#">尚品汇通信</a>
                </dd>
            </dl>
            <dl class="nine-pic">
                <dt>帮助中心</dt>
                <dd>
                    <img src="./images/wx_cz.jpg" alt="">
                </dd>
            </dl>
        </div>
        <div class="footer">
            <div>
                <a href="#">关于我们</a>
                |
                <a href="#">联系我们</a>
                |
                <a href="#">关于我们</a>
                |
                <a href="#">商家入驻</a>
                |
                <a href="#">营销中心</a>
                |
                <a href="#">友情链接</a>
                |
                <a href="#">关于我们</a>
                |
                <a href="#">营销中心</a>
                |
                <a href="#">友情链接</a>
                |
                <a href="#">关于我们</a>
            </div>
            <div>
                地址：北京市昌平区宏福科技园综合楼6层
            </div>
            <div>
                京ICP备19006430号
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="less" scoped>
#nine-block{
    width: 100%;
    min-width: 1200px;
    background-color: #eaeaea;
}
#nine-block .block-one{
    padding: 20px;
    border-bottom: 1px solid #e4e1e1;
    border-top: 1px solid #e4e1e1;
    margin: 0 auto;
    width: 1140px;
    /* border: 1px solid pink; */
    font-size: 0px;
    border-bottom: 1px solid #e4e1e1;
}

#nine-block .block-one dl,dd,dt{
    margin: 0;
    padding: 0;
}
#nine-block .block-one dl{
    display: inline-block;
    width: 190px;
    /* border: 1px solid green; */
    font-size: 12px;
}
#nine-block .block-one dl dt{
    font-size: 14px;
    font-weight: bold;
}
#nine-block .block-one dt,dd{
    height:18px;
    line-height:18px;
}
#nine-block .block-one a{
    color:#333;
    text-decoration: none;
}
#nine-block .block-one a:hover{
    text-decoration: underline;
}
#nine-block .block-one .nine-pic{
    height: 160px;
    vertical-align: top;
}
#nine-block .block-one .nine-pic dd{
    height:120px;
    line-height: 120px;
}
#nine-block .block-one .nine-pic dd img{
    width: 120px;
    vertical-align: middle;
}
#nine-block .footer{
    padding: 20px;
    background-color:#eaeaea;
    text-align:center;
}
#nine-block .footer div{
    font-size:12px;
    height:30px;
}
#nine-block .footer div a{
    margin-left: 10px;
    margin-right: 8px;
    text-decoration: none;
    color:#333;
}

</style>
