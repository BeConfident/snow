<template>
    <v-container>
        <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover? 12 : 5" :color="item.color">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline" v-text="item.artist"></v-card-title>
                                <v-card-subtitle v-text="item.title"></v-card-subtitle>
                            </div>
                            <v-avatar class="ma-3" size="120" tile >
                                <v-img :src="item.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9"></v-col>
            <v-col cols="3">
                <v-btn bottom right block outlined color="primary" @click="paid">支付</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            items: [
                {
                    src: 'one.jpg',
                    title: '哈尔滨-亚布力',
                    artist: '¥800.0',
                },
            ],
        }),
        methods:{
            paid(){
                this.$router.push({
                    name: "paid"
                });
            }
        }
    }
</script>