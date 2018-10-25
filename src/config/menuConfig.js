const menuConfig = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: '设计',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/btn'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/load'
            },
            {
                title: '通知提醒',
                key: '/admin/ui/msg'
            },
            {
                title:'图片画廊',
                key:'/admin/ui/gallery'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '按钮',
                key: '/admin/form/btn'
            },
            {
                title: '弹框',
                key: '/admin/form/modals'
            },
            {
                title: 'Loading',
                key: '/admin/form/load'
            },
            {
                title: '通知提醒',
                key: '/admin/form/tong'
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '按钮',
                key: '/admin/table/btn'
            },
            {
                title: '弹框',
                key: '/admin/table/modals'
            },
            {
                title: 'Loading',
                key: '/admin/table/load'
            },
            {
                title: '通知提醒',
                key: '/admin/table/tong'
            }
        ]
    },
    {
        title: '富文本',
        key: '/admin/footer'
    },
    {
        title: '城市管理',
        key: '/admin/city'
    },
    {
        title: '地图管理',
        key: '/admin/map'
    },
    {
        title: '员工管理',
        key: '/admin/preson'
    },
    {
        title: '车辆地图',
        key: '/admin/car'
    },
    {
        title: '图标',
        key: '/admin/icon',
        children:[
            {
                title: '柱形图',
                key: '/admin/icon/zhu',
            },
            {
                title: '饼图',
                key: '/admin/icon/bing',
            },{
                title: '折线图',
                key: '/admin/icon/zhe',
            }
        ]
    },
    {
        title: '权限设置',
        key: '/admin/setting'
    }
]

export default menuConfig;