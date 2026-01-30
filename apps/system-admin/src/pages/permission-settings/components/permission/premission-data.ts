export const permissionMockData = [
  {
    id: ' 1',
    name: 'Нам үүсгэх эрх',
    code: 'admin:org:info:create',
    platform: 'admin',
    module: 'organization'
  },
  {
    id: '2',
    name: 'Намын мэдээлэл засах эрх',
    code: 'admin:org:info:edit',
    platform: 'admin',
    module: 'organization'
  },
  {
    id: '3',
    name: 'Намын мэдээлэл харах эрх',
    code: 'admin:org:info:view',
    platform: 'admin',
    module: 'organization'
  },
  {
    id: '4',
    name: 'Бүлэг үүсгэх эрх',
    code: 'admin:group:create',
    platform: 'admin',
    module: 'permission'
  },
  {
    id: '5',
    name: 'Бүлэг засах эрх',
    code: 'admin:group:edit',
    platform: 'admin',
    module: 'permission'
  },
  {
    id: '6',
    name: 'Бүлэг устгах эрх',
    code: 'admin:group:delete',
    platform: 'admin',
    module: 'permission'
  },
  {
    id: '7',
    name: 'Хэрэглэгч нэмэх эрх',
    code: 'admin:user:create',
    platform: 'admin',
    module: 'user'
  },
  {
    id: '8',
    name: 'Хэрэглэгч засах эрх',
    code: 'admin:user:edit',
    platform: 'admin',
    module: 'user'
  },
  {
    id: '9',
    name: 'Хэрэглэгч устгах эрх',
    code: 'admin:user:delete',
    platform: 'admin',
    module: 'user'
  },
  {
    id: '10',
    name: 'Эрх оноох эрх',
    code: 'admin:permission:assign',
    platform: 'admin',
    module: 'permission'
  }
]

export type TPermission = {
  id: string
  name: string
  code: string
  platform: string
  module: string
}
