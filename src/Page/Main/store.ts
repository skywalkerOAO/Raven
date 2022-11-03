import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { Toast } from '@douyinfe/semi-ui';
import api_Path from '../../api/index';

const headercfg = {
    uuid: "gw00252316",
    token: "5/B4fDC+Dxc6698ej6xvu/GLJKkb6iylfsKWCbH0icQ="
}

class store {

    @observable WeiboHotList: Array<any> = []
    @observable ZhihuHotList: Array<any> = []



    @action.bound GetHot = async (params = {}) => {

        try {
            let res1 = await axios.post(api_Path.weibo_hot_services, params,
                {
                    headers: headercfg
                })
            let res2 = await axios.post(api_Path.zhihu_hot_services, params,
                {
                    headers: headercfg
                })
            runInAction(() => {
                if (res1) {
                    this.WeiboHotList = []
                    let hot = res1.data.data
                    for (let i = 0; i < 10; i++) {
                        this.WeiboHotList.push(hot[i])
                    }
                }
                if (res2) {
                    this.ZhihuHotList = []
                    let hot = res2.data.data
                    let hotlen = 0
                    hot.length < 10 ? hotlen = hot.length : hotlen = 10
                    for (let i = 0; i < hotlen; i++) {
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