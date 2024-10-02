"use client";

import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      //variables 이게 $역할을 함
      variables: {
        seller: "철수",
        createProductInput: {
          name: "휴대용 모니터",
          detail: "터치가 되는 모니터 입니다.",
          price: 180000,
        },
      },
    });
    console.log(result);
  };
  //한 줄일때는 괄호() 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
