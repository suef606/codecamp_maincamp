"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);
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
