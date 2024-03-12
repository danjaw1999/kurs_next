/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
};

export type CartItem = {
  category: Category;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
  variant: Variant;
};

export type CartResponse = {
  id: Scalars['ID']['output'];
  products: Array<CartItem>;
  status: CartStatus;
  totalPrice: Scalars['Int']['output'];
  totalProductsAmount: Scalars['Int']['output'];
};

export type CartStatus =
  | 'CREATED'
  | 'ORDERED'
  | 'PAID';

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type Mutation = {
  addReview: Array<Review>;
  addToCart: CartResponse;
  changeItemQuantity: CartResponse;
  createCart: CartResponse;
  createOrder: OrderResponse;
  removeFromCart: CartResponse;
};


export type MutationAddReviewArgs = {
  data: ReviewInput;
  productId: Scalars['ID']['input'];
};


export type MutationAddToCartArgs = {
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variantId: Scalars['ID']['input'];
};


export type MutationChangeItemQuantityArgs = {
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCreateOrderArgs = {
  cartId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type MutationRemoveFromCartArgs = {
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type OrderResponse = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  products: Array<CartItem>;
  status: Ordertatus;
  totalPrice: Scalars['Int']['output'];
};

export type Ordertatus =
  | 'CANCELED'
  | 'DONE'
  | 'INPROGRESS';

export type Product = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  category: Category;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  reviews: Array<Maybe<Review>>;
  variants: Array<Variant>;
};

export type ProductsListResponse = {
  products: Array<Product>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  cart?: Maybe<CartResponse>;
  categories: Array<Category>;
  collection: Collection;
  collections: Array<Collection>;
  order?: Maybe<OrderResponse>;
  product?: Maybe<Product>;
  products: ProductsListResponse;
  productsByCategory: ProductsListResponse;
  reviews: Array<Review>;
  searchQuery: SearchResponse;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsByCategoryArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewsArgs = {
  productId: Scalars['ID']['input'];
};


export type QuerySearchQueryArgs = {
  slug: Scalars['String']['input'];
};

export type Review = {
  content: Scalars['String']['output'];
  email: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
};

export type ReviewInput = {
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type SearchResponse = {
  products: Array<Product>;
};

export type Variant = {
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CartAddItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CartAddItemMutation = { addToCart: { id: string, products: Array<{ id: string, image: string, name: string, price: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } };

export type CartCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type CartCreateMutation = { createCart: { id: string, products: Array<{ id: string, image: string, name: string, price: number, quantity: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } };

export type CartGetQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type CartGetQuery = { cart?: { id: string, totalPrice: number, totalProductsAmount: number, products: Array<{ id: string, image: string, name: string, price: number, quantity: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } | null };

export type CartRemoveItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { removeFromCart: { id: string, products: Array<{ id: string, image: string, name: string, price: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } };

export type CartSetProductQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetProductQuantityMutation = { changeItemQuantity: { id: string, products: Array<{ id: string, image: string, name: string, price: number, quantity: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } };

export type CategoriesGetQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetQuery = { categories: Array<{ id: string, slug: string, name: string }> };

export type CategoryItemFragment = { id: string, slug: string, name: string };

export type CollectionItemFragment = { id: string, slug: string, name: string, description: string };

export type CollectionGetQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetQuery = { collection: { id: string, slug: string, name: string, description: string, products: Array<{ id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> }> } };

export type CollectionsGetQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CollectionsGetQuery = { collections: Array<{ id: string, slug: string, name: string, description: string, products: Array<{ id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> }> }> };

export type OrderCreateMutationVariables = Exact<{
  email: Scalars['String']['input'];
  cartId: Scalars['ID']['input'];
}>;


export type OrderCreateMutation = { createOrder: { email: string, id: string, status: Ordertatus, totalPrice: number, products: Array<{ id: string, image: string, name: string, price: number, quantity: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } };

export type OrderGetQueryVariables = Exact<{
  orderId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type OrderGetQuery = { order?: { id: string, email: string, status: Ordertatus, totalPrice: number, products: Array<{ id: string, image: string, name: string, price: number, quantity: number, description: string, category: { id: string, slug: string, name: string }, variant: { id: string, active: boolean, name: string, value: string } }> } | null };

export type ProductAddReviewMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  data: ReviewInput;
}>;


export type ProductAddReviewMutation = { addReview: Array<{ content: string, email: string, headline: string, id: string, rating: number, name: string }> };

export type ProductGetQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductGetQuery = { product?: { id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, variants: Array<{ id: string, active: boolean, name: string, value: string }>, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> } | null };

export type ProductListItemFragment = { id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> };

export type ProductPageFragment = { id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, variants: Array<{ id: string, active: boolean, name: string, value: string }>, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> };

export type ProductReviewsGetQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductReviewsGetQuery = { reviews: Array<{ id: string, headline: string, email: string, content: string, name: string, rating: number }> };

export type ProductsGetByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetByCategoryQuery = { productsByCategory: { totalCount: number, products: Array<{ id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> }> } };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { products: { totalCount: number, products: Array<{ id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> }> } };

export type SearchQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type SearchQueryQuery = { searchQuery: { products: Array<{ id: string, image: string, name: string, price: number, description: string, averageRating?: number | null, category: { id: string, slug: string, name: string }, reviews: Array<{ id: string } | null> }> } };

export type VariantItemFragment = { id: string, active: boolean, name: string, value: string };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CollectionItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionItem on Collection {
  id
  slug
  name
  description
}
    `, {"fragmentName":"CollectionItem"}) as unknown as TypedDocumentString<CollectionItemFragment, unknown>;
export const CategoryItemFragmentDoc = new TypedDocumentString(`
    fragment CategoryItem on Category {
  id
  slug
  name
}
    `, {"fragmentName":"CategoryItem"}) as unknown as TypedDocumentString<CategoryItemFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}`, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const VariantItemFragmentDoc = new TypedDocumentString(`
    fragment VariantItem on Variant {
  id
  active
  name
  value
}
    `, {"fragmentName":"VariantItem"}) as unknown as TypedDocumentString<VariantItemFragment, unknown>;
export const ProductPageFragmentDoc = new TypedDocumentString(`
    fragment ProductPage on Product {
  ...ProductListItem
  variants {
    ...VariantItem
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`, {"fragmentName":"ProductPage"}) as unknown as TypedDocumentString<ProductPageFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($cartId: ID!, $productId: ID!, $variantId: ID!, $quantity: Int) {
  addToCart(
    cartId: $cartId
    productId: $productId
    variantId: $variantId
    quantity: $quantity
  ) {
    id
    products {
      id
      image
      name
      price
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  createCart {
    id
    products {
      id
      image
      name
      price
      quantity
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetDocument = new TypedDocumentString(`
    query CartGet($cartId: ID!) {
  cart(id: $cartId) {
    id
    products {
      id
      image
      name
      price
      quantity
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
    totalPrice
    totalProductsAmount
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<CartGetQuery, CartGetQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($cartId: ID!, $productId: ID!, $variantId: ID!) {
  removeFromCart(cartId: $cartId, productId: $productId, variantId: $variantId) {
    id
    products {
      id
      image
      name
      price
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  changeItemQuantity(cartId: $cartId, productId: $productId, quantity: $quantity) {
    id
    products {
      id
      image
      name
      price
      quantity
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const CategoriesGetDocument = new TypedDocumentString(`
    query CategoriesGet {
  categories {
    ...CategoryItem
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}`) as unknown as TypedDocumentString<CategoriesGetQuery, CategoriesGetQueryVariables>;
export const CollectionGetDocument = new TypedDocumentString(`
    query CollectionGet($slug: String!) {
  collection(slug: $slug) {
    ...CollectionItem
    products {
      ...ProductListItem
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment CollectionItem on Collection {
  id
  slug
  name
  description
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}`) as unknown as TypedDocumentString<CollectionGetQuery, CollectionGetQueryVariables>;
export const CollectionsGetDocument = new TypedDocumentString(`
    query CollectionsGet($skip: Int, $take: Int) {
  collections(skip: $skip, take: $take) {
    ...CollectionItem
    products {
      ...ProductListItem
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment CollectionItem on Collection {
  id
  slug
  name
  description
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}`) as unknown as TypedDocumentString<CollectionsGetQuery, CollectionsGetQueryVariables>;
export const OrderCreateDocument = new TypedDocumentString(`
    mutation OrderCreate($email: String!, $cartId: ID!) {
  createOrder(email: $email, cartId: $cartId) {
    email
    id
    products {
      id
      image
      name
      price
      quantity
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
    status
    totalPrice
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<OrderCreateMutation, OrderCreateMutationVariables>;
export const OrderGetDocument = new TypedDocumentString(`
    query OrderGet($orderId: ID, $email: String) {
  order(orderId: $orderId, email: $email) {
    id
    email
    products {
      id
      image
      name
      price
      quantity
      description
      category {
        ...CategoryItem
      }
      variant {
        ...VariantItem
      }
    }
    status
    totalPrice
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<OrderGetQuery, OrderGetQueryVariables>;
export const ProductAddReviewDocument = new TypedDocumentString(`
    mutation ProductAddReview($productId: ID!, $data: ReviewInput!) {
  addReview(productId: $productId, data: $data) {
    content
    email
    headline
    id
    rating
    name
  }
}
    `) as unknown as TypedDocumentString<ProductAddReviewMutation, ProductAddReviewMutationVariables>;
export const ProductGetDocument = new TypedDocumentString(`
    query ProductGet($productId: ID!) {
  product(id: $productId) {
    ...ProductListItem
    variants {
      ...VariantItem
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}
fragment VariantItem on Variant {
  id
  active
  name
  value
}`) as unknown as TypedDocumentString<ProductGetQuery, ProductGetQueryVariables>;
export const ProductReviewsGetDocument = new TypedDocumentString(`
    query ProductReviewsGet($productId: ID!) {
  reviews(productId: $productId) {
    id
    headline
    email
    content
    name
    rating
  }
}
    `) as unknown as TypedDocumentString<ProductReviewsGetQuery, ProductReviewsGetQueryVariables>;
export const ProductsGetByCategoryDocument = new TypedDocumentString(`
    query ProductsGetByCategory($slug: String!, $skip: Int, $take: Int) {
  productsByCategory(slug: $slug, skip: $skip, take: $take) {
    products {
      ...ProductListItem
    }
    totalCount
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategoryQuery, ProductsGetByCategoryQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($skip: Int, $take: Int, $sortBy: String) {
  products(skip: $skip, take: $take, sortBy: $sortBy) {
    products {
      ...ProductListItem
    }
    totalCount
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const SearchQueryDocument = new TypedDocumentString(`
    query SearchQuery($slug: String!) {
  searchQuery(slug: $slug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment CategoryItem on Category {
  id
  slug
  name
}
fragment ProductListItem on Product {
  id
  image
  name
  price
  description
  category {
    ...CategoryItem
  }
  averageRating
  reviews {
    id
  }
}`) as unknown as TypedDocumentString<SearchQueryQuery, SearchQueryQueryVariables>;