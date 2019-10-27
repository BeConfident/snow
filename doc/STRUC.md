# 设计架构

## 一、静态页面


| 序号 | 页名 | 备注 |
| ----- | ---- | ---- |
| 1 | login | 登陆页，微信扫码 |
| 2 | index | 主页，攻略列表 |
| 3 | detail | 攻略详情 |
| 4 | pay | 支付页面 |
| 5 | pay_success | 支付成功页面 |
| 6 | mine | 个人详情页 |
| 7 | order | 订单页 |

## 二、接口

| 序号 | 接口地址 | 作用 |
| ----- | ---- | ---- |
| 1 | /login/index | 跳转到登陆页面 |
| 2 | /strategy/index | 跳转到主页,查询攻略列表 |
| 3 | /strategy/detail?id=${id} | 跳转到详情页，查询攻略详情 |
| 4 | /pay/index?id=${id} | 跳转支付页面 |
| 5 | /pay/success | 跳转到支付成功页面 |
| 6 | /mine/index | 跳转到个人详情页 |
| 7 | /mine/order | 跳转到订单页 |
