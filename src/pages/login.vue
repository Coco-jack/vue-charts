<template>
    <div class="login_box">
        <div class="login_container">
            <div class="login_title">
                <p class="login_company">BillDaZy</p>
                <p class="login_subtitle">As you imagine</p>
            </div>
            <div class="login_form">
                <el-input
                    type="text"
                    placeholder="项目名称"
                    v-model="projectName"
                    maxlength="10"
                    show-word-limit
                >
                    <template slot="prepend">项目名称</template>
                </el-input>
                <el-input
                    type="text"
                    placeholder="账号"
                    v-model="userName"
                    maxlength="10"
                    show-word-limit
                >
                    <template slot="prepend">账&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号</template>
                </el-input>
                <el-input
                    type="password"
                    placeholder="密码"
                    v-model="password"
                >
                    <template slot="prepend">密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码</template>
                </el-input>
                <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import ApiServers from '../lib/ApiServers'

export default {
    name: "login",
    data() {
        return {
            userName: 'admin',
            password: '12345678',
            projectName: '智慧大棚',
        }
    },
    methods: {
        login() {
            let params = {
                username: this.userName,
                password: this.password
            }
            if (!this.userName || !this.password || !this.projectName) {
                this.$message({
                    showClose: true,
                    message: '请输入正确的内容',
                    type: 'error',
                })
            } else {
                let params = {
                    'project': this.projectName,
                    'u_id': this.userName,
                    'passwd': this.password,
                }
                ApiServers.login().then(res => {
                    this.$router.push('/charts')
                })
            }
        }
    }
}
</script>

<style scoped>
.login_box {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/images/loginBackground.png") no-repeat;
    background-size: 100% 100%;
}

.login_container {
    width: 65vw;
    height: 35vh;
    display: flex;
}

.login_title {
    width: 50%;
    font-size: .32rem;
    color: #ffffff;
    background: #232733;
}

.login_company {
    text-align: left;
    margin: 1rem 0 0 .2rem;
}

.login_subtitle {
    font-size: .24rem;
    text-align: left;
    margin: .5rem 0 0 1rem;
}

.login_form {
    width: 50%;
    padding: .5rem .3rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>
