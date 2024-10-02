"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloSetting(props: IApolloSetting) {
  const client = new ApolloClient({
    uri: "http://main-example.codebootcamp.co.kr/graphql",
    //end point
    //숙제할때는 주소 example 이 아니라 practice로 이용
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
