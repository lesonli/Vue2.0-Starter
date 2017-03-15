export const menus = [{
    name: "我的课程",
    routerName: "course"
}, {
    name: '我的作业',
    routerName: "taskAndHomework",
    query: { subMenu: 'homework' }
}, {
    name: '我的任务',
    routerName: "taskAndHomework",
    query: { subMenu: 'task' }
}, {
    name: '我的研讨',
    routerName: "discuss"
}, {
    name: '我的成绩',
    routerName: "score"
}, {
    name: '我的资料',
    routerName: "download"
}, {
    name: '我的消息',
    routerName: "message"
}];

export const ossHost = 'http://dscj-app.oss-cn-qingdao.aliyuncs.com/';
