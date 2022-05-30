const BASE_URL = "http://172.20.10.10";
export const AUTH_URL = `${BASE_URL}:3000/api/v1`;

const API = "http://172.20.10.10:8080/v1/graphql";
export const fetchBookInfo = async () => {
  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    });

    return await result.json();
  }

  const operationsDoc = `
  query MyQuery {
    books(order_by: {title: desc}) {
      author
      title
      publisher
      price
      isbn
      cover
      genre
    }
  }  
  `;

  function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, "MyQuery", {});
  }

  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  return startFetchMyQuery();
};

export const fetchBookInfo2 = async isbn => {
  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    });

    return await result.json();
  }

  const operationsDoc = `
  query MyQuery {
    books(where: {isbn: {_eq: "${isbn}"}}) {
      price
      title
      publisher
      available_quantity
      author
      cover
    }
  }
`;

  function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, "MyQuery", {});
  }

  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  return startFetchMyQuery();
};

export const fetchSearch = async text => {
  /*
This is an example snippet - you should consider tailoring it
to your service.
*/

  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    });

    return await result.json();
  }

  const operationsDoc = `
  query MyQuery {
    books(where: {title: {_iregex: "${text}"}}, order_by: {title: desc}) {
      author
      price
      title
      cover
    }
  }
`;

  function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, "MyQuery", {});
  }

  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  return startFetchMyQuery();
};

export const fetchInsertJumbotron = async (title, price, quantity) => {
  /*
This is an example snippet - you should consider tailoring it
to your service.
*/

  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    });

    return await result.json();
  }

  const operationsDoc = `
  mutation MyMutation {
    insert_orders_one(object: {title: "${title}", price: ${price},quantity:${quantity}}) {
      id
    }
  }
`;
  console.log(operationsDoc);
  function executeMyMutation() {
    return fetchGraphQL(operationsDoc, "MyMutation", {});
  }

  async function startExecuteMyMutation() {
    const { errors, data } = await executeMyMutation();

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  return startExecuteMyMutation();
};
export const fetchJumbotron = async () => {
  /*
This is an example snippet - you should consider tailoring it
to your service.
*/

  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    });

    return await result.json();
  }

  const operationsDoc = `
  query MyQuery {
    books {
      author
      cover
      edition
      genre
      price
      publication_date
      publisher
    }
    orders {
      title
      price
      quantity
    }
  }
`;

  function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, "MyQuery", {});
  }

  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  return startFetchMyQuery();
};

export const fetchDeleteJumbotron = async () => {
  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    });

    return await result.json();
  }

  const operationsDoc = `
  mutation MyMutation3($title: String_comparison_exp = {}) {
    delete_orders(where: {title: "新概念英语第一册"}) {
      affected_rows
    }
  }
`;

  function executeMyMutation3(title) {
    return fetchGraphQL(operationsDoc, "MyMutation3", { title: title });
  }

  async function startExecuteMyMutation3(title) {
    const { errors, data } = await executeMyMutation3(title);

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  return startExecuteMyMutation3(title);
};
