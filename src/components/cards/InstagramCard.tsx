import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"

interface InstagramPostCardProps {
  user: {
    name: string
    username: string
    avatar: string
  }
  image: string
  likes: number
  caption: string
  comments: number
  timeAgo: string
}

export default function InstagramPostCard({
  user,
  image,
  likes,
  caption,
  comments,
  timeAgo
}: InstagramPostCardProps) {
  return (
    <Card className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm dark:text-gray-200">{user.username}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.name}</p>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src={image}
            alt="Post image"
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400">
                <Heart className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="dark:text-gray-300">
                <MessageCircle className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="dark:text-gray-300">
                <Send className="h-6 w-6" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="dark:text-gray-300">
              <Bookmark className="h-6 w-6" />
            </Button>
          </div>
          <p className="font-semibold text-sm mb-2 dark:text-gray-200">{likes.toLocaleString()} likes</p>
          <p className="text-sm mb-2 dark:text-gray-300">
            <span className="font-semibold mr-2 dark:text-gray-200">{user.username}</span>
            {caption}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            View all {comments} comments
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{timeAgo}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full text-sm bg-transparent focus:outline-none dark:text-gray-300 dark:placeholder-gray-500"
        />
      </CardFooter>
    </Card>
  )
}