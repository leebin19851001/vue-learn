<template>
    <ul class="tree">
        <li
            v-for="(node, index) in data"
            :key="node[defaultProps.lable]"
             class="tree-node">
            <i 
                v-if="node[defaultProps.children]"
                class="iconfont"
                :class="{
                    'icon-down': !showChildren[index],
                    'icon-right': showChildren[index]
                }"
                ></i>
            <span @click="handleClick(index)" class="node-label">{{ node[defaultProps.lable] }}</span>
            <keep-alive>
                <base-tree 
                    v-if = 'showChildren[index] && node[defaultProps.children]'
                    :data="node[defaultProps.children]" />
            </keep-alive>
        </li>
    </ul>
</template>

<script>
export default {
    name: "base-tree",
    props: {
        data: {
            type: Array,
            required: true
        },
        defaultProps: {
            type: Object,
            default: () => ({
                lable: 'lable',
                children: 'children'
            })
            
        }
    },
    data () {
        return {
            showChildren: []
        }
    },
    mounted() {
        console.log(this.data)
    },
    methods: {
        handleClick (index) {
            const flag = !this.showChildren[index];
            this.$set(this.showChildren, index, flag);
        }
    }
}
</script>

<style scoped>
@import './assets/font.css';

li {
    list-style: none;
}

.tree-node {
    font-size: 14px;
    cursor: pointer;
}

.tree-node .iconfont {
    color: #c0c4cc;
    font-size: 12px;
    margin-right: 5px;
    vertical-align: middle;
}
.tree-node .node-label {
    color: #626066;
    font-size: 14px;
    vertical-align: middle;
}
</style>