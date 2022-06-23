import type { ElForm } from 'element-plus';

export type ClickHandleType = (e: MouseEvent) => void;

export type FormInstance = InstanceType<typeof ElForm>;

// 表单验证 vaildator 的 cb
// TODO: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormVaildatorCbType = (info?: any) => void;

export interface ObjectType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

//  TODO: 从其他文件引入 IUserInfoType 时报错： 无法从 src/types/common 导入 IUserInfoType
export interface IUserInfoType {
  id: number;
  username: string;
  account: string;
  avatar: string;
  email: string;
  telephone: string;
  role: number;
  mySerialNumber?: string;
  college: string;
  // TODO: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myClass?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allClasses?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allCourses?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allStudents?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allTeachers?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myTeachers?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myCourses?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myStudents?: any;
}
