<template>
  <div class="page-header navbar">
    <div class="page-header-inner">
      <div class="page-logo">
        <a class="nav-item" href="/">
          <img class="logo-default" src="../../assets/img/logo.png" height="40" alt="">
        </a>
        <div class="menu-toggler sidebar-toggler hide">

        </div>
      </div>
      <a class="menu-toggler responsive-toggler" v-on:click="toggleSidebar(!sidebar.opened)">
        <i class="fa fa-align-justify"></i>
      </a>
      <!--navigation menu-->
      <!--demo 示例-->
      <div class="top-menu">
        <ul class="nav navbar-nav pull-right">
          <!--通知-->
          <li class="dropdown dropdown-extended dropdown-notification" v-on:mouseenter="openNotify = !openNotify" v-on:mouseleave="openNotify = !openNotify" v-bind:class="{ open: openNotify }">
            <a href="javascript:;" class="dropdown-toggle">
              <i class="fa fa-bell-o"></i>
              <span class="badge badge-default">
                7
              </span>
            </a>
            <!--dropdown-->
            <ul class="dropdown-menu">
              <li class="external">
                <h3>
                  <span class="bold">12 未读</span>通知
                </h3>
                <a href="###">查看全部</a>
              </li>
              <li >
                <ul class="dropdown-menu-list scroll">
                  	<li>
									<a href="javascript:;">
									<span class="time">12:00:00</span>
									<span class="details">
									<span class="label label-sm label-icon label-success">
									<i class="fa fa-plus"></i>
									</span>
									新用户注册 </span>
									</a>
								</li>
								<li>
									<a href="javascript:;">
									<span class="time">11:11:11</span>
									<span class="details">
									<span class="label label-sm label-icon label-danger">
									<i class="fa fa-bolt"></i>
									</span>
								   服务器重载</span>
									</a>
								</li>
                </ul>
              </li>
            </ul>
          </li>

          <!--任务-->
          <li class="dropdown dropdown-extended dropdown-tasks" v-on:mouseenter="openTasks = !openTasks" v-on:mouseleave="openTasks = !openTasks" v-bind:class="{ open: openTasks }">
            <a href="javascript:;" class="dropdown-toggle">
              <i class="fa fa-calendar"></i>
              <span class="badge badge-default">
                3
              </span>
            </a>
            <ul class="dropdown-menu extended tasks">
              <li class="external">
                <h3>你有<span class="bold">3未完成个</span>任务</h3>
                <a href="###">查看全部</a>
              </li>
              <li>
                <ul class="dropdown-menu-list scroller">
                    <li>
                    <a href="javascript:;">
                    <span class="task">
                    <span class="desc">开发进度</span>
                    <span class="percent">30%</span>
                    </span>
                    <span class="progress">
                    <span style="width: 40%;" class="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"><span class="sr-only">40% 完成</span></span>
                    </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                    <span class="task">
                    <span class="desc">提测进度</span>
                    <span class="percent">65%</span>
                    </span>
                    <span class="progress">
                    <span style="width: 65%;" class="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"><span class="sr-only">65% 完成</span></span>
                    </span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                    <span class="task">
                    <span class="desc">发布进度</span>
                    <span class="percent">98%</span>
                    </span>
                    <span class="progress">
                    <span style="width: 98%;" class="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"><span class="sr-only">98% 完成</span></span>
                    </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>


          </li>

          <!--用户-->
      <li class="dropdown  dropdown-extended dropdown-user"  v-on:mouseenter="openUsers = !openUsers" v-on:mouseleave="openUsers = !openUsers" v-bind:class="{ 'open': openUsers,'hide': noLogin }">
					<a class="dropdown-toggle">
					<img alt="" class="img-circle" :src="this.userAvatar"/>
					<span class="username username-hide-on-mobile">
          {{userName}}
          </span>
					<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-menu-default">
						<li>
							<a href="javascript:;">
							<i class="fa fa-user"></i> 我的项目 </a>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-calendar"></i> 我的日历 </a>
						</li>
						<li class="divider">
						</li>
						<li>
							<a href="javascript:;" @click="logout">
							<i class="fa fa-key" ></i> 登出 </a>
						</li>
					</ul>
				</li>
        <!--登出-->
        <li class="dropdown dropdown-quick-sidebar-toggler"  :class="{'hide': noLogin }" @click="logout">
					<a href="javascript:;" class="dropdown-toggle">
					<i class="fa fa-sign-out"></i>
					</a>
				</li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'headerlayout',
    data () {
      return {
        openNotify: false,
        openTasks: false,
        openUsers: false,
        isIn: false,
        userAvatar: '../../static/img/avatar.png',
        userName: '',
        noLogin: true
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      ...mapActions([
        'toggleSidebar'
      ]),
      toggler () {
        this.isIn = !this.isIn
        this.$emit('is-in', this.isIn)
      },
      logout () {
        const _this = this
        this.$confirm('确认退出么？', '提示', {
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user')
          _this.$router.push('/login')
        }).catch((e) => {
          console.log(e)
        })
      }
    },
    watch: {
      $route: 'toggler'
    },
    mounted () {
      let user = sessionStorage.getItem('user')
      user = !!user
      if (user) {
        this.noLogin = false
        user = JSON.parse(user)
        this.userName = user.name || 'admin'
        this.userAvatar = user.avatar
      }
    }
  }
</script>
<style lang="scss">
  .hide {
    display: none!important;
  }
</style>
