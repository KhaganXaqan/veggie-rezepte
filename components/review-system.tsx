'use client'

import { useState, useEffect } from 'react'
import { Star, ThumbsUp, ThumbsDown, Flag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'

interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
  helpful: number
  verified: boolean
  images?: string[]
}

interface ReviewSystemProps {
  recipeId: string
  recipeName: string
  initialReviews?: Review[]
  averageRating?: number
  totalReviews?: number
}

export function ReviewSystem({ 
  recipeId, 
  recipeName, 
  initialReviews = [], 
  averageRating = 0, 
  totalReviews = 0 
}: ReviewSystemProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
    author: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'>('newest')

  // Mock reviews for demonstration
  useEffect(() => {
    if (initialReviews.length === 0) {
      const mockReviews: Review[] = [
        {
          id: '1',
          author: 'Maria K.',
          rating: 5,
          comment: 'Absolut fantastisches Rezept! Habe es schon mehrmals nachgekocht und es ist jedes Mal perfekt geworden. Die Anleitung ist sehr verständlich und die Zutaten sind leicht zu bekommen. Meine ganze Familie liebt es!',
          date: '2024-01-15',
          helpful: 12,
          verified: true,
          images: []
        },
        {
          id: '2',
          author: 'Thomas B.',
          rating: 4,
          comment: 'Sehr leckeres Rezept! Ich habe noch etwas Rosmarin hinzugefügt, das passt perfekt dazu. Die Zubereitungszeit war etwas länger als angegeben, aber das Ergebnis war es wert.',
          date: '2024-01-10',
          helpful: 8,
          verified: true
        },
        {
          id: '3',
          author: 'Anna S.',
          rating: 5,
          comment: 'Einfach nur wow! Als Vegetarierin bin ich immer auf der Suche nach neuen Rezepten und dieses hier ist definitiv ein Keeper. Sehr geschmackvoll und sättigend.',
          date: '2024-01-08',
          helpful: 15,
          verified: false
        },
        {
          id: '4',
          author: 'Michael R.',
          rating: 3,
          comment: 'Gutes Rezept, aber für meinen Geschmack etwas zu mild. Habe beim nächsten Mal mehr Gewürze verwendet und dann war es perfekt.',
          date: '2024-01-05',
          helpful: 3,
          verified: true
        }
      ]
      setReviews(mockReviews)
    }
  }, [initialReviews])

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newReview.rating === 0 || !newReview.comment.trim() || !newReview.author.trim()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const review: Review = {
      id: Date.now().toString(),
      author: newReview.author,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      verified: false
    }

    setReviews(prev => [review, ...prev])
    setNewReview({ rating: 0, comment: '', author: '', email: '' })
    setShowReviewForm(false)
    setIsSubmitting(false)

    // Track review submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'review_submitted', {
        'recipe_name': recipeName,
        'rating': newReview.rating
      })
    }
  }

  const handleHelpful = (reviewId: string) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ))
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'highest':
        return b.rating - a.rating
      case 'lowest':
        return a.rating - b.rating
      case 'helpful':
        return b.helpful - a.helpful
      default:
        return 0
    }
  })

  const calculateAverageRating = () => {
    if (reviews.length === 0) return averageRating
    return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  }

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    reviews.forEach(review => {
      distribution[review.rating as keyof typeof distribution]++
    })
    return distribution
  }

  const StarRating = ({ rating, onRatingChange, readonly = false }: { 
    rating: number
    onRatingChange?: (rating: number) => void
    readonly?: boolean 
  }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onRatingChange?.(star)}
          className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
          disabled={readonly}
          aria-label={`${star} Stern${star !== 1 ? 'e' : ''}`}
        >
          <Star
            className={`h-5 w-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  )

  const avgRating = calculateAverageRating()
  const distribution = getRatingDistribution()
  const totalReviewCount = reviews.length || totalReviews

  return (
    <section className="mt-12" itemScope itemType="https://schema.org/AggregateRating">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Bewertungen & Kommentare</h2>
        <Button 
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-[#0b3558] hover:bg-[#f9d24f] hover:text-black transition-colors"
        >
          Bewertung schreiben
        </Button>
      </div>

      {/* Rating Overview */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Average Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0b3558] mb-2" itemProp="ratingValue">
              {avgRating.toFixed(1)}
            </div>
            <StarRating rating={Math.round(avgRating)} readonly />
            <p className="text-gray-600 mt-2">
              <span itemProp="reviewCount">{totalReviewCount}</span> Bewertung{totalReviewCount !== 1 ? 'en' : ''}
            </p>
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${totalReviewCount > 0 ? (distribution[rating as keyof typeof distribution] / totalReviewCount) * 100 : 0}%` 
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {distribution[rating as keyof typeof distribution]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Deine Bewertung</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Bewertung *</label>
              <StarRating 
                rating={newReview.rating} 
                onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  id="author"
                  value={newReview.author}
                  onChange={(e) => setNewReview(prev => ({ ...prev, author: e.target.value }))}
                  placeholder="Dein Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail (wird nicht veröffentlicht)</label>
                <Input
                  id="email"
                  type="email"
                  value={newReview.email}
                  onChange={(e) => setNewReview(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="deine@email.de"
                />
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-2">Kommentar *</label>
              <Textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Teile deine Erfahrungen mit diesem Rezept..."
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="flex gap-4">
              <Button 
                type="submit" 
                disabled={isSubmitting || newReview.rating === 0 || !newReview.comment.trim() || !newReview.author.trim()}
                className="bg-[#0b3558] hover:bg-[#f9d24f] hover:text-black"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Bewertung abschicken'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowReviewForm(false)}
              >
                Abbrechen
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Sort Options */}
      {reviews.length > 0 && (
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-medium">Sortieren nach:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="text-sm border border-gray-300 rounded px-3 py-1"
          >
            <option value="newest">Neueste</option>
            <option value="oldest">Älteste</option>
            <option value="highest">Höchste Bewertung</option>
            <option value="lowest">Niedrigste Bewertung</option>
            <option value="helpful">Hilfreichste</option>
          </select>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6" itemScope itemType="https://schema.org/Review">
            <div className="flex items-start gap-4">
              <Avatar>
                <div className="w-10 h-10 rounded-full bg-[#0b3558] flex items-center justify-center text-white font-semibold">
                  {review.author[0].toUpperCase()}
                </div>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold" itemProp="author">{review.author}</span>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verifiziert
                    </span>
                  )}
                  <time className="text-sm text-gray-500" itemProp="datePublished" dateTime={review.date}>
                    {new Date(review.date).toLocaleDateString('de-DE', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                
                <div className="mb-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <StarRating rating={review.rating} readonly />
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                </div>
                
                <p className="text-gray-700 mb-3" itemProp="reviewBody">{review.comment}</p>
                
                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Bild von ${review.author}`}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm">
                  <button 
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center gap-1 text-gray-600 hover:text-[#0b3558] transition-colors"
                    aria-label="Als hilfreich markieren"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Hilfreich ({review.helpful})
                  </button>
                  
                  <button className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors">
                    <Flag className="h-4 w-4" />
                    Melden
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg mb-4">Noch keine Bewertungen vorhanden.</p>
          <p>Sei der Erste und teile deine Erfahrung mit diesem Rezept!</p>
        </div>
      )}

      {/* Hidden structured data */}
      <div className="sr-only" aria-hidden="true">
        <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Recipe">
          <span itemProp="name">{recipeName}</span>
        </span>
      </div>
    </section>
  )
}