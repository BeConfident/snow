<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover? 12 : 2">
                        <v-card-title class="justify-center green--text">支付成功</v-card-title>
                        <v-card-actions class="justify-center">
                            <v-btn text class="blue--text">查看我的订单</v-btn>
                            <v-btn text class="blue--text" @click="toHome">返回主页</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
        }),
        methods:{
            toHome(){
                this.$router.push({
                    name: "home"
                });
            }
        }
    }
</script>