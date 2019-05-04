<script>
  export default {
    computed: {
      previewUrl() {
        return 'https://raw.githubusercontent.com/EvanLiu2968/clover/master/cdn/images/upload.jpg'
      }
    },
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
<style lang="scss">
  .demo-box.demo-upload {
    .upload {
      margin-right: 50px;
      &:last-child{
        margin-right: 0;
      }
    }
    .img-preview {
      width: 150px;
      height: auto;
    }
  }
</style>

## Upload 上传

上传控件

主流开源上传组件均采用[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)上传，只支持IE10+;

因此该组件重点在于兼容IE9，在ie9模式下使用表单控件上传，并将target指向iframe达到无刷新上传。

注：如无兼容IE9需求，建议采用其他主流上传组件，功能及测试会更加完善。

### 基本用法

组件只是一个容器。

::: demo upload 组件一般只需设置`action`和`name`属性，请求类型为POST。
```html
<template>
  <v-upload
    class="upload"
    action='/api/upload'
    :multiple='true'
    name='file'><button type="button">点击上传</button></v-upload>
  <v-upload
    class="upload"
    action='/api/upload'
    type='img'><img class="img-preview" :src="previewUrl"></v-upload>
</template>
```
:::



### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| action | 上传地址 | string | — | — |
| params | query 参数 | Object | — | {} |
| name | FormData name | string | — | file |
| multiple | 多选上传 | Boolean | — | false |
| fileNumLimit | 多选上传最大数量 | Number | — | 10 |
| fileSingleSizeLimit | 单文件最大上传大小(M) | Number | — | 10 |
| headers | headers | Object | - | {} |
| type | 上传文件类型 | string | "img", "excel", "pdf", "rar" | - |
| auto | 自动上传 | Boolean | - | true |

### Events
| 事件名      | 说明              | 参数        |
|----------- |------------------- |------------ |
| uploadSuccess | 上传成功 | res, files[list] |
| uploadProgress | 上传进度 | percent |
| error | logo宽度 | 错误 | message |
