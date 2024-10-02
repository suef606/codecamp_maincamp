"use client";

import BoardsWrite from "@/components/09-04-boards-validation";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

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

export default function BoardsDetailEdit() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { mynumber: Number(params.number) },
  });

  return <BoardsWrite isEdit={true} data={data} />;
  //data={data} => 실무에서는 같은 이름을 많이씀
}
