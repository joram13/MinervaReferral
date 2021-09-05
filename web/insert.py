from serve import *
import datetime

# create data
Users_to_add = [{
    'id': 1,
    'name': 'Albert Einstein',
    'email': 'alberteinstein@gmail.com',
    'linkedin': 'albert-einstein',
    'major': MajorEnum.NS,
    'grad_year': 2020,
    'current_work': 'researcher at Einstein lab',
    'current_title': 'project manager',
    'interests': 'astronomy, physics',
    'role_id': 13,
    'resume': 'einstein_resume',
    'bio':
    'Introvert. Zombie fan. Professional alcohol buff. Internet nerd. Bacon maven.',
    'image': 'einstein_image',
    'cover': 'einstein_cover'
}, {
    'id': 2,
    'name': 'Bob Marley',
    'email': 'bobmarley@gmail.com',
    'linkedin': 'bob-marley',
    'major': MajorEnum.AH,
    'grad_year': 2022,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Sculpting, Beach volleyball',
    'role_id': 26,
    'resume': 'marley_resume',
    'bio':
    'Friendly introvert. Thinker. Bacon geek. Beer lover. Web fanatic. Internet fan. Reader. Alcohol advocate.',
    'image': 'marley_image',
    'cover': 'marley_cover'
}, {
    'id': 3,
    'name': 'Ayn Rand',
    'email': 'aynrand@gmail.com',
    'linkedin': 'ayn-rand',
    'major': MajorEnum.BS,
    'grad_year': 2019,
    'current_work': 'consultant at BCG',
    'current_title': 'vice project manager',
    'interests': 'Consulting, Skiing, Knife throwing',
    'role_id': 13,
    'resume': 'rand_resume',
    'bio':
    'Music fanatic. Food fan. Typical pop culture evangelist. Beer nerd. Zombie geek. Internet buff.',
    'image': 'rand_image',
    'cover': 'rand_cover'
}, {
    'id': 4,
    'name': 'George Carlin',
    'email': 'georgecarlin@gmail.com',
    'linkedin': 'george-carlin',
    'major': MajorEnum.CSSS,
    'grad_year': 2023,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Software development, Singing, Thrift shopping',
    'role_id': 26,
    'resume': 'carlin_resume',
    'bio':
    'Web geek. Bacon ninja. Lifelong travel junkie. Freelance zombie fan. Music buff.',
    'image': 'carlin_image',
    'cover': 'carlin_cover'
}, {
    'id': 5,
    'name': 'George Elliot',
    'email': 'georgeelliot@gmail.com',
    'linkedin': 'george-elliot',
    'major': MajorEnum.BSNS,
    'grad_year': 2021,
    'current_work': 'fincial department at IBM',
    'current_title': 'Shareholder relations manager',
    'interests': 'Golf, Skiing, Finance',
    'role_id': 9,
    'resume': 'elliot_resume',
    'bio':
    'Unapologetic zombie maven. Travel expert. Total alcohol aficionado. Food fan. Communicator.',
    'image': 'elliot_image',
    'cover': 'elliot_cover'
}, {
    'id': 6,
    'name': 'Doris Banks',
    'email': 'dorisbanks@gmail.com',
    'linkedin': 'doris-banks',
    'major': MajorEnum.CS,
    'grad_year': 2019,
    'current_work': 'data analyst at Nasdaq',
    'current_title': 'Data Analyst',
    'interests': 'Social science, History',
    'role_id': 21,
    'resume': 'banks_resume',
    'bio':
    'Passionate travel ninja. Hardcore social media practitioner. Falls down a lot.',
    'image': 'banks_image',
    'cover': 'banks_cover'
}, {
    'id': 7,
    'name': 'Gregory Ross',
    'email': 'gregoryross@gmail.com',
    'linkedin': 'gregory-ross',
    'major': MajorEnum.AHSS,
    'grad_year': 2019,
    'current_work': 'Facebook@Japan',
    'current_title': 'HR manager',
    'interests': 'Psychology',
    'role_id': 10,
    'resume': 'ross_resume',
    'bio':
    'Subtly charming food practitioner. Tv fan. Beer geek. Future teen idol. Amateur organizer. Problem solver. Professional introvert.',
    'image': 'ross_image',
    'cover': 'ross_cover'
}, {
    'id': 8,
    'name': 'Margarita Mares',
    'email': 'margaritamares@gmail.com',
    'linkedin': 'margarita-mares',
    'major': MajorEnum.CSBS,
    'grad_year': 2020,
    'current_work': 'UI consultant at Aniplex',
    'current_title': 'UI team leader',
    'interests': 'Physics',
    'role_id': 2,
    'resume': 'mares_resume',
    'bio':
    'Twitter expert. Beer advocate. Thinker. Lifelong travel evangelist. Web enthusiast. Freelance bacon lover.',
    'image': 'mares_image',
    'cover': 'mares_cover'
}, {
    'id': 9,
    'name': 'Leland Tennyson',
    'email': 'lelandtennyson@gmail.com',
    'linkedin': 'leland-tennyson',
    'major': MajorEnum.BSSS,
    'grad_year': 2020,
    'current_work': 'Hilton Group',
    'current_title': 'Customer relations manager',
    'interests': 'Economics',
    'role_id': 20,
    'resume': 'tennyson_resume',
    'bio':
    'Beer practitioner. Freelance zombie enthusiast. Incurable writer. Proud bacon buff. Creator.',
    'image': 'tennyson_image',
    'cover': 'tennyson_cover'
}, {
    'id': 10,
    'name': 'Dante Garland',
    'email': 'dantegarland@gmail.com',
    'linkedin': 'dante-garland',
    'major': MajorEnum.CSNS,
    'grad_year': 2020,
    'current_work': 'Freelance',
    'current_title': 'Freelance web security developer',
    'interests': 'Web security',
    'role_id': 17,
    'resume': 'garland_resume',
    'bio':
    'Professional food fanatic. Certified internet nerd. Freelance travel practitioner. Reader. Zombie fan. Creator.',
    'image': 'garland_image',
    'cover': 'garland_cover'
}, {
    'id': 11,
    'name': 'Terry Reeves',
    'email': 'terryreeves@gmail.com',
    'linkedin': 'terry-reeves',
    'major': MajorEnum.BSSS,
    'grad_year': 2022,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Data analysis',
    'role_id': 26,
    'resume': 'reeves_resume',
    'bio':
    'Pop culture expert. Award-winning student. Tv guru. Unapologetic travel fan. Introvert. Thinker.',
    'image': 'reeves_image',
    'cover': 'reeves_cover'
}, {
    'id': 12,
    'name': 'Mary Murphy',
    'email': 'marymurphy@gmail.com',
    'linkedin': 'mary-murphy',
    'major': MajorEnum.BSNS,
    'grad_year': 2021,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Stock trading',
    'role_id': 26,
    'resume': 'murphy_resume',
    'bio':
    'Amateur travel evangelist. Introvert. Analyst. Wannabe twitteraholic. Subtly charming creator.',
    'image': 'murphy_image',
    'cover': 'murphy_cover'
}, {
    'id': 13,
    'name': 'Sherly Perry',
    'email': 'sherlyperry@gmail.com',
    'linkedin': 'sherly-perry',
    'major': MajorEnum.NSSS,
    'grad_year': 2019,
    'current_work': 'researcher at MIT lab',
    'current_title': 'research product commercialization manager',
    'interests': 'Hiking',
    'role_id': 8,
    'resume': 'perry_resume',
    'bio':
    'Extreme pop culture practitioner. Explorer. Reader. Internet enthusiast. Certified music lover.',
    'image': 'perry_image',
    'cover': 'perry_cover'
}, {
    'id': 14,
    'name': 'Raymond Bennett',
    'email': 'raymondbennett@gmail.com',
    'linkedin': 'raymond-bennett',
    'major': MajorEnum.CSAH,
    'grad_year': 2020,
    'current_work': 'front-end developer at indie game company',
    'current_title': 'developer',
    'interests': 'Shakespear, Web security',
    'role_id': 5,
    'resume': 'bennett_resume',
    'bio':
    'Unapologetic beer aficionado. Pop culture geek. Gamer. Web ninja. Introvert. Avid entrepreneur.',
    'image': 'bennett_image',
    'cover': 'bennett_cover'
}, {
    'id': 15,
    'name': 'Sharon Emerson',
    'email': 'sharonemerson@gmail.com',
    'linkedin': 'sharon-emerson',
    'major': MajorEnum.NSAH,
    'grad_year': 2022,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Astronomy, Horse-back Riding',
    'role_id': 26,
    'resume': 'emerson_resume',
    'bio':
    'Gamer. Wannabe tv expert. Typical web evangelist. Pop cultureaholic. Freelance twitter trailblazer. Alcohol buff. Bacon specialist.',
    'image': 'emerson_image',
    'cover': 'emerson_cover'
}, {
    'id': 16,
    'name': 'Mark Stadler',
    'email': 'markstadler@gmail.com',
    'linkedin': 'mark-stadler',
    'major': MajorEnum.CSNS,
    'grad_year': 2020,
    'current_work': 'Facebook@Seattle',
    'current_title': 'digital marketing/social media analyst',
    'interests': 'Gaming, Soapmaking',
    'role_id': 1,
    'resume': 'stadler_resume',
    'bio':
    'Writer. Student. Professional travel scholar. Amateur twitter nerd. Troublemaker. Future teen idol.',
    'image': 'stadler_image',
    'cover': 'stadler_cover'
}, {
    'id': 17,
    'name': 'Allen Collins',
    'email': 'allencollins@gmail.com',
    'linkedin': 'allen-collins',
    'major': MajorEnum.BSSS,
    'grad_year': 2023,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Soccer, Baseball',
    'role_id': 26,
    'resume': 'collins_resume',
    'bio':
    'Alcohol advocate. Coffee nerd. Hardcore zombie buff. Writer. Falls down a lot. Twitter scholar.',
    'image': 'collins_image',
    'cover': 'collins_cover'
}, {
    'id': 18,
    'name': 'Barbara Johnson',
    'email': 'barbarajohnson@gmail.com',
    'linkedin': 'barbara-johnson',
    'major': MajorEnum.CS,
    'grad_year': 2021,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'History, Ghost Hunting',
    'role_id': 26,
    'resume': 'johnson_resume',
    'bio':
    'Bacon aficionado. Social media fanatic. Troublemaker. Pop cultureaholic. Coffee junkie. Introvert. Travel trailblazer.',
    'image': 'johnson_image',
    'cover': 'johnson_cover'
}, {
    'id': 19,
    'name': 'Denise Rojas',
    'email': 'deniserojas@gmail.com',
    'linkedin': 'denise-rojas',
    'major': MajorEnum.NSAH,
    'grad_year': 2019,
    'current_work': 'freelance',
    'current_title': 'designer',
    'interests': 'Canoeing, Editing',
    'role_id': 23,
    'resume': 'rojas_resume',
    'bio':
    'Student. Freelance twitter expert. Certified coffee advocate. Problem solver. Proud thinker.',
    'image': 'rojas_image',
    'cover': 'rojas_cover'
}, {
    'id': 20,
    'name': 'Tommy Patton',
    'email': 'tommypatton@gmail.com',
    'linkedin': 'tommy-patton',
    'major': MajorEnum.BS,
    'grad_year': 2022,
    'current_work': 'student',
    'current_title': 'student',
    'interests': 'Animation',
    'role_id': 26,
    'resume': 'patton_resume',
    'bio':
    'Typical gamer. Subtly charming travel guru. Pop culture expert. Passionate zombie specialist.',
    'image': 'patton_image',
    'cover': 'patton_cover'
}]

Companies_to_add = [{
    'id':
    1,
    'name':
    'Google',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/11/Google_logo_logotype_text.png'
}, {
    'id':
    2,
    'name':
    'Amazon',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo_logotype.png'
}, {
    'id':
    3,
    'name':
    'Facebook',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/10/Facebook_logo_logotype.png'
}, {
    'id':
    4,
    'name':
    'Apple',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2018/02/apple_logo_small.png'
}, {
    'id':
    5,
    'name':
    'Microsoft',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/10/Microsoft_logo_logotype.png'
}, {
    'id':
    6,
    'name':
    'IBM',
    'logo':
    'https://atlascorps.org/wp-content/uploads/2018/03/IBM-Logo.png'
}, {
    'id':
    7,
    'name':
    'Walmart',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/11/Walmart_logo_logotype.png'
}, {
    'id':
    8,
    'name':
    'Toyota',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/11/Toyota_logo_logotype.png'
}, {
    'id':
    9,
    'name':
    'MorganStanley',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/11/Morgan_Stanley_logo_logotype.png'
}, {
    'id':
    10,
    'name':
    '3M',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/10/3M_logo_logotype.png'
}, {
    'id':
    11,
    'name':
    'Hilton',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/11/Hilton_logo_logotype.png'
}, {
    'id':
    12,
    'name':
    'ByteDance',
    'logo':
    'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/c88709273905c51985a84b37fe419ba9.jpg'
}, {
    'id':
    13,
    'name':
    'Philips',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/11/Philips_logo_logotype.png'
}, {
    'id':
    14,
    'name':
    'Tesla',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2018/02/tesla-motors-logo_small.png'
}, {
    'id':
    15,
    'name':
    'HSBC',
    'logo':
    'https://cdn.hsbc.com.tw/etc/designs/dpws/common/social/logo/Portrait-736x1128px.jpg'
}, {
    'id':
    16,
    'name':
    'Verizon',
    'logo':
    'https://e7.pngegg.com/pngimages/492/922/png-clipart-logo-verizon-wireless-brand-font-telecom-tower-text-logo.png'
}, {
    'id':
    17,
    'name':
    'Sony',
    'logo':
    'https://logo-logos.com/wp-content/uploads/2016/10/Sony_logo_logotype.png'
}]

CandidatePortal_to_add = [{
    'id': 1,
    'user_id': 2,
    'description':
    'decent communication skills, editor/designer/public relations/public speech',
    'role_type': JobTypeEnum.parttime,
    'startdate': datetime.date(2021, 5, 1),
    'active_looking': LookingEnum.yes
}, {
    'id': 2,
    'user_id': 4,
    'description': 'front-end developer/UI designer',
    'role_type': JobTypeEnum.parttime,
    'startdate': datetime.date(2021, 4, 5),
    'active_looking': LookingEnum.yes
}, {
    'id': 3,
    'user_id': 5,
    'description': 'research assistant/research project manager',
    'role_type': JobTypeEnum.fulltime,
    'startdate': datetime.date(2021, 4, 15),
    'active_looking': LookingEnum.yes
}, {
    'id': 4,
    'user_id': 11,
    'description':
    'social responsibility program manager/event designer/psychology-related projects/HR',
    'role_type': JobTypeEnum.contract,
    'startdate': datetime.date(2021, 3, 10),
    'active_looking': LookingEnum.yes
}, {
    'id': 5,
    'user_id': 12,
    'description': 'financial consultant/accounting assistant',
    'role_type': JobTypeEnum.fulltime,
    'startdate': datetime.date(2021, 4, 11),
    'active_looking': LookingEnum.yes
}, {
    'id': 6,
    'user_id': 14,
    'description': 'data analyst/information analyst',
    'role_type': JobTypeEnum.parttime,
    'startdate': datetime.date(2021, 4, 23),
    'active_looking': LookingEnum.no
}, {
    'id': 7,
    'user_id': 15,
    'description': 'freelance designer',
    'role_type': JobTypeEnum.parttime,
    'startdate': datetime.date(2021, 3, 19),
    'active_looking': LookingEnum.yes
}, {
    'id': 8,
    'user_id': 17,
    'description': 'product management assistant/sales management/marketing',
    'role_type': JobTypeEnum.other,
    'startdate': datetime.date(2021, 4, 22),
    'active_looking': LookingEnum.yes
}, {
    'id': 9,
    'user_id': 18,
    'description': 'backend developer/system engineer',
    'role_type': JobTypeEnum.parttime,
    'startdate': datetime.date(2021, 4, 10),
    'active_looking': LookingEnum.yes
}, {
    'id': 10,
    'user_id': 20,
    'description': 'outreach/digital marketing',
    'role_type': JobTypeEnum.other,
    'startdate': datetime.date(2021, 4, 20),
    'active_looking': LookingEnum.yes
}]

Roles_to_add = [{
    'id': 1,
    'role_name': 'digital marketing analyst'
}, {
    'id': 2,
    'role_name': 'user experience designer'
}, {
    'id': 3,
    'role_name': 'front-end designer'
}, {
    'id': 4,
    'role_name': 'back-end designer'
}, {
    'id': 5,
    'role_name': 'software developer'
}, {
    'id': 6,
    'role_name': 'system engineer'
}, {
    'id': 7,
    'role_name': 'web developer'
}, {
    'id': 8,
    'role_name': 'product manager'
}, {
    'id': 9,
    'role_name': 'public relations'
}, {
    'id': 10,
    'role_name': 'HR assistant'
}, {
    'id': 11,
    'role_name': 'brand manager'
}, {
    'id': 12,
    'role_name': 'sales manager'
}, {
    'id': 13,
    'role_name': 'program manager'
}, {
    'id': 14,
    'role_name': 'sales associate'
}, {
    'id': 15,
    'role_name': 'accounting assistant'
}, {
    'id': 16,
    'role_name': 'customer service manager'
}, {
    'id': 17,
    'role_name': 'operations analyst'
}, {
    'id': 18,
    'role_name': 'auditor'
}, {
    'id': 19,
    'role_name': 'assistant engineer'
}, {
    'id': 20,
    'role_name': 'outreach manager'
}, {
    'id': 21,
    'role_name': 'data analyst'
}, {
    'id': 22,
    'role_name': 'research assistant'
}, {
    'id': 23,
    'role_name': 'designer'
}, {
    'id': 24,
    'role_name': 'counselor'
}, {
    'id': 25,
    'role_name': 'editor'
}, {
    'id': 26,
    'role_name': 'student'
}]

CandidatePortalRoles_to_add = [{
    'cp_id': 1,
    'role_id': 9
}, {
    'cp_id': 1,
    'role_id': 10
}, {
    'cp_id': 1,
    'role_id': 20
}, {
    'cp_id': 1,
    'role_id': 23
}, {
    'cp_id': 1,
    'role_id': 25
}, {
    'cp_id': 2,
    'role_id': 2
}, {
    'cp_id': 2,
    'role_id': 5
}, {
    'cp_id': 2,
    'role_id': 6
}, {
    'cp_id': 2,
    'role_id': 7
}, {
    'cp_id': 3,
    'role_id': 13
}, {
    'cp_id': 3,
    'role_id': 22
}, {
    'cp_id': 4,
    'role_id': 1
}, {
    'cp_id': 4,
    'role_id': 9
}, {
    'cp_id': 4,
    'role_id': 10
}, {
    'cp_id': 4,
    'role_id': 11
}, {
    'cp_id': 4,
    'role_id': 20
}, {
    'cp_id': 4,
    'role_id': 23
}, {
    'cp_id': 5,
    'role_id': 14
}, {
    'cp_id': 5,
    'role_id': 15
}, {
    'cp_id': 5,
    'role_id': 18
}, {
    'cp_id': 5,
    'role_id': 24
}, {
    'cp_id': 6,
    'role_id': 6
}, {
    'cp_id': 6,
    'role_id': 21
}, {
    'cp_id': 7,
    'role_id': 13
}, {
    'cp_id': 7,
    'role_id': 23
}, {
    'cp_id': 7,
    'role_id': 25
}, {
    'cp_id': 8,
    'role_id': 1
}, {
    'cp_id': 8,
    'role_id': 8
}, {
    'cp_id': 8,
    'role_id': 9
}, {
    'cp_id': 8,
    'role_id': 11
}, {
    'cp_id': 8,
    'role_id': 12
}, {
    'cp_id': 8,
    'role_id': 14
}, {
    'cp_id': 8,
    'role_id': 20
}, {
    'cp_id': 9,
    'role_id': 4
}, {
    'cp_id': 9,
    'role_id': 5
}, {
    'cp_id': 9,
    'role_id': 6
}, {
    'cp_id': 9,
    'role_id': 7
}, {
    'cp_id': 10,
    'role_id': 1
}, {
    'cp_id': 10,
    'role_id': 11
}, {
    'cp_id': 10,
    'role_id': 20
}]

OtherCompanies_to_add = [{
    'id': 1,
    'user_id': 1,
    'company_id': 1
}, {
    'id': 2,
    'user_id': 1,
    'company_id': 2
}, {
    'id': 3,
    'user_id': 1,
    'company_id': 3
}, {
    'id': 4,
    'user_id': 1,
    'company_id': 4
}, {
    'id': 5,
    'user_id': 1,
    'company_id': 5
}, {
    'id': 6,
    'user_id': 1,
    'company_id': 6
}, {
    'id': 7,
    'user_id': 1,
    'company_id': 7
}, {
    'id': 8,
    'user_id': 1,
    'company_id': 8
}, {
    'id': 9,
    'user_id': 1,
    'company_id': 9
}, {
    'id': 10,
    'user_id': 2,
    'company_id': 10
}, {
    'id': 11,
    'user_id': 2,
    'company_id': 13
}, {
    'id': 12,
    'user_id': 3,
    'company_id': 6
}, {
    'id': 13,
    'user_id': 3,
    'company_id': 11
}, {
    'id': 14,
    'user_id': 3,
    'company_id': 12
}, {
    'id': 15,
    'user_id': 11,
    'company_id': 4
}, {
    'id': 16,
    'user_id': 5,
    'company_id': 11
}, {
    'id': 17,
    'user_id': 5,
    'company_id': 7
}, {
    'id': 18,
    'user_id': 6,
    'company_id': 1
}, {
    'id': 19,
    'user_id': 6,
    'company_id': 2
}, {
    'id': 20,
    'user_id': 6,
    'company_id': 3
}, {
    'id': 21,
    'user_id': 7,
    'company_id': 6
}, {
    'id': 22,
    'user_id': 7,
    'company_id': 14
}, {
    'id': 23,
    'user_id': 7,
    'company_id': 17
}, {
    'id': 24,
    'user_id': 8,
    'company_id': 12
}, {
    'id': 25,
    'user_id': 11,
    'company_id': 6
}, {
    'id': 26,
    'user_id': 9,
    'company_id': 3
}, {
    'id': 27,
    'user_id': 9,
    'company_id': 9
}, {
    'id': 28,
    'user_id': 10,
    'company_id': 4
}, {
    'id': 29,
    'user_id': 12,
    'company_id': 16
}, {
    'id': 30,
    'user_id': 13,
    'company_id': 3
}, {
    'id': 31,
    'user_id': 13,
    'company_id': 8
}, {
    'id': 32,
    'user_id': 14,
    'company_id': 17
}, {
    'id': 33,
    'user_id': 14,
    'company_id': 2
}, {
    'id': 34,
    'user_id': 15,
    'company_id': 15
}, {
    'id': 35,
    'user_id': 16,
    'company_id': 8
}, {
    'id': 36,
    'user_id': 16,
    'company_id': 12
}, {
    'id': 37,
    'user_id': 18,
    'company_id': 17
}, {
    'id': 38,
    'user_id': 18,
    'company_id': 10
}, {
    'id': 39,
    'user_id': 19,
    'company_id': 11
}, {
    'id': 40,
    'user_id': 20,
    'company_id': 9
}]

UserPastExperience_to_add = [{
    'id': 1,
    'user_id': 1,
    'company_id': 1,
    'role_id': 13,
    'startdate': datetime.date(2017, 5, 30),
    'enddate': datetime.date(2017, 7, 30),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 2,
    'user_id': 1,
    'company_id': 2,
    'role_id': 21,
    'startdate': datetime.date(2018, 6, 15),
    'enddate': datetime.date(2018, 8, 12),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 3,
    'user_id': 2,
    'company_id': 10,
    'role_id': 9,
    'startdate': datetime.date(2019, 12, 25),
    'enddate': datetime.date(2020, 2, 15),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 4,
    'user_id': 2,
    'company_id': 13,
    'role_id': 23,
    'startdate': datetime.date(2020, 9, 15),
    'enddate': datetime.date(2020, 12, 20),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 5,
    'user_id': 3,
    'company_id': 6,
    'role_id': 1,
    'startdate': datetime.date(2017, 8, 20),
    'enddate': datetime.date(2017, 11, 5),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 6,
    'user_id': 3,
    'company_id': 11,
    'role_id': 11,
    'startdate': datetime.date(2018, 4, 1),
    'enddate': datetime.date(2018, 8, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 7,
    'user_id': 3,
    'company_id': 12,
    'role_id': 12,
    'startdate': datetime.date(2019, 9, 15),
    'enddate': datetime.date(2021, 5, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 8,
    'user_id': 4,
    'company_id': 5,
    'role_id': 4,
    'startdate': datetime.date(2021, 1, 5),
    'enddate': datetime.date(2021, 4, 5),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 9,
    'user_id': 5,
    'company_id': 11,
    'role_id': 13,
    'startdate': datetime.date(2019, 7, 20),
    'enddate': datetime.date(2019, 10, 3),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 10,
    'user_id': 5,
    'company_id': 7,
    'role_id': 22,
    'startdate': datetime.date(2020, 5, 3),
    'enddate': datetime.date(2020, 8, 16),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 11,
    'user_id': 6,
    'company_id': 1,
    'role_id': 8,
    'startdate': datetime.date(2016, 7, 1),
    'enddate': datetime.date(2016, 8, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 12,
    'user_id': 6,
    'company_id': 2,
    'role_id': 5,
    'startdate': datetime.date(2017, 6, 20),
    'enddate': datetime.date(2017, 9, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 13,
    'user_id': 6,
    'company_id': 3,
    'role_id': 4,
    'startdate': datetime.date(2018, 5, 4),
    'enddate': datetime.date(2018, 7, 12),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 14,
    'user_id': 7,
    'company_id': 6,
    'role_id': 25,
    'startdate': datetime.date(2016, 12, 5),
    'enddate': datetime.date(2017, 2, 4),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 15,
    'user_id': 7,
    'company_id': 14,
    'role_id': 23,
    'startdate': datetime.date(2017, 3, 24),
    'enddate': datetime.date(2017, 5, 30),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 16,
    'user_id': 7,
    'company_id': 17,
    'role_id': 20,
    'startdate': datetime.date(2017, 10, 5),
    'enddate': datetime.date(2018, 6, 5),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 17,
    'user_id': 8,
    'company_id': 12,
    'role_id': 21,
    'startdate': datetime.date(2019, 1, 2),
    'enddate': datetime.date(2019, 5, 2),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 18,
    'user_id': 8,
    'company_id': 13,
    'role_id': 5,
    'startdate': datetime.date(2020, 6, 18),
    'enddate': datetime.date(2020, 8, 19),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 19,
    'user_id': 9,
    'company_id': 3,
    'role_id': 15,
    'startdate': datetime.date(2019, 7, 1),
    'enddate': datetime.date(2019, 8, 10),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 20,
    'user_id': 9,
    'company_id': 9,
    'role_id': 18,
    'startdate': datetime.date(2020, 8, 20),
    'enddate': datetime.date(2022, 7, 20),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 21,
    'user_id': 10,
    'company_id': 4,
    'role_id': 7,
    'startdate': datetime.date(2018, 12, 3),
    'enddate': datetime.date(2019, 5, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 22,
    'user_id': 10,
    'company_id': 15,
    'role_id': 7,
    'startdate': datetime.date(2019, 7, 20),
    'enddate': datetime.date(2019, 8, 15),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 23,
    'user_id': 11,
    'company_id': 4,
    'role_id': 20,
    'startdate': datetime.date(2020, 1, 4),
    'enddate': datetime.date(2020, 4, 13),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 24,
    'user_id': 11,
    'company_id': 6,
    'role_id': 10,
    'startdate': datetime.date(2020, 10, 2),
    'enddate': datetime.date(2021, 1, 7),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 25,
    'user_id': 12,
    'company_id': 10,
    'role_id': 14,
    'startdate': datetime.date(2019, 7, 4),
    'enddate': datetime.date(2019, 8, 20),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 26,
    'user_id': 12,
    'company_id': 16,
    'role_id': 12,
    'startdate': datetime.date(2020, 3, 9),
    'enddate': datetime.date(2020, 8, 9),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 27,
    'user_id': 13,
    'company_id': 11,
    'role_id': 22,
    'startdate': datetime.date(2018, 7, 1),
    'enddate': datetime.date(2018, 8, 22),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 28,
    'user_id': 13,
    'company_id': 3,
    'role_id': 19,
    'startdate': datetime.date(2019, 7, 1),
    'enddate': datetime.date(2019, 9, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 29,
    'user_id': 13,
    'company_id': 8,
    'role_id': 21,
    'startdate': datetime.date(2020, 6, 30),
    'enddate': datetime.date(2020, 8, 15),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 30,
    'user_id': 14,
    'company_id': 17,
    'role_id': 6,
    'startdate': datetime.date(2019, 12, 5),
    'enddate': datetime.date(2020, 2, 6),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 31,
    'user_id': 14,
    'company_id': 2,
    'role_id': 5,
    'startdate': datetime.date(2020, 6, 30),
    'enddate': datetime.date(2020, 8, 30),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 32,
    'user_id': 15,
    'company_id': 15,
    'role_id': 1,
    'startdate': datetime.date(2020, 5, 14),
    'enddate': datetime.date(2020, 7, 8),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 33,
    'user_id': 16,
    'company_id': 8,
    'role_id': 2,
    'startdate': datetime.date(2019, 6, 18),
    'enddate': datetime.date(2019, 9, 24),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 34,
    'user_id': 16,
    'company_id': 12,
    'role_id': 3,
    'startdate': datetime.date(2020, 5, 30),
    'enddate': datetime.date(2020, 10, 1),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 35,
    'user_id': 17,
    'company_id': 9,
    'role_id': 15,
    'startdate': datetime.date(2020, 9, 20),
    'enddate': datetime.date(2020, 11, 20),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 36,
    'user_id': 18,
    'company_id': 17,
    'role_id': 7,
    'startdate': datetime.date(2019, 6, 30),
    'enddate': datetime.date(2019, 7, 30),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 37,
    'user_id': 18,
    'company_id': 10,
    'role_id': 24,
    'startdate': datetime.date(2020, 7, 20),
    'enddate': datetime.date(2020, 9, 20),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 38,
    'user_id': 19,
    'company_id': 11,
    'role_id': 9,
    'startdate': datetime.date(2020, 6, 2),
    'enddate': datetime.date(2020, 7, 7),
    'tag': ReferralTagEnum.Referral
}, {
    'id': 39,
    'user_id': 19,
    'company_id': 15,
    'role_id': 10,
    'startdate': datetime.date(2020, 11, 4),
    'enddate': datetime.date(2021, 1, 5),
    'tag': ReferralTagEnum.Interview
}, {
    'id': 40,
    'user_id': 20,
    'company_id': 9,
    'role_id': 17,
    'startdate': datetime.date(2020, 6, 26),
    'enddate': datetime.date(2020, 8, 23),
    'tag': ReferralTagEnum.Referral
}]

keys = [(Users_to_add, Users), (Companies_to_add, Companies),
        (CandidatePortal_to_add, CandidatePortal), (Roles_to_add, Roles),
        (CandidatePortalRoles_to_add, CandidatePortalRoles),
        (OtherCompanies_to_add, OtherCompanies),
        (UserPastExperience_to_add, UserPastExperience)]

# insert data
for dict_to_add, table in keys:
    for dict_row in dict_to_add:
        try:
            stmt = table(**dict_row)
            db.session.add(stmt)
            db.session.commit()
        except:
            db.session.rollback()
            raise
        finally:
            db.session.close()