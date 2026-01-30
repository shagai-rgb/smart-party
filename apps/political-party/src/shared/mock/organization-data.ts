export type TOrganizationStructure = {
  structures: TStructureItem[]
  units: TUnit[]
  positions: TPosition[]
  humans: THumanResource[]
  sub_orgs: TSubOrg[]
}

export type TStructure = {
  structures: TStructureItem[]
}

export type TPosition = {
  id: number
  position_name: string
  short_name: string
  registration_date: string
}

export type TUnit = {
  id: number
  name: string
  short_name: string
  registration_date: string
  user_count: number
}

export type THumanResource = {
  id: number
  first_name: string
  last_name: string
  position: string
  register: string
}

export type TSubOrg = {
  id: number
  full_name: string
  short_name: string
  website: string
  phone: string
  email: string
  member_count: number
  sub_organization: number
  type: string
  address: string
  established_date: string
  ideology: string
}

export type TStructureItem = {
  id: number
  name: string
  is_active: boolean
  attachment: string
  unit_number: number
  start_date: string
  effectiveDate: string
  end_date: string
}

export type TStructureUnit = {
  id: number
  name: string
  priority: string
  position_number: number
  date_added: string
}

export const structureUnit: TStructureUnit[] = [
  {
    id: 1,
    name: 'Бүтцийн нэгж 1',
    date_added: '2025-03-08',
    position_number: 10,
    priority: ''
  },
  {
    id: 2,
    name: 'Бүтцийн нэгж 2',
    date_added: '2025-03-18',
    position_number: 7,
    priority: ''
  },
  {
    id: 3,
    name: 'Бүтцийн нэгж 3',
    date_added: '2025-06-01',
    position_number: 6,
    priority: ''
  }
]
export type TStructurePosition = {
  id: number
  name: string
  priority: string
  people_count: number
  date_added: string
  group: string
  isGroupHeader?: boolean
}

export const structurePosition: TStructurePosition[] = [
  {
    id: 1,
    name: 'Албан тушаал 1',
    date_added: '2024-01-15',
    people_count: 1,
    priority: '',
    group: 'Төрийн захиргаа, удирдлагын газрын дарга'
  },
  {
    id: 2,
    name: 'Албан тушаал 2',
    date_added: '2024-02-01',
    people_count: 2,
    priority: '',
    group: 'Төрийн захиргаа, удирдлагын газрын дарга'
  },
  {
    id: 3,
    name: 'Албан тушаал 3',
    date_added: '2024-03-10',
    people_count: 3,
    priority: '',
    group: 'Төрийн захиргаа, удирдлагын газрын дарга'
  },
  {
    id: 4,
    name: 'Албан тушаал 1',
    date_added: '2024-04-05',
    people_count: 2,
    priority: '',
    group: 'Ерөнхий нарийн бичгийн дарга'
  },
  {
    id: 5,
    name: 'Албан тушаал 1',
    date_added: '2024-05-20',
    people_count: 6,
    priority: '',
    group: 'Ерөнхий нарийн бичгийн дарга'
  }
]

export const structureData: TOrganizationStructure = {
  structures: [
    {
      id: 1,
      name: '2025 оны 06 оны 01-р өөрчлөлт',
      is_active: false,
      attachment: '',
      unit_number: 3,
      start_date: '2024-09-03',
      effectiveDate: '2025-06-01',
      end_date: '2024-09-03'
    },
    {
      id: 2,
      name: '2023 оны 06 оны 21-р өөрчлөлт',
      is_active: true,
      attachment: '',
      unit_number: 2,
      start_date: '2024-09-04',
      effectiveDate: '2025-06-01',
      end_date: '2024-09-04'
    },
    {
      id: 3,
      name: '2015 оны 07 оны 12-р өөрчлөлт',
      is_active: false,
      attachment: '',
      unit_number: 6,
      start_date: '2024-09-04',
      effectiveDate: '2025-06-01',
      end_date: '2024-09-04'
    },
    {
      id: 4,
      name: '2014 оны 08 оны 12-р өөрчлөлт',
      is_active: false,
      attachment: '3',
      unit_number: 8,
      start_date: '2024-09-04',
      effectiveDate: '2025-06-01',
      end_date: '2024-09-04'
    },
    {
      id: 5,
      name: '2011 оны 11 оны 12-р өөрчлөлт',
      is_active: true,
      attachment: '2',
      unit_number: 10,
      start_date: '2024-09-04',
      effectiveDate: '2025-06-01',
      end_date: ''
    }
  ],
  units: [
    {
      id: 1,
      name: 'Төрийн захиргаа удирдлагын газар',
      user_count: 1,
      short_name: 'ТЗУГ',
      registration_date: '2025-08-16'
    },
    {
      id: 2,
      name: 'Бүтцийн нэгжийн нэр 2',
      user_count: 3,
      short_name: 'БНН',
      registration_date: '2025-08-16'
    },
    {
      id: 3,
      name: 'Бүтцийн нэгжийн нэр 3',
      user_count: 1,
      short_name: 'БНН',
      registration_date: '2025-08-16'
    }
  ],
  humans: [
    {
      id: 1,
      last_name: '',
      first_name: 'Сараа',
      position: 'Захирал',
      register: 'АА12312312'
    },
    {
      id: 2,
      last_name: '',
      first_name: 'Батаа',
      position: 'Дэд захирал',
      register: 'АА12312312'
    },
    {
      id: 3,
      last_name: '',
      first_name: 'Мөнх',
      position: 'Хэрэглэгч',
      register: 'АА12312313'
    }
  ],
  positions: [
    {
      id: 1,
      position_name: 'Төрийн захиргаа, удирдлагын газрын дарга',
      short_name: 'ТЗУГ-ын дарга',
      registration_date: '2017-06-07'
    },
    {
      id: 2,
      position_name: 'Байгууллагын дарга',
      short_name: 'Дарга',
      registration_date: '2017-06-07'
    },
    {
      id: 3,
      position_name: 'Дэд дарга',
      short_name: 'Дэд дарга',
      registration_date: '2017-06-07'
    },
    {
      id: 4,
      position_name: 'Ерөнхий нарийн бичгийн дарга',
      short_name: 'ЕНБД',
      registration_date: '2017-06-07'
    }
  ],

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

export const organizationMock: TOrganization[] = [
  {
    id: 1,
    full_name: 'Монгол Ардын Нам',
    logo: 'https://e-election.mn/storage/uploads/process/file_1713841896222883_165941004644391.jpg',
    short_name: 'МАН',
    structure_count: 7,
    position_count: 10,
    website: 'www.nam.mn',
    phone: '70001921',
    email: 'info@nam.mn',
    primary_color: '#FF0000',
    secondary_color: '#0a5ea6',
    type: 'Улс төрийн нам',
    address:
      'Монгол Улс, Улаанбаатар хот, 14200, Сүхбаатар дүүрэг, 8-р хороо, Алтангэрэлийн гудамж-3, Тусгаар тогтнолын ордон',
    established_date: '1921-03-01',
    structureData
  },
  {
    id: 2,
    full_name: 'Ардчилсан Нам',
    logo: 'https://e-election.mn/storage/uploads/process/file_1735531403931335_17337317167130982.png',
    short_name: 'АН',
    structure_count: 7,
    position_count: 10,
    primary_color: '#14469f',
    secondary_color: '',
    website: 'https://www.democraticparty.mn',
    phone: '1800-1206',
    email: 'info@democraticparty.mn',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Чингисийн Өргөн Чөлөө - 1 Ардчилсан намын төв байр',
    established_date: '2000-12-06',
    structureData
  },
  {
    id: 3,
    logo: 'https://e-election.mn/storage/uploads/process/file_1713842560933784_165941004644391.png',
    full_name: 'Монголын Ногоон Нам',

    structure_count: 7,
    position_count: 10,
    short_name: 'МНН',
    website: 'https://mongoliangreenparty.mn/',
    phone: '457146',
    email: 'info@mongoliangreenparty.mn',
    primary_color: '#1e942b',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'СБД, 6 дугаар хороо, Бага тойруу,',
    established_date: '1990/05/13',
    structureData
  },
  {
    id: 4,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714039970614105_165941004644391.jpg',
    full_name: 'Иргэний зориг ногоон нам',
    short_name: 'ИЗНН',
    structure_count: 7,
    position_count: 10,
    website: 'https://iznn.mn/',
    phone: '99096873',
    email: 'info@iznn.mn',
    primary_color: '#005BAA',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'ЧД, 4-р хороо, Бага тойруу',
    established_date: '2000/03/09',
    structureData
  },
  {
    id: 5,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714040242922031_165941004644391.jpg',
    full_name: 'Монголын Уламжлалын Нэгдсэн нам',
    short_name: 'МУНН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '11-327690, 99114567, 88088337',
    email: 'info.munn1993@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'СБД 1-р хороо, Энхтайваны өргөн чөлөө, МИКА зочид буудал',
    established_date: '',
    structureData
  },
  {
    id: 6,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714980874250943_165941004781591.png',
    full_name: 'Монгол Либерал Ардчилсан нам',
    short_name: 'МоЛАН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '99690310',
    email: 'info@liberaldemparty.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар хот, Баянзүрх дүүрэг, 18 дугаар хороо, Намъяанжүгийн жудамж, 20-03 тоот',
    established_date: '1998/05/21',
    structureData
  },
  {
    id: 7,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714981517265509_165941004781591.png',
    full_name: 'Эх Орон нам',
    short_name: 'ЭОН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99034297',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'БЗД, 4-р хороо, Жуковын',
    established_date: '1998/12/22',
    structureData
  },
  {
    id: 8,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714981722490592_165941004781591.png',
    full_name: 'Монголын Либерал нам',
    short_name: 'МЛН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99706677',
    email: 'mongolianlebralparty@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'ЧД, 4-р хороо, Бага тойруу, Улаанбаатар Эрдэм-Оюу дээд сургууль',
    established_date: '2000/01/28',
    structureData
  },
  {
    id: 9,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714099740625067_165941004644391.png',
    full_name: 'Бүгд Найрамдах Нам',
    short_name: 'БНН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '91112510',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'БГД, 3-р хороо, Вокзал, Буян ХХК-ийн байр',
    established_date: '2004/04/05',
    structureData
  },
  {
    id: 10,
    logo: '',
    full_name: 'Монголын Эмэгтэйчүүдийн Үндэсний Нам',
    short_name: 'МЭҮНН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '11324877',
    email: 'info@justice.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар, Сүхбаатар дүүрэг, Сөүлийн гудамж, "Шувуун саарал" УҮГ-ын Б корпус 3 давхар',
    established_date: '2004/04/12',
    structureData
  },
  {
    id: 11,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714981831353623_165941004781591.png',
    full_name: 'Монголын Социал Демократ Нам',
    short_name: 'МСДН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99994273, 99889551',
    email: 'secretatiat@msdp.mn, sigmatalst@yahoo.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Сүхбаатар дүүрэг, 1-р хороо, Чинван Чагдаржавын гудамж "Их хөлгөн төв" 27-4-3 тоот',
    established_date: '2005/01/20',
    structureData
  },
  {
    id: 12,
    logo: '	https://e-election.mn/storage/uploads/process/file_1764304035914619_17369681366579491.jpg',
    full_name: 'Ард Түмний Нам',
    structure_count: 7,
    position_count: 10,
    short_name: 'АТН',
    website: '',
    phone: '99114140',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'ХУД, 11-р хороо, Дүнжингаравын гудамж, Зайсан гэйт зочид буудал',
    established_date: '2005/12/21',
    structureData
  },
  {
    id: 13,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714121269301236_165941004644391.jpg',
    full_name: 'Монгол Үндэсний Ардчилсан Нам',
    structure_count: 7,
    position_count: 10,
    short_name: 'МҮАН',
    website: 'www.mndp.mn',
    phone: '311585',
    email: 'mndp2006.mn@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар хот, Чингэлтэй дүүрэг, Бага тойруу, Сүхбаатарын гудамж-10. Нэткапитал цамхаг 5 дугаар давхар.',
    established_date: '2006/06/12',
    structureData
  },
  {
    id: 14,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714982478064776_165941004781591.png',
    full_name: 'Эрх Чөлөөг Хэрэгжүүлэгч Нам',
    short_name: 'ЭЧХН',
    structure_count: 7,
    position_count: 10,
    website: 'www.freedomparty.mn',
    phone: '99113439',
    email: 'info@justice.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'БГД, 10 дугаар хороолол, Энхтайвны өргөн чөлөө 5 дугаар хороо, "Их харанга" төвийн 18-1',
    established_date: '2007/02/09',
    structureData
  },
  {
    id: 15,
    logo: '	https://e-election.mn/storage/uploads/process/file_1742371768790147_17337317167130982.jpg',
    full_name: 'ИХ нам',
    short_name: 'ИХ нам',
    structure_count: 7,
    position_count: 10,
    website: 'www.ikhnam.mn/',
    phone: '88013889, 89935577',
    email: 'info@ikhnam.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар хот, Баянзүрх дүүрэг, 3-р хороо,12-р хороолол Токиогий гудамж, 24Б байр, Үйлчилгээний хэсэг 3 тоот',
    established_date: '2007/02/09',
    structureData
  },
  {
    id: 16,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714122156031184_165941004644391.jpg',
    full_name: 'Хөгжлийн Хөтөлбөрийн Нам',
    short_name: 'ХХН',
    structure_count: 7,
    position_count: 10,
    website: 'www.devpparty.com',
    phone: '350858, 99114116, 94699069',
    email: 'khugjliinkhutulburnam@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'СБД, 11-р хороо, Цагдаагийн гудамж, Алтаншагай ХХК-ийн байр 301-304 тоот',
    established_date: '2007/10/30',
    structureData
  },
  {
    id: 17,
    logo: '	https://e-election.mn/storage/uploads/process/file_1764303987281643_17369681366579491.jpg',
    full_name: 'Монголын Ардчилсан Хөдөлгөөний Нам',
    short_name: 'МОНАРХН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99009093',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'СБД, 6-р хороо, Их сургуулийн гудамж, 3/2 306 тоот',
    established_date: '2008/02/01',
    structureData
  },
  {
    id: 18,
    logo: '	https://e-election.mn/storage/uploads/process/file_1764304711402800_17369681366579491.jpg',
    full_name: 'Хамуг Монгол Хөдөлмөрийн Нам',
    short_name: 'ХМХН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99101948',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'СБД, 8-р хороо, Залуучуудын өргөн чөлөө "Монгол хэвлэл" ХХК-ийн байранд',
    established_date: '2011/10/21',
    structureData
  },
  {
    id: 19,
    logo: 'https://e-election.mn/storage/uploads/process/file_1744503473267819_17369681366579491.png',
    full_name: 'ХҮН Нам',
    short_name: 'ХҮН',
    structure_count: 7,
    position_count: 10,
    website: 'https://www.hunnam.mn',
    phone: '77000414',
    email: 'info@hunnam.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'Сүхбаатар дүүрэг 6 дугаар хороо Монре импкесс 1 давхар 106 тоот',
    established_date: '2011/12/05',
    structureData
  },
  {
    id: 20,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714982115151045_165941004781591.png',
    full_name: 'Эх Орончдын Нэгдсэн Нам',
    short_name: 'ЭОНН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99113577',
    email: 'info@justice.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'БГД, 8-р хороо, 4-р хороолол, 11-260',
    established_date: '2012/01/20',
    structureData
  },
  {
    id: 21,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714124988296516_165941004644391.jpg',
    full_name: 'Монгол Консерватив нам',
    short_name: 'МКН',
    structure_count: 7,
    position_count: 10,
    website: 'https://mongolnam.mn',
    phone: '90902727, 98880818',
    email: 'info@mongolnam.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'БГД, 17-р хороо жалханцхудагт Дамдинбазарын гудамж ворлд Монголиа барилга 1102 тоот',
    established_date: '2012/10/23',
    structureData
  },
  {
    id: 22,
    logo: 'https://e-election.mn/storage/uploads/process/file_1739585316189044_17369681366579491.jpg',
    full_name: 'Тусгаар Тогтнол, Эв Нэгдлийн Нам',
    short_name: 'ТТЭНН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '88808574, 99628944',
    email: 'TusgaarTENNam@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Баянгол дүүрэг, 8-р хороо, Хөгжил хотхон, "Алтан онгоц" ХХК-ийн байр, 305 тоот',
    established_date: '2015/05/29',
    structureData
  },
  {
    id: 23,
    logo: '	https://e-election.mn/storage/uploads/process/file_1714982330033755_165941004781591.png',
    full_name: 'Ард Түмний Хүч Нам',
    short_name: 'АТХН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '99114140',
    email: 'info@justice.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'ХУД, 11-р хороо, Дүнжингаравын гудамж, Зайсан гэйт зочид буудал',
    established_date: '2015/06/26',
    structureData
  },
  {
    id: 24,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714127570864910_165941004644391.jpg',
    full_name: 'Монголын Хүний Төлөө Нам',
    short_name: 'МХТН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '99108592',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'БЗД, 18-р хороо, 13-р хороолол, 9г байр 3 тоот',
    established_date: '2017/03/27',
    structureData
  },
  {
    id: 25,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714297711440393_165941004644391.jpg',
    full_name: 'Үнэн ба Зөв нам',
    short_name: 'ҮБЗН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '88104626',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'СБД, 11-р хороо, 7-р хороолол, Pro One оффис 306 тоот',
    established_date: '2017/03/10',
    structureData
  },
  {
    id: 26,
    logo: '	https://e-election.mn/storage/uploads/process/file_1715065971819485_165941004781591.png',
    full_name: 'Эрх Чөлөөний Эвсэл Нам',
    short_name: 'ЭН',
    structure_count: 7,
    position_count: 10,
    website: 'https://liberte.mn/',
    phone: '77001206, 77771206',
    email: 'leader@liberte.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'УБ хот, СБД, 1-р хороо, 23-р барилга, 9 давхар, 918 тоот',
    established_date: '2017/06/12',
    structureData
  },
  {
    id: 27,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714301192600029_165941004644391.jpg',
    full_name: 'Дэлхийн Монголчууд Нам',
    short_name: 'ДМН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99103277',
    email: 'wmongolianparty@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'ЧД, 4-р хороо, Самбуугийн гудамж, 16-45 тоот',
    established_date: '2018/01/15',
    structureData
  },
  {
    id: 28,
    logo: 'https://e-election.mn/storage/uploads/process/file_1715853964764615_165941004781591.jpg',
    full_name: 'Ард түмний олонхийн засаглал нам',
    short_name: 'АТОЗН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '99156426',
    email: 'atoznam19@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'ЧД, 2-р хороо, С.Чоймболын гудамж, МҮЭХ-ны харьяа ҮҮТ-ийн 208 тоот',
    established_date: '2018/08/26',
    structureData
  },
  {
    id: 29,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714354167291200_165941004644391.jpg',
    full_name: 'Их Эв Нам',
    short_name: 'ИЭН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '70114698, 86188681',
    email: 'ihevnam@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'СБД, 8-р хороо, бага тойруу – 42, Монголын залуучуудын холбооны байр, 110 тоот',
    established_date: '2018/09/29',
    structureData
  },
  {
    id: 30,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714355040328438_165941004644391.jpg',
    full_name: 'Гэр Хороолол Хөгжлийн Нам',
    short_name: 'ГХХН',
    website: '',
    phone: '95336100',
    email: '',
    structure_count: 7,
    position_count: 10,
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'ЧД, 1-р хороо, Жуулчны гудамж, 34-р байр, баруун жигүүрийн А хэсэг',
    established_date: '2018/11/28',
    structureData
  },
  {
    id: 31,
    logo: '	https://e-election.mn/storage/uploads/process/file_1764304741530999_17369681366579491.png',
    full_name: 'Миний Монгол нам',
    short_name: 'ММН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '88265206, 99105206',
    email: 'miniimongolnam@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'Сүхбаатар дүүрэг, 6 дугаар хороо, 15 дугаар байр, 11 тоот.',
    established_date: '2019/04/10',
    structureData
  },
  {
    id: 32,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714355431430212_165941004644391.jpg',
    full_name: 'Монгол шинэчлэлт нам',
    short_name: 'МШН',
    website: '',
    phone: '99108099',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    structure_count: 7,
    position_count: 10,
    address: 'ЧД, 6-р хороо, 6-р хороолол, 65 дугаар байр, 1 давха',
    established_date: '2018/10/19',
    structureData
  },
  {
    id: 33,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714982260446398_165941004781591.png',
    full_name: 'ШИНЭ нам',
    short_name: 'ШН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99172206, 80127733',
    email: 'newpartymongolia@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Монгол Улс, Улаанбаатар хот, Баянгол дүүрэг. Баруун-4 зам, Гранд плаза төв, 10 давхар, 1003 тоот',
    established_date: '2019/06/08',
    structureData
  },
  {
    id: 34,
    logo: 'https://e-election.mn/storage/uploads/process/file_1739584314860410_17369681366579491.jpg',
    full_name: 'Зүй ёс нам',
    short_name: 'ЗЁН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '99158515',
    email: 'zuiyosnam@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, 5 хороолол, Чингисийн өргөн чөлөө гудамж, 14-р байрны 2-р орц, 3 давхарт 301 тоот',
    established_date: '2019/06/08',
    structureData
  },
  {
    id: 35,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714982046341258_165941004781591.png',
    full_name: 'Ардчилал шинэчлэлийн нам',
    short_name: 'АШН',
    structure_count: 7,
    position_count: 10,
    website: '',
    phone: '91118796',
    email: '',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address: 'СБД, 1-р хороо, Олимпийн гудамж-6, Нью хоризон, 502 тоот',
    established_date: '2019/12/18',
    structureData
  },
  {
    id: 36,
    logo: '	https://e-election.mn/storage/uploads/process/file_1714358050351025_165941004644391.jpg',
    full_name: 'Иргэдийн Оролцооны Нэгдэл Нам',
    short_name: 'ИОНН',
    structure_count: 7,
    position_count: 10,
    website: 'https://cup.mn/',
    phone: '72220303',
    email: 'admin1@cup.mn',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Улаанбаатар хот, Сүхбаатар дүүрэг, 3-р хороо, Нарны зам-53, Саруул төв. 107 тоот.',
    established_date: '2022/03/03',
    structureData
  },
  {
    id: 37,
    logo: 'https://e-election.mn/storage/uploads/process/file_1714974256389143_165941004781591.png',
    full_name: 'Сайн ардчилсан иргэдийн нэгдсэн нам',
    short_name: 'САИНН',
    website: '',
    structure_count: 7,
    position_count: 10,
    phone: '99191388, 90101195, 99196290',
    email: 'sainnammongolia@gmail.com',
    primary_color: '',
    secondary_color: '',
    type: 'Улс төрийн нам',
    address:
      'Хан-Уул дүүрэг, 2-р хороо, Хан-Уул цогцолборын 6а байрны 104 тоот',
    established_date: '2023/02/18',
    structureData
  }
]

export type TOrganization = {
  id: number
  full_name: string
  logo: string
  structure_count: number
  position_count: number
  short_name: string
  website: string
  primary_color: string
  secondary_color: string
  phone: string
  type: string
  email: string
  address: string
  established_date: string
  structureData: TOrganizationStructure
}
