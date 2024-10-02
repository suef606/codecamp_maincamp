"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      number
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const result = useQuery(FETCH_BOARDS);
  //useQuery는 아폴로클라이언트에서 사용을 해주고 잇음

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(result.data);

  const onClickDelete = (event) => {
    // 삭제 api를 만들어야할 것
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          {/* 1. 특별한 이유가 없으면? Fragment로 감싸기 <div/>는 1개 더 그러야하니까 */}
          {/* 2. 프레그먼트는? <></>, <Fragment></Fragment> */}
          {/* 3. 프레그먼트에 key를 입력하려면? <Fragment key={1}> </Fragment> */}
          {/* 4. index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않음 */}
          {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않음 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
