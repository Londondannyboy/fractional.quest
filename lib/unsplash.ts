/**
 * Image API Client for dynamic job images
 *
 * Uses Unsplash as primary, Pexels as fallback
 * Falls back to curated defaults if both APIs fail
 */

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY
const PEXELS_API_KEY = process.env.PEXELS_API_KEY

// Cache images in memory to reduce API calls
const imageCache = new Map<string, { url: string; expiresAt: number }>()
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

// Role-specific search terms for better image matching
const ROLE_SEARCH_TERMS: Record<string, string> = {
  'Executive': 'business executive leadership office',
  'CEO': 'ceo executive boardroom leadership',
  'Marketing': 'marketing team strategy creative',
  'CMO': 'marketing director strategy digital',
  'Finance': 'finance accounting business professional',
  'CFO': 'finance director accounting executive',
  'Engineering': 'technology software engineering code',
  'CTO': 'technology executive startup office',
  'Operations': 'operations management business process',
  'COO': 'operations executive management team',
  'HR': 'human resources team people workplace',
  'CHRO': 'hr director people leadership culture',
  'Product': 'product design technology innovation',
  'CPO': 'product management design strategy',
  'Sales': 'sales business meeting handshake',
  'CRO': 'revenue sales growth business',
  'Compliance': 'legal compliance regulation professional',
  'default': 'business professional office modern',
}

// Fallback images if API fails (current hardcoded ones)
const FALLBACK_IMAGES: Record<string, string> = {
  'Executive': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop',
  'CEO': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop',
  'Marketing': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
  'CMO': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
  'Finance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
  'CFO': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
  'Engineering': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop',
  'CTO': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop',
  'Operations': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop',
  'COO': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop',
  'HR': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop',
  'CHRO': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop',
  'Product': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
  'CPO': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
  'Sales': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
  'CRO': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
  'Compliance': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=200&fit=crop',
  'default': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop',
}

interface UnsplashPhoto {
  id: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  alt_description: string | null
  user: {
    name: string
    username: string
  }
}

interface UnsplashSearchResponse {
  total: number
  total_pages: number
  results: UnsplashPhoto[]
}

/**
 * Fetch a random image from Unsplash based on search query
 */
async function searchUnsplash(query: string): Promise<UnsplashPhoto | null> {
  if (!UNSPLASH_ACCESS_KEY) {
    return null
  }

  try {
    const url = new URL('https://api.unsplash.com/search/photos')
    url.searchParams.set('query', query)
    url.searchParams.set('per_page', '10')
    url.searchParams.set('orientation', 'landscape')
    url.searchParams.set('content_filter', 'high') // Safe for work

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        'Accept-Version': 'v1',
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      console.error('Unsplash API error:', response.status)
      return null
    }

    const data: UnsplashSearchResponse = await response.json()

    if (data.results.length === 0) {
      return null
    }

    // Pick a random image from results for variety
    const randomIndex = Math.floor(Math.random() * Math.min(data.results.length, 5))
    return data.results[randomIndex]

  } catch (error) {
    console.error('Error fetching from Unsplash:', error)
    return null
  }
}

/**
 * Pexels API types
 */
interface PexelsPhoto {
  id: number
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
  }
  alt: string
  photographer: string
}

interface PexelsSearchResponse {
  total_results: number
  photos: PexelsPhoto[]
}

/**
 * Fetch images from Pexels API (fallback)
 */
async function searchPexels(query: string, count: number = 10): Promise<string[]> {
  if (!PEXELS_API_KEY) {
    return []
  }

  try {
    const url = new URL('https://api.pexels.com/v1/search')
    url.searchParams.set('query', query)
    url.searchParams.set('per_page', String(count))
    url.searchParams.set('orientation', 'landscape')

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': PEXELS_API_KEY,
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      console.error('Pexels API error:', response.status)
      return []
    }

    const data: PexelsSearchResponse = await response.json()

    if (data.photos.length === 0) {
      return []
    }

    // Return medium-sized images (good balance of quality and speed)
    return data.photos.map(photo => photo.src.medium)

  } catch (error) {
    console.error('Error fetching from Pexels:', error)
    return []
  }
}

/**
 * Get an image URL for a specific role category
 * Uses cache to minimize API calls
 */
export async function getImageForRole(
  roleCategory: string,
  useCache = true
): Promise<string> {
  const cacheKey = roleCategory.toLowerCase()

  // Check cache first
  if (useCache) {
    const cached = imageCache.get(cacheKey)
    if (cached && cached.expiresAt > Date.now()) {
      return cached.url
    }
  }

  // Get search term for this role
  const searchTerm = ROLE_SEARCH_TERMS[roleCategory] || ROLE_SEARCH_TERMS.default

  // Try to fetch from Unsplash
  const photo = await searchUnsplash(searchTerm)

  if (photo) {
    // Build optimized URL with sizing
    const imageUrl = `${photo.urls.raw}&w=400&h=200&fit=crop&q=80`

    // Cache the result
    imageCache.set(cacheKey, {
      url: imageUrl,
      expiresAt: Date.now() + CACHE_DURATION,
    })

    return imageUrl
  }

  // Fallback to hardcoded image
  return FALLBACK_IMAGES[roleCategory] || FALLBACK_IMAGES.default
}

/**
 * Get multiple unique images for a role (for job grids with variety)
 * Tries Unsplash first, then Pexels, then falls back to hardcoded images
 */
export async function getImagesForRole(
  roleCategory: string,
  count: number = 9
): Promise<string[]> {
  const searchTerm = ROLE_SEARCH_TERMS[roleCategory] || ROLE_SEARCH_TERMS.default
  const fallback = FALLBACK_IMAGES[roleCategory] || FALLBACK_IMAGES.default

  // Try Unsplash first
  if (UNSPLASH_ACCESS_KEY) {
    try {
      const url = new URL('https://api.unsplash.com/search/photos')
      url.searchParams.set('query', searchTerm)
      url.searchParams.set('per_page', String(Math.min(count, 30)))
      url.searchParams.set('orientation', 'landscape')
      url.searchParams.set('content_filter', 'high')

      const response = await fetch(url.toString(), {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          'Accept-Version': 'v1',
        },
        next: { revalidate: 86400 },
      })

      if (response.ok) {
        const data: UnsplashSearchResponse = await response.json()

        if (data.results.length > 0) {
          // Build array of image URLs
          const images = data.results.map(photo =>
            `${photo.urls.raw}&w=400&h=200&fit=crop&q=80`
          )

          // If we have enough, return them
          if (images.length >= count) {
            return images.slice(0, count)
          }

          // Pad with repeats if needed
          while (images.length < count) {
            images.push(images[images.length % data.results.length])
          }
          return images
        }
      }
    } catch (error) {
      console.error('Unsplash failed, trying Pexels:', error)
    }
  }

  // Try Pexels as fallback
  if (PEXELS_API_KEY) {
    const pexelsImages = await searchPexels(searchTerm, count)
    if (pexelsImages.length > 0) {
      // Pad with repeats if needed
      while (pexelsImages.length < count) {
        pexelsImages.push(pexelsImages[pexelsImages.length % pexelsImages.length])
      }
      return pexelsImages.slice(0, count)
    }
  }

  // Fall back to hardcoded images
  return Array(count).fill(fallback)
}

/**
 * Get a company-specific image if possible, otherwise role-based
 */
export async function getImageForJob(
  companyName: string,
  roleCategory: string,
  companyLogo?: string | null
): Promise<{ imageUrl: string; logoUrl?: string }> {
  // If company has a logo, use it
  const logoUrl = companyLogo || undefined

  // Try to get a relevant image
  const imageUrl = await getImageForRole(roleCategory)

  return { imageUrl, logoUrl }
}

/**
 * Pre-warm the cache for common role categories
 */
export async function prewarmImageCache(): Promise<void> {
  const roles = Object.keys(ROLE_SEARCH_TERMS)

  console.log('Pre-warming Unsplash image cache...')

  for (const role of roles) {
    await getImageForRole(role, false)
    // Rate limit - Unsplash allows 50 req/hour on free tier
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log('Image cache pre-warmed for', roles.length, 'roles')
}

// Export fallbacks for use when API is not available
export { FALLBACK_IMAGES, ROLE_SEARCH_TERMS }
