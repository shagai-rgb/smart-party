export type TEmployee = {
  id: number
  regNo: string
  lastName: string
  firstName: string
  birthDate: string
  gender: string
  phone_number: string
  appointment_date: string
  appointment_status: string
  employee_status: boolean
  exempted_status: string
  exempted_date: string
  position: string
  created_at: string
  group: string
  isGroupHeader?: boolean
}

export const mockEmployees: TEmployee[] = [
  {
    id: 1,
    regNo: 'УЗ88111011',
    lastName: 'Батдорж',
    firstName: 'Ариунаа',
    birthDate: '1988-11-10',
    gender: 'Эмэгтэй',
    employee_status: true,
    appointment_status: 'Томилогдсон',
    phone_number: '99112233',
    appointment_date: '2025-07-16',
    exempted_status: 'Чөлөөлөөгүй',
    exempted_date: '',
    position: 'Газрын дарга',
    created_at: '2025-07-10',
    group: 'Төрийн захиргаа, удирдлагын газар'
  },
  {
    id: 2,
    regNo: 'АБ99020222',
    lastName: 'Болд',
    firstName: 'Тэмүүлэн',
    birthDate: '1999-02-02',
    gender: 'Эрэгтэй',
    employee_status: false,
    appointment_status: 'Томилогдоогүй',
    phone_number: '88119900',
    appointment_date: '2024-02-16',
    exempted_status: 'Чөлөөлсөн',
    exempted_date: '2025-08-01',
    position: 'Ахлах мэргэжилтэн',
    created_at: '2024-01-20',
    group: 'Төрийн захиргаа, удирдлагын газар'
  },
  {
    id: 3,
    regNo: 'ХД95050533',
    lastName: 'Дорж',
    firstName: 'Солонго',
    birthDate: '1995-05-05',
    gender: 'Эмэгтэй',
    employee_status: true,
    appointment_status: 'Томилогдсон',
    phone_number: '99005566',
    appointment_date: '2025-07-16',
    exempted_status: 'Чөлөөлөөгүй',
    exempted_date: '',
    position: 'Мэргэжилтэн',
    created_at: '2025-06-30',
    group: 'Ерөнхий нарийн бичгийн даргын газар'
  },
  {
    id: 4,
    regNo: 'СЭ92030344',
    lastName: 'Эрдэнэ',
    firstName: 'Мөнхбат',
    birthDate: '1992-03-03',
    gender: 'Эрэгтэй',
    employee_status: true,
    appointment_status: 'Томилогдоогүй',
    phone_number: '86778899',
    appointment_date: '2021-07-16',
    exempted_status: 'Чөлөөлөөгүй',
    exempted_date: '',
    position: 'Ахлах шинжээч',
    created_at: '2021-06-01',
    group: 'Ерөнхий нарийн бичгийн даргын газар'
  },
  {
    id: 5,
    regNo: 'БН01010155',
    lastName: 'Наран',
    firstName: 'Анударь',
    birthDate: '2001-01-01',
    gender: 'Эмэгтэй',
    employee_status: false,
    appointment_status: 'Томилогдсон',
    phone_number: '95556677',
    appointment_date: '2025-12-16',
    exempted_status: 'Чөлөөлсөн',
    exempted_date: '2025-09-10',
    position: 'Дадлагажигч',
    created_at: '2025-05-12',
    group: 'Ерөнхий нарийн бичгийн даргын газар'
  },
  {
    id: 6,
    regNo: 'ЖТ97070766',
    lastName: 'Жавхлан',
    firstName: 'Төгөлдөр',
    birthDate: '1997-07-07',
    gender: 'Эрэгтэй',
    employee_status: true,
    appointment_status: 'Томилогдсон',
    phone_number: '94443322',
    appointment_date: '2023-03-01',
    exempted_status: 'Чөлөөлөөгүй',
    exempted_date: '',
    position: 'Системийн админ',
    created_at: '2023-02-15',
    group: 'Мэдээлэл технологийн хэлтэс'
  },
  {
    id: 7,
    regNo: 'ОЭ94090977',
    lastName: 'Отгон',
    firstName: 'Энхжин',
    birthDate: '1994-09-09',
    gender: 'Эмэгтэй',
    employee_status: true,
    appointment_status: 'Томилогдоогүй',
    phone_number: '93332211',
    appointment_date: '2022-11-20',
    exempted_status: 'Чөлөөлөөгүй',
    exempted_date: '',
    position: 'Нягтлан бодогч',
    created_at: '2022-10-01',
    group: 'Санхүү, төсвийн хэлтэс'
  }
]
