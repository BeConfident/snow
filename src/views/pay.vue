<template>
    <v-container>
        <v-row dense>
            <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
            >
                <v-card
                        :color="item.color"
                        dark
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                                    class="headline"
                                    v-text="item.title"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                        </div>

                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            items: [
                {
                    color: 'primary',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: '哈尔滨-亚布力',
                    artist: '¥800.0',
                },
            ],
        }),
    }
</script>