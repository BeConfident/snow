<template>
    <v-img src="one.jpg" class="pa-md-12 fill-height">
        <v-row class="white--text">
            <v-col>
                <p class="display-2">冰雪旅游</p>
                <p>
                    水晶室女是一名强大的支援型施法者。她的所有攻击法术都可以在某种程度上削弱敌人，冰霜新星可以对所有范围内的敌人造成可观的伤害，冰封禁制则可以让单一敌人瞬间瘫痪，极寒领域可以降低范围内所有单位的移动速度，同时造成巨大伤害，但水晶室女脆弱的体质让这项技能使用起来并不是那么顺手，对队伍最有用的辅助技能则是奥术光环可以极大地加快所有队友的法力恢复速度，无论距离有多远。
                </p>
            </v-col>
            <v-col>
                <v-hover v-slot:default="{ hover }">
                    <v-card color="white" class="pa-5 pt-1" :elevation="hover? 12 : 0">
                        <v-card-title>手机号登陆</v-card-title>
                        <v-card-actions>
                            <v-text-field label="手机号"  outlined></v-text-field>
                        </v-card-actions>
                        <v-card-actions>
                            <v-text-field label="密码" outlined type="password"></v-text-field>
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn large block color="primary" @click="doLogin">登陆</v-btn>
                        </v-card-actions>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text color="green">注册</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>

            </v-col>
        </v-row>
    </v-img>

</template>

<script>
    export default {
        name: "login",
        methods:{
            doLogin(){
                this.$router.push({
                    name: "home"
                });
            },
        },
    }
</script>

