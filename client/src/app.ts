import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'

import './app.scss'

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'record-6g7ed0bb2d46f443',
        traceUser: true,
      })
    }

    Taro.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          Taro.authorize({
            scope: 'scope.userInfo',
            success: function () {
              // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
              Taro.getUserInfo({
                success:function(e){
                  console.log(e); 
                }
              })
            }
          })
        }
      }
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
