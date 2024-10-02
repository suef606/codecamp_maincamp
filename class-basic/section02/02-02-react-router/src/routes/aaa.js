import { Link } from 'react-router-dom'

const Aaa = () => {
  return (
    <>
      <div>Aaa 페이지 입니다.</div>

      {/* 1. 리액트의 이동방식 : 현재페이지에서 js 태그로만 바꿔치기  => spa */}
      <Link to="/bbb">BBB 페이지로 갈래요</Link>

      {/* 2. 고전html 이동방식 : html페이지 새로접속함(느림) = mpa */}
      <a href="/bbb">bbb 페이지로 이동</a>
    </>
  )
}

export default Aaa