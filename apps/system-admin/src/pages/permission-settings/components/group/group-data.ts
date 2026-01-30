export const groupsMockData = [
  {
    id: '1',
    name: 'Нам хариуцсан админ',
    user_count: 5,
    permission_count: 18
  },
  {
    id: '2',
    name: 'Жирийн хэрэглэгч',
    user_count: 120,
    permission_count: 6
  },
  {
    id: '3',
    name: 'Системийн админ',
    user_count: 2,
    permission_count: 25
  },
  {
    id: '4',
    name: 'Санхүү хариуцсан хэрэглэгч',
    user_count: 8,
    permission_count: 10
  }
]

export type TGroup = {
  id: string
  name: string
  user_count: number
  permission_count: number
}
