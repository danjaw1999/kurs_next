/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $variantId: ID!, $quantity: Int) {\n  addToCart(\n    cartId: $cartId\n    productId: $productId\n    variantId: $variantId\n    quantity: $quantity\n  ) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate {\n  createCart {\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGet($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n    totalPrice\n    totalProductsAmount\n  }\n}": types.CartGetDocument,
    "mutation CartRemoveItem($cartId: ID!, $productId: ID!, $variantId: ID!) {\n  removeFromCart(cartId: $cartId, productId: $productId, variantId: $variantId) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  changeItemQuantity(cartId: $cartId, productId: $productId, quantity: $quantity) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoriesGet {\n  categories {\n    ...CategoryItem\n  }\n}": types.CategoriesGetDocument,
    "fragment CategoryItem on Category {\n  id\n  slug\n  name\n}": types.CategoryItemFragmentDoc,
    "fragment CollectionItem on Collection {\n  id\n  slug\n  name\n  description\n}": types.CollectionItemFragmentDoc,
    "query CollectionGet($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionItem\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetDocument,
    "query CollectionsGet($skip: Int, $take: Int) {\n  collections(skip: $skip, take: $take) {\n    ...CollectionItem\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionsGetDocument,
    "mutation OrderCreate($email: String!, $cartId: ID!) {\n  createOrder(email: $email, cartId: $cartId) {\n    email\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n    status\n    totalPrice\n  }\n}": types.OrderCreateDocument,
    "query OrderGet($orderId: ID, $email: String) {\n  order(orderId: $orderId, email: $email) {\n    id\n    email\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n    status\n    totalPrice\n  }\n}": types.OrderGetDocument,
    "mutation ProductAddReview($productId: ID!, $data: ReviewInput!) {\n  addReview(productId: $productId, data: $data) {\n    content\n    email\n    headline\n    id\n    rating\n    name\n  }\n}": types.ProductAddReviewDocument,
    "query ProductGet($productId: ID!) {\n  product(id: $productId) {\n    ...ProductListItem\n    variants {\n      ...VariantItem\n    }\n  }\n}": types.ProductGetDocument,
    "fragment ProductListItem on Product {\n  id\n  image\n  name\n  price\n  description\n  category {\n    ...CategoryItem\n  }\n  averageRating\n  reviews {\n    id\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductPage on Product {\n  ...ProductListItem\n  variants {\n    ...VariantItem\n  }\n}": types.ProductPageFragmentDoc,
    "query ProductReviewsGet($productId: ID!) {\n  reviews(productId: $productId) {\n    id\n    headline\n    email\n    content\n    name\n    rating\n  }\n}": types.ProductReviewsGetDocument,
    "query ProductsGetByCategory($slug: String!, $skip: Int, $take: Int) {\n  productsByCategory(slug: $slug, skip: $skip, take: $take) {\n    products {\n      ...ProductListItem\n    }\n    totalCount\n  }\n}": types.ProductsGetByCategoryDocument,
    "query ProductsGetList($skip: Int, $take: Int, $sortBy: String) {\n  products(skip: $skip, take: $take, sortBy: $sortBy) {\n    products {\n      ...ProductListItem\n    }\n    totalCount\n  }\n}": types.ProductsGetListDocument,
    "query SearchQuery($slug: String!) {\n  searchQuery(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.SearchQueryDocument,
    "fragment VariantItem on Variant {\n  id\n  active\n  name\n  value\n}": types.VariantItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $variantId: ID!, $quantity: Int) {\n  addToCart(\n    cartId: $cartId\n    productId: $productId\n    variantId: $variantId\n    quantity: $quantity\n  ) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createCart {\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGet($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n    totalPrice\n    totalProductsAmount\n  }\n}"): typeof import('./graphql').CartGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($cartId: ID!, $productId: ID!, $variantId: ID!) {\n  removeFromCart(cartId: $cartId, productId: $productId, variantId: $variantId) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  changeItemQuantity(cartId: $cartId, productId: $productId, quantity: $quantity) {\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGet {\n  categories {\n    ...CategoryItem\n  }\n}"): typeof import('./graphql').CategoriesGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryItem on Category {\n  id\n  slug\n  name\n}"): typeof import('./graphql').CategoryItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionItem on Collection {\n  id\n  slug\n  name\n  description\n}"): typeof import('./graphql').CollectionItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGet($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionItem\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGet($skip: Int, $take: Int) {\n  collections(skip: $skip, take: $take) {\n    ...CollectionItem\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderCreate($email: String!, $cartId: ID!) {\n  createOrder(email: $email, cartId: $cartId) {\n    email\n    id\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n    status\n    totalPrice\n  }\n}"): typeof import('./graphql').OrderCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGet($orderId: ID, $email: String) {\n  order(orderId: $orderId, email: $email) {\n    id\n    email\n    products {\n      id\n      image\n      name\n      price\n      quantity\n      description\n      category {\n        ...CategoryItem\n      }\n      variant {\n        ...VariantItem\n      }\n    }\n    status\n    totalPrice\n  }\n}"): typeof import('./graphql').OrderGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductAddReview($productId: ID!, $data: ReviewInput!) {\n  addReview(productId: $productId, data: $data) {\n    content\n    email\n    headline\n    id\n    rating\n    name\n  }\n}"): typeof import('./graphql').ProductAddReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGet($productId: ID!) {\n  product(id: $productId) {\n    ...ProductListItem\n    variants {\n      ...VariantItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  image\n  name\n  price\n  description\n  category {\n    ...CategoryItem\n  }\n  averageRating\n  reviews {\n    id\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductPage on Product {\n  ...ProductListItem\n  variants {\n    ...VariantItem\n  }\n}"): typeof import('./graphql').ProductPageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductReviewsGet($productId: ID!) {\n  reviews(productId: $productId) {\n    id\n    headline\n    email\n    content\n    name\n    rating\n  }\n}"): typeof import('./graphql').ProductReviewsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategory($slug: String!, $skip: Int, $take: Int) {\n  productsByCategory(slug: $slug, skip: $skip, take: $take) {\n    products {\n      ...ProductListItem\n    }\n    totalCount\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int, $sortBy: String) {\n  products(skip: $skip, take: $take, sortBy: $sortBy) {\n    products {\n      ...ProductListItem\n    }\n    totalCount\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchQuery($slug: String!) {\n  searchQuery(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').SearchQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment VariantItem on Variant {\n  id\n  active\n  name\n  value\n}"): typeof import('./graphql').VariantItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
