const TypescriptExample = () => {

  // 타입추론
  let aaa = "안녕하세요"
  aaa = 3
  
  //타입명시
  let bbb: string = "반갑습니다"
  bbb = 10

  //타입 명시가 필요한 상황
  let ccc = number | string = 1000
  ccc = "1000원"

  //불린타입
  let eee: boolean = true
  eee = false
  eee = "false" // true로 작동함

  //배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]
  let ggg: string[] = ["철수", "영희", "훈이", 10]
  let hhh = [1, 2, 3, 4, 5, "안녕하세요"] //타입을 추런해서 어떤 타입인지 역으로 알아내기


  interface 철수의타입 {
    name: string
    age: number 
  }
  //객체타입
  const profile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
  }
  profile.name = "훈이"
  profile.age = "8살"
  profile.school = "공룡초등학교"
  profile.hobby = "수영"

}