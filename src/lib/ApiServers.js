import request from '../utils/AxiosSetting'

export default {
    login(data) {
        return request.post(`/190901/login4`, data)
    },

    getShowTitleData() {
        return request.get(`/190901/showtitlev4?project=P200320121679722`)
    },

    getMonitorData() {
        return request.get(`/190901/monitor?project=P200320121679722`)
    },

    getFloorData() {
        return request.get(`/190901/floorv4?project=P200320121679722`)
    },

    getInfoData() {
        return request.get(`/190901/info?project=P200320121679722&value=2&u_id=admin`)
    },

    getFloorDetailData() {
        return request.get(`/190901/infov4?project=P200320121679722&f_id=0`)
    },

    getChartsListData() {
        return request.get(`/190901/infov4?project=P200320121679722`)
    }
}
