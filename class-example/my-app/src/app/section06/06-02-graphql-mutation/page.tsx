"use client";

import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(
      writer: "쑤"
      title: "안녕하세요제목!"
      contents: "반갑습니다"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수();
    console.log(result);
  };
  //한 줄일때는 괄호() 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
