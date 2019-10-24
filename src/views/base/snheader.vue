<template>
  <header class="sn-header">
    <div class="sn-header__title">
      <span class="sn-header__logo"></span>
      <span class="sn-header__head">梦马户外</span>
    </div>
    <div class="sn-header__btns">
      <i class="iconfont iconsoushuo sn-header__iconbtn" title="搜索"></i>
      <i class="iconfont iconzhibo sn-header__iconbtn" title="直播"></i>
      <i class="iconfont iconzhaopian sn-header__iconbtn" title="图片"></i>
      <Dropdown>
        <div class="sn-header__loginMsg">
          <Avatar icon="ios-person" class="sn-header__avatar"/>
          <Icon type="ios-arrow-down" size="20"></Icon>
        </div>
        <DropdownMenu slot="list">
          <DropdownItem>登录</DropdownItem>
          <DropdownItem>注册</DropdownItem>
          <DropdownItem divided>退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </header>
</template>
<script>
export default {
  name: 'snheader',
};
</script>
