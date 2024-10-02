"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  //구버전 방식
  // const router = useRouter()
  // router.push("")
  // router.query.qqq

  //신버전 방식
  const params = useParams();

  // params 값 확인
  console.log(params.number); // 이 위치에 찍으면 됩니다.

  const { data } = useQuery(FETCH_BOARD, {
    variables: { mynumber: Number(params.number) },
  });
  //useQuery는 아폴로클라이언트에서 사용을 해주고 잇음

  console.log(data);
  return (
    <div>
      <div>1번 게시글 상세페이지 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* 옵셔널체이닝 */}

      <div>내용: {data ? data.fetchBoard.contents : ""}</div>
    </div>
  );
}
