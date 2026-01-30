import { TSubOrg } from './organization-data'

export type TPrivateAudit = {
  id: number
  full_name: string
  logo: string
  short_name: string
  type: string
  website: string
  primary_color: string
  secondary_color: string
  phone: string
  email: string
  address: string
  established_date: string
  sub_orgs: TSubOrg[]
}

export const privateAuditMock: TPrivateAudit[] = [
  {
    id: 1,
    full_name: 'Гранд Аудит ХХК',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'GA',
    primary_color: '',
    secondary_color: '',
    website: '',
    type: 'ХУВИЙН АУДИТ',
    phone: '11-400001',
    email: 'info@grandaudit.mn',
    address: 'Улаанбаатар хот',
    established_date: '2012-05-01',
    sub_orgs: [
      {
        id: 40,
        full_name: 'Нийслэлийн газар',
        short_name: 'Нийслэл',
        website: 'https://www.capitaldp.mn',
        phone: '11-262909',
        email: 'info@capitaldp.mn',
        member_count: 0,
        sub_organization: 9,
        type: 'САЛБАР БАЙГУУЛЛАГА',
        address: 'Улаанбаатар хот',
        established_date: '2010-01-01',
        ideology: 'Орон нутгийн  бодлого'
      }
    ]
  },
  {
    id: 2,
    full_name: 'Итгэлт Аудит ХХК',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'IA',
    primary_color: '',
    website: '',
    secondary_color: '',
    type: 'ХУВИЙН АУДИТ',
    phone: '11-400002',
    email: 'info@itgeltaudit.mn',
    address: 'Улаанбаатар хот',
    established_date: '2015-03-12',
    sub_orgs: [
      {
        id: 40,
        full_name: 'Нийслэлийн газар',
        short_name: 'Нийслэл',
        website: 'https://www.capitaldp.mn',
        phone: '11-262909',
        email: 'info@capitaldp.mn',
        member_count: 0,
        sub_organization: 9,
        type: 'САЛБАР БАЙГУУЛЛАГА',
        address: 'Улаанбаатар хот',
        established_date: '2010-01-01',
        ideology: 'Орон нутгийн  бодлого'
      }
    ]
  },
  {
    id: 3,
    full_name: 'Найдвартай Аудит ХХК',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'NA',
    website: '',
    primary_color: '',
    secondary_color: '',
    type: 'ХУВИЙН АУДИТ',
    phone: '11-400003',
    email: 'info@reliableaudit.mn',
    address: 'Улаанбаатар хот',
    established_date: '2016-07-20',
    sub_orgs: [
      {
        id: 40,
        full_name: 'Нийслэлийн газар',
        short_name: 'Нийслэл',
        website: 'https://www.capitaldp.mn',
        phone: '11-262909',
        email: 'info@capitaldp.mn',
        member_count: 0,
        sub_organization: 9,
        type: 'САЛБАР БАЙГУУЛЛАГА',
        address: 'Улаанбаатар хот',
        established_date: '2010-01-01',
        ideology: 'Орон нутгийн  бодлого'
      }
    ]
  },
  {
    id: 4,
    full_name: 'Премиум Аудит ХХК',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'PA',
    website: '',
    primary_color: '',
    secondary_color: '',
    type: 'ХУВИЙН АУДИТ',
    phone: '11-400004',
    email: 'info@premiumaudit.mn',
    address: 'Улаанбаатар хот',
    established_date: '2018-09-01',
    sub_orgs: [
      {
        id: 40,
        full_name: 'Нийслэлийн газар',
        short_name: 'Нийслэл',
        website: 'https://www.capitaldp.mn',
        phone: '11-262909',
        email: 'info@capitaldp.mn',
        member_count: 0,
        sub_organization: 9,
        type: 'САЛБАР БАЙГУУЛЛАГА',
        address: 'Улаанбаатар хот',
        established_date: '2010-01-01',
        ideology: 'Орон нутгийн  бодлого'
      }
    ]
  },
  {
    id: 5,
    full_name: 'Тэгш Шударга Аудит ХХК',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'TS',
    website: '',
    primary_color: '',
    secondary_color: '',
    type: 'ХУВИЙН АУДИТ',
    phone: '11-400005',
    email: 'info@fairaudit.mn',
    address: 'Улаанбаатар хот',
    established_date: '2020-01-15',
    sub_orgs: [
      {
        id: 40,
        full_name: 'Нийслэлийн газар',
        short_name: 'Нийслэл',
        website: 'https://www.capitaldp.mn',
        phone: '11-262909',
        email: 'info@capitaldp.mn',
        member_count: 0,
        sub_organization: 9,
        type: 'САЛБАР БАЙГУУЛЛАГА',
        address: 'Улаанбаатар хот',
        established_date: '2010-01-01',
        ideology: 'Орон нутгийн  бодлого'
      }
    ]
  }
]
