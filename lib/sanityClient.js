import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'l2zr9kgj',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skBMQlmKRCfOqRfS0X5WXaXhusDyalB4UynWvt3W13OOT5PQUzv4W8NSwdNx41KZnX6uBEbAfBfaUpAPzu1EjMBmDyIBmbFGliHFyr1vBrK0kCkbV9EQhjRWOlBqdMpbwlnwFk2HMco8nXMjCyezMjFs5MNkqYewuC3tmPxBgGuHyCmbjZXN',
  useCdn: false,
})
