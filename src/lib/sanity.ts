import {sanityClient} from 'sanity:client'

export async function loadQuery<T>({query, params = {}}: {query: string; params?: Record<string, unknown>}): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(query, params)
  } catch (err) {
    console.warn('[sanity] fetch failed:', (err as Error).message)
    return null
  }
}
