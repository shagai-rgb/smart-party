import { TSubOrg } from './organization-data'

export type TElection = {
  id: number
  logo: string
  full_name: string
  short_name: string
  type: string
  primary_color: string
  secondary_color: string
  website: string
  phone: string
  email: string
  address: string
  established_date: string
  sub_orgs: TSubOrg[]
}

export const electionMock: TElection[] = [
  {
    id: 1,
    full_name: 'Сонгуулийн Ерөнхий Хороо',
    logo: 'https://legaldata.mn/storage/profile/s4mk0FedfbUPLoDsViGZpMiKm4ka06t7MMTl1rNl.jpg',
    short_name: 'СЕХ',
    primary_color: '#FFCD02',
    secondary_color: '#EF3624',
    type: 'ТӨРИЙН БАЙГУУЛЛАГА',
    website: 'https://www.gec.gov.mn',
    phone: '11-311111',
    email: 'info@gec.gov.mn',
    address: 'Улаанбаатар хот',
    established_date: '1992-04-10',
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
