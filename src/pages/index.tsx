import Layout from '@/components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <Layout>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome to BeautyNext</CardTitle>
          <CardDescription>Your one-stop beauty solution</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Discover the latest trends, products, and techniques in the world of beauty. 
            Whether you're a professional or just starting out, BeautyNext has something for everyone.
          </p>
        </CardContent>
      </Card>
    </Layout>
  )
}