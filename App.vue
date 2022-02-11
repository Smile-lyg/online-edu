<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import  '@/common/global.css';
  @import '@/common/common.css';
  // 动画库
  @import '@/common/animate.min.css';
  // 自定义字体图标
  // @import '@/common/iconfont.css';
  @import url('//at.alicdn.com/t/font_3175154_wubql7ll6rj.css');
  
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #fff;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
