// eslint-disable-next-line @typescript-eslint/ban-types
export function isValidKey(
  key: string | number | symbol,
  // eslint-disable-next-line @typescript-eslint/ban-types
  object: object
): key is keyof typeof object {
  return key in object;
}

// 生成一个在[l,r]范围内的随机整数的函数
export function getRandom(l: number, r: number): number {
  const n = l + Math.random() * (r - l + 1);
  return Math.floor(n);
}

// 生成不重复的序列号
export function genNonDuplicateID(randomLength: number): string {
  const str = Number(
    Math.random().toString().substr(3, randomLength) + Date.now()
  ).toString(36);
  return str;
}

// 检验电话号码
export function isLegalTel(tel: string): boolean {
  const reg = /^1[3456789]\d{9}$/;
  const bool = reg.test(tel);
  return bool;
}

// 检验电子邮件
export function isLegalEmail(email: string): boolean {
  const reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
  const bool = reg.test(email);
  return bool;
}

// 检验密码
export const isLegalPassword = (pass: string): boolean => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  const bool = reg.test(pass);
  return bool;
};

// 截取字符串后几位
export const truncateLastFewDigitsString = (n: number, str: string) => {
  const len = str.length;
  const lastFourStr = str.substring(len - 4);
  return lastFourStr;
};

// 如果数据为空显示 --
// TODO: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handlingEmptyData = (v: any) => {
  if (!v && v != 0) {
    return '--';
  }
  return v;
};
