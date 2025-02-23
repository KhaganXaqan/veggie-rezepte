"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Comment {
  id: number
  author: string
  rating: number
  content: string
  date: string
}

const MOCK_COMMENTS: Comment[] = [
  {
    id: 1,
    author: "Maria K.",
    rating: 5,
    content: "Super leckeres Rezept! Habe es schon mehrmals nachgekocht und es ist jedes Mal ein Genuss.",
    date: "15.03.2024"
  },
  {
    id: 2,
    author: "Thomas B.",
    rating: 4,
    content: "Sehr gut! Ich habe noch etwas Rosmarin hinzugefügt, das passt perfekt.",
    date: "10.03.2024"
  }
]

export function RecipeComments({ recipeId }: { recipeId: string }) {
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS)
  const [newComment, setNewComment] = useState("")

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Kommentare</h2>
      
      {/* Comment Form */}
      <div className="bg-muted p-4 rounded-lg mb-8">
        <Textarea
          placeholder="Schreibe einen Kommentar..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4"
        />
        <Button>Kommentar absenden</Button>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-6">
            <div className="flex items-center gap-4 mb-2">
              <Avatar>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  {comment.author[0]}
                </div>
              </Avatar>
              <div>
                <div className="font-medium">{comment.author}</div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <div className="flex">
                    {Array.from({ length: comment.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm">• {comment.date}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{comment.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}