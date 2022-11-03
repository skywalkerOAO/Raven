import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { Toast } from '@douyinfe/semi-ui';
import api_Path from '../../api/index';

class store {

    @observable WeiboHotList: Array<any> = []
    @observable ZhihuHotList: Array<any> = []
    @action.bound GetHot = async (params = {}) => {

        try {
            let res1 = await axios.post(api_Path.weibo_hot_services, params,
                {
                    headers: {
                        uuid: "gw00252316",
                        token: "5/B4fDC+Dxc6698ej6xvu/GLJKkb6iylfsKWCbH0icQ="
                    }
                })
            let res2 = await axios.get(api_Path.zhihu_hot_services, params)
            runInAction(() => {
                if (res1) {
                    let hot = res1.data.data
                    for (let i = 0; i < 10; i++) {
                        this.WeiboHotList.push(hot[i])
                    }
                }
                if (res2) {
                    let hot = res2.data.data
                    for (let i = 0; i < 10; i++) {
                        this.ZhihuHotList.push(hot[i])
                    }
                }
            })
        } catch (error) {

            Toast.info(`错误信息：${error}`)
        }
    }



}




export default new store()