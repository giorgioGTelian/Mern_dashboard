import { v4 as uuidv4 } from "uuid";
  
  export const dataUser = [
    {
      _id: "63701cc1f03239c72c00017f",
      name: "Emma Powerful",
      email: "kranstead0@narod.ru",
      password: "omMDCh",
      city: "Nurabelen",
      state: null,
      country: "ID",
      occupation: "Computer Systems Analyst I",
      phoneNumber: "8346315874",
      transactions: [
        "63701d74f0323986f3000158",
        "63701d74f03239d40b00007e",
        "63701d74f03239867500014b",
        "63701d74f032398675000152",
      ],
      role: "superadmin",
    },
    {
      _id: "63701cc1f03239c72c000180",
      name: "Marilyn",
      email: "mdonlon1@hostgator.com",
      password: "XRYBnKAfm",
      city: "Zhanghekou",
      state: null,
      country: "CN",
      occupation: "Food Chemist",
      phoneNumber: "9981906117",
      transactions: [
        "63701d74f03239b7f7000027",
        "63701d74f03239db69000153",
        "63701d74f03239569400002d",
        "63701d74f032394c4900014b",
      ],
      role: "user",
    },
    {
      _id: "63701cc1f03239c72c000181",
      name: "Olly",
      email: "oveneur2@marketwatch.com",
      password: "WwDjOlH",
      city: "Muang Sam Sip",
      state: null,
      country: "TH",
      occupation: "Staff Scientist",
      phoneNumber: "3868813669",
      transactions: [
        "63701d74f03239d40b00008c",
        "63701d74f03239b7f700001e",
        "63701d74f03239867500012e",
        "63701d74f03239db69000132",
        "63701d74f032390a34000340",
        "63701d74f03239d40b000087",
      ],
      role: "admin",
    },
    {
      _id: "63701cc1f03239b7f700000d",
      name: "Sosanna",
      email: "smaskew11@cloudflare.com",
      password: "JwJ8KAu",
      city: "Gulong",
      state: null,
      country: "CN",
      occupation: "Occupational Therapist",
      phoneNumber: "1837060566",
      transactions: [
        "63701d74f03239bef000013e",
        "63701d74f03239f09e00019c",
        "63701d74f032398675000144",
        "63701d74f03239f09e0001a4",
        "63701d74f03239c72c0001b6",
      ],
      role: "user",
    },
    {
      _id: "63701cc1f03239b7f700000e",
      name: "Laura Emiliani",
      email: "swelbeck12@ycombinator.com",
      password: "RSjzmAjnq",
      city: "Sangoleng",
      state: null,
      country: "ID",
      occupation: "Pharmacist",
      phoneNumber: "7036619983",
      transactions: [
        "63701d74f03239d81e000027",
        "63701d74f032396b8e00002c",
        "63701d74f032396b8e000037",
        "63701d74f03239d81e00002a",
        "63701d74f03239c72c0001ba",
        "63701d74f032399c00000151",
        "63701d74f03239c72c0001a1",
      ],
      role: "superadmin",
    },
  ];

  export const dataStudent = [
    {
      id: uuidv4(),
      name: "gianni luigi",
      email: "",
      password: "",
      phoneNumber: "",
      subjects: ["math", "english", "science"],
      grade: 10,
      school: "sma 1",
      client:[],
      teachers: [],
      lessonsPackages: [],
      lessons: [],
      documents: null,
      notes: "",
    },
    {
      id: uuidv4(),
      name: "maria bianchi",
      email: "",
      password: "",
      phoneNumber: "",
      subjects: ["history", "english", "science"],
      grade: 11,
      school: "sma 2",
      client:[],
      teachers: [],
      lessonsPackages: [],
      lessons: [],
      documents: null,
      notes: "",
    },
    {
      id: uuidv4(),
      name: "franco rossi",
      email: "",
      password: "",
      phoneNumber: "",
      subjects: ["math", "italian", "science"],
      grade: 12,
      school: "sma 3",
      teachers: [],
      lessonsPackages: [],
      lessons: [],
      documents: null,
      notes: "",
    },
    {
      id: uuidv4(),
      name: "lucia verdi",
      email: "",
      password: "",
      phoneNumber: "",
      subjects: ["math", "english", "biology"],
      grade: 10,
      school: "sma 4",
      teachers: [],
      lessonsPackages: [],
      lessons: [],
      documents: null,
      notes: "",
    },
    {
      id: uuidv4(),
      name: "carlo bruno",
      email: "",
      password: "",
      phoneNumber: "",
      subjects: ["physics", "english", "science"],
      grade: 11,
      school: "sma 5",
      teachers: [],
      lessonsPackages: [],
      lessons: [],
      documents: null,
      notes: "",
    },
  ];

  export const dataTeacher = [
    {
      id: uuidv4(),
      name: "Teacher 1",
      phoneNumberTeacher: "",
      emailTeacher: "", 
      subjects: [],
      students: ["gianni luigi"],
      teacherDocuments: [],
      teacherPayments: [],
      teacherBillings: [ "Ritenuta d'acconto del 20%"],
      teacherNotes: "",
    },
    {
      id: uuidv4(),
      name: "Teacher 2",
      phoneNumberTeacher: "",
      emailTeacher: "", 
      subjects: [],
      students: ["gianni luigi"],
      teacherDocuments: [],
      teacherPayments: [],
      teacherBillings: [ "Ritenuta d'acconto del 20%"],
      teacherNotes: "", 
    },
  ];

  export const dataLessonsPackages = [
    {
      id: uuidv4(),
      name: "lezione singola",
      price: 30,
      durationPackage: 1,
      counterLessons: 1,
      lessons: [
        {
          _id: uuidv4(),
          durationLesson: 1,
          lessonsName: [{
              name: "Matematica",
              description: "",
              subjectColor: "#f33535",
            }
          ] 
        }
      ]
    },
    {
      id: uuidv4(),
      name: "pacchetto da 5 lezioni",
      price: 120,
      durationPackage: 5,
      counterLessons: 5,
      lessons: [
        {
          _id: uuidv4(),
          durationLesson: 1,
          lessonsName: [{
              name: "Inglese",
              description: "",
              subjectColor: "#343DEB",
            }
          ] 
        }
      ]
    },
    {
      id: uuidv4(),
      name: "pacchetto da 10 lezioni",
      price: 240,
      durationPackage: 10,
      counterLessons: 10,
      lessons: [
        {
          _id: uuidv4(),
          durationLesson: 1,
          lessonsName: [{
              name: "Tedesco",
              description: "",
              subjectColor: "#010101",
            }
          ] 
        }
      ]
    },
  ];

  export const dataLessons = [
    {
      id: uuidv4(),
      name: "Matematica"
    },
    {
      id: uuidv4(),
      name: "Informatica"
    },
    {
      id: uuidv4(),
      name: "Inglese"
    },
    {
      id: uuidv4(),
      name: "Storia"
    },
    {
      id: uuidv4(),
      name: "Tecnologia"
    },
  ];

  export const dataSubjects = [
    {
      id: uuidv4(),
      name: "Matematica",
      description: "",
      subjectColor: "#f33535",
    },
    {
      id: uuidv4(),
      name: "Inglese",
      description: "",
      subjectColor: "#343DEB",
    },
    {
      id: uuidv4(),
      name: "Tedesco",
      description: "",
      subjectColor: "#010101",
    },
    {
      id: uuidv4(),
      name: "Economia",
      description: "",
      subjectColor: "#F38F35",
    },
  ];

  export const dataClassRoom = [
    {
      id: uuidv4(),
      nameClassroom: "Sala 1",
      descriptionClassroom: "",
      locationClassroom: "piazza delle erbe",
      cityClassroom: "Faenza",
      numberOfStudents: 3,
      students: [],
      teacher: [],
      lessons: [],
      notes: "",
    },
    {
      id: uuidv4(),
      nameClassroom: "Sala 2",
      descriptionClassroom: "",
      locationClassroom: "piazza delle erbe",
      cityClassroom: "Faenza",
      numberOfStudents: 4,
      students: [],
      teacher: [],
      lessons: [],
      notes: "",
    },
  ];