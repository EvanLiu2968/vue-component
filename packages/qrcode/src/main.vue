<template>
  <canvas :class="className" ref="node" />
</template>

<script type="text/babel">
  import qrcode from 'qrcode'
  import merge from 'lodash/merge'
  // var toSJIS =  require('qrcode/helper/to-sjis')

  export const generateQRCode = function (text, options, canvas){
    options = merge({
      margin: 1,
      width: 200,
      scale: 4,
      color: {
        dark: '#000000ff', //6位颜色+2位明度，支持3位、4位、6位、8位
        light: '#ffffffff',
      },
      // toSJISFunc: toSJIS, // 汉字扩展
      // type: 'png',
      // rendererOpts: {
      //   quality: 0.3,
      //   width: 200,
      //   height: 200,
      // }
      // version: 7,                   // Calculated QR Code version (1 - 40) 版本越高点数越多越密，容纳数据越多
      errorCorrectionLevel: 'Q',       // Error Correction Level [choices: "L", "M", "Q", "H"]
      maskPattern: 4                   // Calculated Mask pattern (0 - 7)
    }, options)
    // 可用于浏览器端和node端
    return new Promise((resolve, reject) => {
      if(canvas){
        qrcode.toCanvas(canvas, text, options , function (err, data) {
          if(err){
            reject(err)
          }
          resolve(data)
        })
      }else{
        qrcode.toDataURL(text, options , function (err, data) {
          if(err){
            reject(err)
          }
          resolve(data) //return data:image/png;base64,...
        })
      }
    })
  }
  export default {
    name: 'VQrcode',

    props: {
      text: {
        type: String,
        default: '',
        required: true
      },
      logo: {
        type: String,
        default: '',
      },
      logoWidth: {
        type: Number,
        default: 40
      },
      width: {
        type: Number,
        default: 200
      },
      color: {
        type: String,
        default: '#000000ff'
      },
      bgColor: {
        type: String,
        default: '#ffffffff'
      },
      margin: {
        type: Number,
        default: 1
      },
      scale: {
        type: Number,
        default: 4
      },
      className: {
        type: String,
        default: 'qrcode'
      },
      errorCorrectionLevel: {
        type: String,
        default: 'Q'
      },
      maskPattern: {
        type: Number,
        default: 4
      },
    },

    data() {
      return {};
    },

    methods: {
      work() {
        generateQRCode(this._props.text, merge({}, this._props, {
          color: {
            dark: this._props.color,
            light: this._props.bgColor,
          }
        }), this.$refs.node).then((src)=>{
          // this.node.src = src;
          if(this._props.logo){
            let img = new Image();
            img.src = this._props.logo;
            if (img.complete) {
              this.loadedHandle(img)
              return;
            }
            img.onload = ()=> {
              this.loadedHandle(img)
            };
          }
        })
      },
      loadedHandle(img) {
        const { width, logoWidth } = this._props;
        const cxt=this.$refs.node.getContext("2d");
        const halfWidth = (width-logoWidth)/2;
        cxt.drawImage(img,0,0,img.width,img.height,halfWidth,halfWidth,logoWidth,logoWidth);
      }
    },

    mounted(){
      this.work()
    },
    updated(){
      this.work()
    }
  };
</script>
