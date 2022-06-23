import MyTestPaperTea from '../views/teacher/MyTestPaper.vue';
import Home from '../views/Home.vue';
// import MyTestPaperStudent from '../views/student/MyTestPaper.vue';
// import CourseResults from '../views/student/CourseResults.vue';
import MyStudents from '../views/teacher/MyStudents.vue';
import MyCourses from '../views/teacher/MyCourses.vue';
// import StudentManagementSystem from '../views/admin/StudentManagementSystem.vue';
// import ClassroomManagementSystem from '../views/admin/ClassroomManagementSystem.vue';
import ReleaseTestPapers from '../views/teacher/ReleaseTestPaper.vue';
import AllTestPapers from '../views/teacher/AllTestPapers.vue';
// import AnswerTestPaper from '../views/student/AnswerTestPaper.vue';
import CorrectTestPaper from '../views/teacher/CorrectTestPaper.vue';
import UserInfo from '../views/user/UserInfo.vue';
import UpdateUserinfo from '../views/user/UpdateUserinfo.vue';
import UpdateUserPassword from '../views/user/UpdateUserPassword.vue';
import UpdateAvatar from '../views/user/UpdateAvatar.vue';
import { RouteRecordRaw } from 'vue-router';

// export const studentRoutes: Array<RouteRecordRaw> = [
//   {
//     path: '/myTestPaperStu',
//     name: 'MyTestPaperStudent',
//     component: Home,
//     meta: {
//       title: '我的试卷',
//     },
//     children: [
//       {
//         path: '',
//         name: 'MyTestPaperStudent',
//         meta: {
//           title: '我的试卷',
//         },
//         component: MyTestPaperStudent,
//       },
//     ],
//   },
//   {
//     path: '/answerTestPaper',
//     name: 'AnswerTestPaper',
//     meta: {
//       title: '作答试卷',
//       // 不展示到侧边栏
//       noSidebarShow: true,
//     },
//     component: Home,
//     children: [
//       {
//         path: '',
//         name: 'AnswerTestPaper',
//         meta: {
//           title: '作答试卷',
//           // 不展示到侧边栏
//           noSidebarShow: true,
//         },
//         component: AnswerTestPaper,
//       },
//     ],
//   },
//   {
//     path: '/courseResults',
//     name: 'CourseResults',
//     meta: {
//       title: '课程成绩',
//     },
//     component: Home,
//     children: [
//       {
//         path: '',
//         name: 'CourseResults',
//         meta: {
//           title: '课程成绩',
//         },
//         component: CourseResults,
//       },
//     ],
//   },
// ];

export const teacherRoutes: Array<RouteRecordRaw> = [
  {
    path: '/myTestPaperTea',
    name: 'MyTestPaperTea',
    component: Home,
    children: [
      {
        path: '',
        name: 'MyTestPaperTea',
        meta: {
          title: '我的试卷',
          icon: 'UserFilled',
        },
        component: MyTestPaperTea,
        children: [
          {
            path: '/myTestPaperTea/releaseTestPapers',
            name: 'ReleaseTestPapers',
            meta: {
              title: '发布试卷',
              icon: 'UserFilled',
            },
            component: ReleaseTestPapers,
          },
          {
            path: '/myTestPaperTea/allTestPapers',
            name: 'AllTestPapers',
            meta: {
              title: '所有试卷',
              icon: 'UserFilled',
            },
            component: AllTestPapers,
          },
          {
            path: '/myTestPaperTea/correctTestPaper',
            name: 'CorrectTestPaper',
            meta: {
              title: '批改试卷',
              icon: 'UserFilled',
            },
            component: CorrectTestPaper,
          },
        ],
      },
    ],
  },
  {
    path: '/myStudents',
    name: 'MyStudents',
    component: Home,
    children: [
      {
        path: '',
        name: 'MyStudents',
        meta: {
          title: '我的学生',
          icon: 'UserFilled',
        },
        component: MyStudents,
      },
    ],
  },
  {
    path: '/myCourses',
    name: 'MyCourses',
    component: Home,
    children: [
      {
        path: '',
        name: 'MyCourses',
        meta: {
          title: '我的课程',
          icon: 'UserFilled',
        },
        component: MyCourses,
      },
    ],
  },
];

// export const adminRoutes: Array<RouteRecordRaw> = [
//   {
//     path: '/studentManagementSystem',
//     // 必须要带名字，否则会在添加动态路由时会出问题
//     name: 'StudentManagementSystem',
//     meta: {
//       title: '学生管理系统',
//     },
//     component: Home,
//     children: [
//       {
//         path: '',
//         name: 'StudentManagementSystem',
//         meta: {
//           title: '学生管理系统',
//         },
//         component: StudentManagementSystem,
//       },
//     ],
//   },
//   {
//     path: '/classroomManagementSystem',
//     name: 'ClassroomManagementSystem',
//     component: Home,
//     meta: {
//       title: '教师管理系统',
//     },
//     children: [
//       {
//         path: '/classroomManagementSystem',
//         name: 'ClassroomManagementSystem',
//         meta: {
//           title: '教师管理系统',
//         },
//         component: ClassroomManagementSystem,
//       },
//     ],
//   },
// ];

export const userRoute = {
  path: '/user',
  name: 'User',
  component: Home,
  meta: { title: '个人中心', icon: 'User' },
  children: [
    {
      path: '/user/userinfo',
      name: 'Userinfo',
      component: UserInfo,
      meta: {
        title: '个人资料',
        icon: 'User',
      },
    },
    {
      path: '/user/updateUserinfo',
      name: 'UpdateUserinfo',
      component: UpdateUserinfo,
      meta: {
        title: '更改资料',
        icon: 'User',
      },
    },
    {
      path: '/user/updateUserPassword',
      name: 'UpdateUserPassword',
      component: UpdateUserPassword,
      meta: {
        title: '修改密码',
        icon: 'User',
      },
    },
    {
      path: '/user/updateAvatar',
      name: 'UpdateAvatar',
      component: UpdateAvatar,
      meta: {
        title: '更改头像',
        icon: 'Avatar',
      },
    },
  ],
};

export const asyncRoutes = [[], teacherRoutes, []];
