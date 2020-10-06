<template>
    <div class="app"> 
        <base-tree :data="data"/>
    </div>
</template>

<script>
import BaseTree from "./Tree"
export default {
    components: {
        BaseTree
    },
    data() {
        return {
            data:[
                {
                    lable:'一级 1',
                    children:[{
                        lable: '二级 1-1',
                        children: [{
                            lable: '三级 1-1-1'
                        }]
                    }]
                },
                {
                    lable:'一级 2',
                    children: [{
                        lable: '二级 2-1',
                        children: [{
                            lable: '三级 2-1-1'
                        }]},
                        {
                        lable: '二级 2-2',
                        children: [{
                            lable: '三级 2-3-1'
                        }]}]
                },
                {
                    lable:'一级 3',
                    children:[
                        {
                            lable: '二级 3-1',
                        },
                        {
                            lable: '二级 3-2',
                            children: [
                                {
                                    lable: '三级 3-2-1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>