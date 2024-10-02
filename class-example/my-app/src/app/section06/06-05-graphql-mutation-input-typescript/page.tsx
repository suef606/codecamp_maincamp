"use client";

import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    #타입적는곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
      #전달할 변수 적는곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      //variables 이게 $역할을 함
      variables: {
        mywriter: writer,
        mytitle: title,
        mycontents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  //한 줄일때는 괄호() 필요없음
  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
    </>
  );
}
