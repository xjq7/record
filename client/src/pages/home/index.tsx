import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

import Login from '../../components/login/index'

export default function Index(){
  return (
    <View className='index'>
      <Text>111</Text>
        <Login />
        <Button openType='getUserInfo' onClick={(e)=>{
          console.log(e.detail);
          
          Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
             console.log(res);
             
            }}
            )
        }}
        >222</Button>
    </View>
  )
}