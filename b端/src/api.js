const BASE_URL = "http://172.20.10.10";
export const AUTH_URL = `${BASE_URL}:3000/api/v1`;

const API = "http://172.20.10.10:8080/v1/graphql";

export const fetchAddBook = async (
  author,
  isbn,
  price,
  publisher,
  title,
  available_quantity,
  genre
) => {
  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName,
      }),
    });

    return await result.json();
  }

  const operationsDoc = `
    mutation MyMutation {
      insert_books_one(object: {author: "${author}", available_quantity: ${available_quantity}, title: "${title}", publisher: "${publisher}", publication_date: "2001-01-02", price: "${price}", isbn: "${isbn}", genre: "${genre}", edition: 10, cover: "12"}) {
        author
        cover
        edition
        genre
        price
        publication_date
        publisher
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
    console.log(data);
    return data;
  }

  return startExecuteMyMutation();
};

export const fetchBookMgrSearch = async (text) => {
  /*
This is an example snippet - you should consider tailoring it
to your service.
*/
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
        operationName: operationName,
      }),
    });

    return await result.json();
  }

  const operationsDoc = `
query MyQuery {
  books(where: {title: {_iregex: "${text}"}}, order_by: {title: desc}) {
    author
    price
    isbn
    genre
    title
    publisher
    available_quantity
  }
}
`;
  console.log(operationsDoc);
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
export const fetchBookMgrModify = async (
  isbn,
  publisher,
  author,
  title,
  available_quantity,
  genre,
  price
) => {
  /*
This is an example snippet - you should consider tailoring it
to your service.
*/
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
        operationName: operationName,
      }),
    });

    return await result.json();
  }

  const operationsDoc = `
  mutation MyMutation {
    update_books_by_pk(pk_columns: {isbn: "${isbn}"}, _set: {publisher: "${publisher}", author: "${author}}", available_quantity: ${available_quantity}, genre: "${genre}", price: "${price}"}) {
      author
      cover
      edition
      genre
      price
      publication_date
      publisher
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
