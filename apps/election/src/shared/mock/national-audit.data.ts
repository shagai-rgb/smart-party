import { TSubOrg } from './organization-data'

export type TNationalAudit = {
  id: number
  full_name: string
  logo: string
  primary_color: string
  secondary_color: string
  short_name: string
  type: string
  website: string
  phone: string
  email: string
  address: string
  established_date: string
  sub_orgs: TSubOrg[]
}

export const nationalAuditMock: TNationalAudit[] = [
  {
    id: 1,
    full_name: 'Үндэсний Аудитын Газар',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'ҮАГ',
    primary_color: '#000EAC',
    secondary_color: '#ffcd00',
    type: 'ТӨРИЙН БАЙГУУЛЛАГА',
    website: 'https://www.naa.gov.mn',
    phone: '11-260000',
    email: 'info@naa.gov.mn',
    address: 'Улаанбаатар хот',
    established_date: '1995-01-01',
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
    full_name: 'Нийслэлийн Аудитын Газар',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrPM7P5ORGskVi5JzSziITOGIUEECmLM8QQ&s',
    short_name: 'НАГ',
    primary_color: '#000EAC',
    secondary_color: '#ffcd00',
    type: 'ТӨРИЙН БАЙГУУЛЛАГА',
    website: '',
    phone: '11-260001',
    email: 'info@city-audit.mn',
    address: 'Улаанбаатар хот',
    established_date: '2001-01-01',
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
