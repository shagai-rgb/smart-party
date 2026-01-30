export const usersMockData = [
  {
    id: 1,
    name: 'Zolbayar',
    platform: 'НАМ',
    organization: 'АН',
    modules: ['Module1', 'Module2'],
    groups: ['Group1', 'Group2']
  },
  {
    id: 2,
    name: 'Temuujin',
    platform: 'СЕХ',
    organization: 'СЕХ',
    modules: ['Module1'],
    groups: []
  },
  {
    id: 3,
    name: 'Bat-Erdene',
    platform: 'НАМ',
    organization: 'МАН',
    modules: ['Module2', 'Module3'],
    groups: ['Admin']
  },
  {
    id: 4,
    name: 'Anu',
    platform: 'НАМ',
    organization: 'ХҮН',
    modules: ['Module1'],
    groups: ['Editor']
  },
  {
    id: 5,
    name: 'Enkhjin',
    platform: 'СЕХ',
    organization: 'СЕХ',
    modules: ['Module1', 'Module2', 'Module3'],
    groups: ['Super Admin']
  }
]

export type TUser = {
  id: number
  name: string
  platform: string
  organization: string
  modules: string[]
  groups: string[]
}
