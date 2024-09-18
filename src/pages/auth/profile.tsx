import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import axiosInstance from "@/lib/axios-interceptor"
import Layout from '@/components/layout'

interface User {
  name: string
  email: string
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/user/profile')
        setUser(response.data)
      } catch (error) {
        toast({
          title: "Failed to load profile",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    }

    fetchUserProfile()
  }, [toast])

  if (!user) {
    return <Layout>Loading...</Layout>
  }

  return (
    <Layout>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Name</h3>
              <p className="text-gray-600">{user.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  )
}