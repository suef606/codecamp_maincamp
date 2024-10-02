"use client";

import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

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

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $mynumber: Int
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    updateBoard(
      number: $mynumber
      writer: $mywriter
      title: $mytitle
      contents: $mycontents
    ) {
      _id
      number
      message
    }
  }
`;

export default function BoardsWrite(props) {
  const router = useRouter();
  const params = useParams();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기 (등록하기 함수)
    const result = await 나의함수({
      //variables 이게 $역할을 함
      variables: {
        mywriter: writer,
        mytitle: title,
        mycontents: contents,
      },
    });
    console.log(result);
    alert("등록이 완료됐습니다.");
    router.push(
      `/section09/09-04-boards-validation/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables = {
      mynumber: Number(params.number),
    };
    if (writer) myvariables.mywriter = writer;
    if (title) myvariables.mytitle = title;
    if (contents) myvariables.mycontents = contents;
    //여기서 수정하기 하자

    const result = await updateBoard({
      variables: myvariables,
    });
    console.log(result);
    alert("수정이 완료됐습니다.");
    router.push(
      `/section09/09-04-boards-validation/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자:{" "}
      <input
        type="text"
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />{" "}
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {/* 등록하기면 onclicksubmit / 수정하기면 onclickupdate로 실행하라  */}
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
