// 用户所有权限
const allPermissions = {
  // 总包
  PLATFORM: [
    {
      name: '资产',
      type: 'menu',
      children: [
        {
          name: '车辆管理',
          path: '/vehicle-manage',
          key: 'VEHICLE_MANAGE',
          children: [
            {
              name: '车辆详情',
              type: 'menu',
              path: '/vehicle-manage/details',
              key: 'VEHICLE_MANAGE',
            },
            {
              name: '新增车辆',
              type: 'menu',
              path: '/vehicle-manage/add',
              key: 'VEHICLE_MANAGE',
            },
          ],
        },
        {
          name: '车队管理',
          path: '/vehicle-team-manage',
          key: 'VEHICLE_TEAM_MANAGE',
          children: [
            {
              name: '车队详情',
              type: 'menu',
              path: '/vehicle-team-manage/details',
              key: 'VEHICLE_TEAM_MANAGE',
            },
            {
              name: '新增车队',
              type: 'menu',
              path: '/vehicle-team-manage/add',
              key: 'VEHICLE_TEAM_MANAGE',
            },
          ],
        },
        {
          name: '服务站管理',
          path: '/service-station-manage',
          key: 'SERVICE_STATION_MANAGE',
          children: [
            {
              name: '服务站详情',
              type: 'menu',
              path: '/service-station-manage/details',
              key: 'SERVICE_STATION_MANAGE',
            },
            {
              name: '新增服务站',
              type: 'menu',
              path: '/service-station-manage/add',
              key: 'SERVICE_STATION_MANAGE',
            },
            {
              name: '编辑服务站',
              type: 'menu',
              path: '/service-station-manage/edit',
              key: 'SERVICE_STATION_MANAGE',
            },
          ],
        },
      ],
    },
    {
      name: '财务',
      type: 'menu',
      children: [
        {
          name: '账单',
          path: '/statement-manage',
          key: 'BILLING_VIEW',
          children: [
            {
              name: '账单列表',
              type: 'menu',
              path: '/statement-manage/bill-list',
              key: 'BILLING_VIEW',
            },
          ],
        },
      ],
    },
    {
      name: '系统',
      type: 'menu',
      children: [
        {
          name: '账号管理',
          path: '/user-manage',
          key: 'USER_MANAGE',
          children: [
            {
              name: '账号详情',
              type: 'menu',
              path: '/user-manage/details',
              key: 'USER_MANAGE',
            },
            {
              name: '新增账号',
              type: 'menu',
              path: '/user-manage/add',
              key: 'USER_MANAGE',
            },
            {
              name: '编辑账号',
              type: 'menu',
              path: '/user-manage/edit',
              key: 'USER_MANAGE',
            },
          ],
        },
        {
          name: '权限管理',
          path: '/permission-manage',
          key: 'PERMISSION_MANAGE',
          children: [
            {
              name: '权限详情',
              type: 'menu',
              path: '/permission-manage/details',
              key: 'PERMISSION_MANAGE',
            },
            {
              name: '新增权限',
              type: 'menu',
              path: '/permission-manage/add',
              key: 'PERMISSION_MANAGE',
            },
            {
              name: '编辑权限',
              type: 'menu',
              path: '/permission-manage/edit',
              key: 'PERMISSION_MANAGE',
            },
          ],
        },
        {
          name: '标签管理',
          path: '/phrase-manage',
          key: 'PHRASE_MANAGE',
          children: [
            {
              name: '标签管理详情',
              type: 'menu',
              path: '/phrase-manage/details',
              key: 'PHRASE_MANAGE',
            },
          ],
        },
        {
          name: '系统设置',
          path: '/system-setting',
          key: 'SYSTEM_SETTING',
          children: [
            {
              name: '系统设置',
              type: 'menu',
              path: '/system-setting/details',
              key: 'SYSTEM_SETTING',
            },
          ],
        },
        {
          name: '风控日志',
          path: '/risk-control-log',
          key: 'RISK_CONTROL_LOG',
          children: [
            {
              name: '风控日志',
              type: 'menu',
              path: '/risk-control-log/details',
              key: 'RISK_CONTROL_LOG',
            },
          ],
        },
      ],
    },
    {
      name: '数据',
      type: 'menu',
      children: [
        {
          name: '工时库',
          path: '/workinghour-manage',
          key: 'WORKINGHOUR_MANAGE',
          children: [
            {
              name: '工时库详情',
              type: 'menu',
              path: '/workinghour-manage/details',
              key: 'WORKINGHOUR_MANAGE',
            },
            {
              name: '新增工时库',
              type: 'menu',
              path: '/workinghour-manage/add',
              key: 'WORKINGHOUR_MANAGE',
            },
            {
              name: '编辑工时库',
              type: 'menu',
              path: '/workinghour-manage/edit',
              key: 'WORKINGHOUR_MANAGE',
            },
          ],
        },
        {
          name: '配件库',
          path: '/fitting-manage',
          key: 'FITTING_MANAGE',
          children: [
            {
              name: '配件库详情',
              type: 'menu',
              path: '/fitting-manage/details',
              key: 'FITTING_MANAGE',
            },
            {
              name: '新增配件库',
              type: 'menu',
              path: '/fitting-manage/add',
              key: 'FITTING_MANAGE',
            },
            {
              name: '编辑配件库',
              type: 'menu',
              path: '/fitting-manage/edit',
              key: 'FITTING_MANAGE',
            },
          ],
        },
        {
          name: '型号库',
          path: '/model-manage',
          key: 'FITTING_MODEL_MANAGE',
          children: [
            {
              name: '型号库详情',
              type: 'menu',
              path: '/model-manage/details',
              key: 'FITTING_MODEL_MANAGE',
            },
            {
              name: '新增型号库',
              type: 'menu',
              path: '/model-manage/add',
              key: 'FITTING_MODEL_MANAGE',
            },
            {
              name: '编辑型号库',
              type: 'menu',
              path: '/model-manage/edit',
              key: 'FITTING_MODEL_MANAGE',
            },
          ],
        },
        {
          name: '故障库',
          path: '/fault-manage',
          key: 'FAULT_MANAGE',
          children: [
            {
              name: '故障库详情',
              type: 'menu',
              path: '/fault-manage/details',
              key: 'FAULT_MANAGE',
            },
            {
              name: '新增故障库',
              type: 'menu',
              path: '/fault-manage/add',
              key: 'FAULT_MANAGE',
            },
            {
              name: '编辑故障库',
              type: 'menu',
              path: '/fault-manage/edit',
              key: 'FAULT_MANAGE',
            },
          ],
        },
      ],
    },
    {
      name: '维保',
      type: 'menu',
      children: [
        {
          name: '车辆维保',
          alias: '车辆维保(菜单)',
          type: 'menu',
          key: 'MAINT_MENUS',
          path: '/vehicle-maintenance/details',
        },
        {
          name: '新增/编辑/取消车辆维保',
          hidden: true, // 隐藏菜单
          key: 'MAINT_REQUEST',
          children: [
            {
              type: 'menu',
              path: '/vehicle-maintenance/addBehalfRepair',
              key: 'MAINT_REQUEST',
            },
            {
              type: 'menu',
              path: '/vehicle-maintenance/details',
              key: 'MAINT_REQUEST',
            },
            {
              type: 'menu',
              path: '/vehicle-maintenance/addDispatch',
              key: 'MAINT_REQUEST',
            },
          ],
        },
        {
          name: '转派',
          type: 'menu',
          hidden: true, // 隐藏菜单
          path: '/vehicle-maintenance/transfer',
          key: 'MAINT_ORDER_TRANSFER',
        },
        {
          name: '查看全部维保单',
          key: 'MAINT_ORDER_VIEW_ALL',
        },
        {
          name: '查看核准报价人信息',
          key: 'MAINT_ORDER_VIEW_APPROVED_USER',
        },
        {
          name: '派单',
          key: 'MAINT_ORDER_DISPATCH',
        },
        {
          name: '发起保外费用确认',
          key: 'MAINT_UNCOVERED_COST_INFORM_SUBMIT',
        },
        {
          name: '代录单',
          type: 'menu',
          hidden: true, // 隐藏菜单
          path: '/vehicle-maintenance/approve-quote',
          key: 'MAINT_ORDER_RECORD_DELEGATE',
        },
        {
          name: '核准报价',
          type: 'menu',
          hidden: true, // 隐藏菜单
          path: '/vehicle-maintenance/approve-quote',
          key: 'MAINT_ORDER_QUOTE_AUDIT',
        },
        {
          name: '作废',
          key: 'MAINT_ORDER_REVOKE',
        },
        {
          name: '校准里程',
          key: 'VEHICLE_MILEAGE_CALIBRATION',
        },
      ],
    },
  ],
  // 服务站
  STATION: [
    {
      name: '财务',
      type: 'menu',
      children: [
        {
          name: '账单',
          path: '/statement-manage',
          key: 'BILLING_VIEW',
          children: [
            {
              name: '账单列表',
              type: 'menu',
              path: '/statement-manage/bill-list',
              key: 'BILLING_VIEW',
            },
          ],
        },
      ],
    },
    {
      name: '系统',
      type: 'menu',
      children: [
        {
          name: '账号管理',
          path: '/user-manage',
          key: 'USER_MANAGE',
          children: [
            {
              name: '账号详情',
              type: 'menu',
              path: '/user-manage/details',
              key: 'USER_MANAGE',
            },
            {
              name: '新增账号',
              type: 'menu',
              path: '/user-manage/add',
              key: 'USER_MANAGE',
            },
            {
              name: '编辑账号',
              type: 'menu',
              path: '/user-manage/edit',
              key: 'USER_MANAGE',
            },
          ],
        },
        {
          name: '权限管理',
          path: '/permission-manage',
          key: 'PERMISSION_MANAGE',
          children: [
            {
              name: '权限详情',
              type: 'menu',
              path: '/permission-manage/details',
              key: 'PERMISSION_MANAGE',
            },
            {
              name: '新增权限',
              type: 'menu',
              path: '/permission-manage/add',
              key: 'PERMISSION_MANAGE',
            },
            {
              name: '编辑权限',
              type: 'menu',
              path: '/permission-manage/edit',
              key: 'PERMISSION_MANAGE',
            },
          ],
        },
      ],
    },
    {
      name: '维保',
      type: 'menu',
      children: [
        {
          name: '查看全部维保单',
          key: 'MAINT_ORDER_VIEW_ALL',
        },
        {
          name: '接单',
          key: 'MAINT_ORDER_RECEIVE',
        },
        {
          name: '分配员工',
          key: 'MAINT_ORDER_ASSIGN',
        },
        {
          name: '接车',
          key: 'MAINT_ORDER_CHECKIN',
        },
        {
          name: '录单',
          key: 'MAINT_ORDER_RECORD',
        },
        {
          name: '报价',
          key: 'MAINT_ORDER_QUOTE',
        },
      ],
    },
  ],
  // 车队
  VEHICLE_TEAM: [
    {
      name: '车队',
      type: 'menu',
      children: [
        {
          name: '车组管理',
          type: 'menu',
          path: '/vehicle-group-manage/details',
          key: 'VEHICLE_GROUP_MANAGE',
        },
      ],
    },
    {
      name: '系统',
      type: 'menu',
      children: [
        {
          name: '账号管理',
          path: '/user-manage',
          key: 'USER_MANAGE',

          children: [
            {
              name: '账号详情',
              type: 'menu',
              path: '/user-manage/details',
              key: 'USER_MANAGE',
            },
            {
              name: '新增账号',
              type: 'menu',
              path: '/user-manage/add',
              key: 'USER_MANAGE',
            },
            {
              name: '编辑账号',
              type: 'menu',
              path: '/user-manage/edit',
              key: 'USER_MANAGE',
            },
          ],
        },
        {
          name: '权限管理',
          path: '/permission-manage',
          key: 'PERMISSION_MANAGE',
          children: [
            {
              name: '权限详情',
              type: 'menu',
              path: '/permission-manage/details',
              key: 'PERMISSION_MANAGE',
            },
            {
              name: '新增权限',
              type: 'menu',
              path: '/permission-manage/add',
              key: 'PERMISSION_MANAGE',
            },
            {
              name: '编辑权限',
              type: 'menu',
              path: '/permission-manage/edit',
              key: 'PERMISSION_MANAGE',
            },
          ],
        },
      ],
    },
    {
      name: '维保',
      type: 'menu',
      children: [
        {
          name: '查看全部维保单',
          key: 'MAINT_ORDER_VIEW_ALL',
        },
        {
          name: '新增/编辑/取消车辆维保',
          key: 'MAINT_REQUEST',
        },
        {
          name: '审核保外费用',
          key: 'MAINT_UNCOVERED_COST_INFORM_AUDIT',
        },
      ],
    },
  ],
}

/**
 * @description: 获取用户的权限
 * @param {String} user 用户角色
 * @param {Array} permissionKeys 权限对应的key集合，不传则认为获取所有权限
 * @return {Object} 用户对应的路由权限和按钮权限
 */
export function getUsersPermissions(user, permissionKeys) {
  const usersAllPermissions = allPermissions[user] || []
  const copyUsersAllPermissions = JSON.parse(
    JSON.stringify(usersAllPermissions)
  )
  // 用户路由权限
  const routes = []
  // 用户按钮权限
  const actions = []

  // 获取所有叶子结点
  const getLeaf = (permissions) => {
    permissions.forEach((item) => {
      if (!item.children) {
        if (item.type === 'menu' && userHasPermission(item.key)) {
          routes.push(item)
        } else if (item.type === 'action' && userHasPermission(item.key)) {
          actions.push(item)
        }
      } else {
        getLeaf(item.children)
      }
    })
  }

  getLeaf(copyUsersAllPermissions)

  /**
   * @description: 判断用户是否具有某个权限
   * @param {String} permissionKey 权限key
   * @return {Boolean} 用户是否具有该权限
   */
  function userHasPermission(permissionKey) {
    return !permissionKeys || permissionKeys.includes(permissionKey)
  }

  return { routes, actions }
}

/**
 * @description: 获取用户所有菜单
 * @param {String} user 用户角色
 * @return {Array} 用户的所有菜单列表
 */
export function getAllMenus(user) {
  const usersAllPermissions = allPermissions[user] || []
  const usersAllMenus = usersAllPermissions.filter(
    (permission) => permission.type === 'menu'
  )
  return JSON.parse(JSON.stringify(usersAllMenus))
}

/**
 * @description: 获取用户对应的菜单
 * @param {String} user 用户角色
 * @param {Array} permissionKeys 权限对应的key集合
 * @param {Boolean} isMenu 是否只返回 menu 节点
 * @return {Array} 用户对应的菜单
 */
export function getUsersMenus(user, permissionKeys, isMenu = true) {
  const usersAllPermissions = allPermissions[user] || []
  const copyUsersAllPermissions = JSON.parse(
    JSON.stringify(usersAllPermissions)
  )

  const filterPermission = (permissions) => {
    if (!Array.isArray(permissions) || permissions.length === 0) {
      return []
    }
    return permissions.filter((item) => {
      item.children = filterPermission(item.children)
      return userHasPermission(item) || (item.children && item.children.length)
    })
  }

  return filterPermission(copyUsersAllPermissions)

  /**
   * @description: 查找用户是否具有某个菜单权限
   * @param {Object} permission 权限项
   * @return {Boolean} 是否具有该菜单
   */
  function userHasPermission(permission) {
    return isMenu
      ? permission.type === 'menu' && permissionKeys.includes(permission.key)
      : permissionKeys.includes(permission.key)
  }
}
