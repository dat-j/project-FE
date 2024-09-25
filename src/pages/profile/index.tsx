
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaGithub, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import useRequest from '@/hooks/useRequest'
import { useSelector } from 'react-redux'
import { login, selectUser } from '@/redux/userSlice'
import { API } from '@/api/api'
import Cookies from "js-cookie"

type UserData = {
  name: string
  username: string
  avatar: string
  bio: string
  location: string
  email: string
  followers: number
  following: number
  repositories: number
  contributions: number
  popularRepositories: { name: string; description: string; stars: number }[]
  skills: string[]
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const request = useRequest()
  const idUser = Cookies.get("idUser")

  useEffect(() => {
    // Simulating an API call to fetch user data
    const fetchUserData = async () => {
      // In a real application, you would fetch this data from an API
      const res = await request.get(API.GET_USER_INFO_BY_ID+idUser)
      //setUserData(res.data)
      const data: UserData = {
        name: res.data.name,
        username: "janedoe",
        avatar: res.data.avatarUrl,
        bio: "Full Stack Developer | Open Source Enthusiast",
        location: "San Francisco, CA",
        email: res.data.email,
        followers: 1234,
        following: 567,
        repositories: 89,
        contributions: 3456,
        popularRepositories: [
          { name: "awesome-project", description: "A really cool project", stars: 123 },
          { name: "useful-library", description: "A handy utility library", stars: 89 },
          { name: "cool-app", description: "An innovative web application", stars: 56 },
        ],
        skills: ["JavaScript", "React", "Node.js", "Python", "GraphQL"]
      }
      setUserData(data)
    }

    fetchUserData()
  }, [])

  if (!userData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-6">
            <Image
              className="h-48 w-48 rounded-full object-cover mx-auto"
              src={userData.avatar}
              alt={userData.name}
              width={200}
              height={200}
            />
          </div>
          <div className="p-8">
            <div className="text-2xl font-bold text-gray-900">{userData.name}</div>
            <div className="text-gray-600">@{userData.username}</div>
            <p className="mt-2 text-gray-600">{userData.bio}</p>
            <div className="mt-4 flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              {userData.location}
            </div>
            <div className="mt-2 flex items-center text-gray-600">
              <FaEnvelope className="mr-2" />
              {userData.email}
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-4 text-center">
          <div className="p-4">
            <div className="text-xl font-semibold">{userData.repositories}</div>
            <div className="text-gray-600">Repositories</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold">{userData.followers}</div>
            <div className="text-gray-600">Followers</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold">{userData.following}</div>
            <div className="text-gray-600">Following</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold">{userData.contributions}</div>
            <div className="text-gray-600">Contributions</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Popular Repositories</h2>
          <div className="space-y-4">
            {userData.popularRepositories.map((repo) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 p-4 rounded-md"
              >
                <h3 className="font-semibold text-blue-600">{repo.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
                <div className="mt-2 text-sm text-gray-500">⭐ {repo.stars} stars</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="p-6 bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {userData.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}