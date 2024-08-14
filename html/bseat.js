const students = [
    '강능요',
    '강민관',
    '강재준',
    '길유정',
    '김도희',
    '김미진',
    '김민서',
    '김예나',
    '김은서',
    '김인선',
    '김현수',
    '남승혁',
    '남인우',
    '문규빈',
    '문서아',
    '문해빈',
    '박시온',
    '박준용',
    '신민주',
    '이규호',
    '임형석',
    '장다연',
    '정성엽',
    '정성현',
    '정재윤',
    '조경은',
    '조민석',
    '조서현',
    '천혜민',
    '최강희',
  ];
  const inps = document.getElementsByTagName('input');
  console.log('***********', inps);
  
  // const seats = [...inps].filter(inp => !inp.value);
  // console.log('🚀  seats:', seats);
  // for (let i = 0; i < students.length; i++) seats[i].value = students[i];
  
  function set(student) {
    const seats = [...inps].filter(inp => !inp.value);
    // console.log('🚀  seats:', seats.length);
    const seat = Math.floor(Math.random() * seats.length);
    // console.log('🚀  seat:', seat);
    seats[seat].value = student;
  }
  
  function start() {
    let idx = 0;
    const intl = setInterval(() => {
      set(students[idx++]);
      if (idx >= students.length) clearInterval(intl);
    }, 500);
  }