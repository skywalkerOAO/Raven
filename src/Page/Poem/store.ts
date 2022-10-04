import { observable, action, runInAction } from 'mobx'
import axios from 'axios'
import { Toast } from '@douyinfe/semi-ui';
import api_Path from '../../api/index';



class store {
    @observable HotBookList: any = []
    @observable SearchList: any = []
    @observable ChapterList: any = []
    @action.bound GetHot = async (params = {}) => {

        interface BookList {
            Author: string
            CName: string
            CloudList: Array<any>
            Desc: string
            Id: number
            Img: string
            Name: string
            Score: number
        }

        interface HotData {
            BookList: BookList
        }

        interface HotStruct {
            data: HotData
            HasNext: boolean
            Page: number
        }

        try {
            let res = await axios.get(api_Path.top_week_services, params)
            runInAction(() => {
                if (res) {
                    let hot: HotStruct = res.data
                    this.HotBookList = hot.data.BookList
                    return
                }
            })
        } catch (error) {

            Toast.info(`错误信息：${error}`)
        }
    }
    @action.bound GetBook = async (params: string) => {
        interface SearchData {

            Id: string,
            Name: string,
            Author: string,
            Img: string,
            Desc: string,
            BookStatus: string,
            LastChapterId: string,
            LastChapter: string,
            CName: string,
            UpdateTime: string,
            weekHitCount: string,
            monthHitCount: string,
            hitCount: string

        }
        interface SearchSturct {
            data: SearchData
            info: string
            status: number
        }
        try {
            let res = await axios.get(`/novel/novelSearch/search.aspx?key=${params}&page=1&siteid=app2&appid=iosbqg`,)
            runInAction(() => {
                if (res) {
                    let Result: SearchSturct = res.data
                    this.SearchList = Result.data
                    //this.TableData = data
                    return
                }
            })
        } catch (error) {

            Toast.info(`错误信息：${error}`)
        }
    }


    @action.bound GetChapterList = async (params: number, params2: number) => {

        try {
            let res = await axios.get(`/novel/chapterList/BookFiles/Html/${params}/${params2}/index.html`)
            runInAction(() => {
                if (res) {
                    let buffer = res.data;
                    buffer = res.data.replace(/,]/g, "]");
                    buffer = JSON.parse(buffer);
                    let UNFLUSH_LIST = buffer.data.list
                    let FLUSHED_LIST = [];
                    for (let i = 0; i < UNFLUSH_LIST.length; i++) {
                        for (let j = 0; j < UNFLUSH_LIST[i].list.length; j++) {
                            FLUSHED_LIST.push(UNFLUSH_LIST[i].list[j]);
                        }
                    }
                    this.ChapterList = FLUSHED_LIST; //  章节列表
                    return
                }
            })
        } catch (error) {

            Toast.info(`错误信息：${error}`)
        }
    }


}




export default new store()