"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Grid, User, Settings } from "lucide-react";
import { useFetch, UserResponse } from "@/api/tool";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserEditModal, { UserEditData } from "@/components/modal/userEditModal";

export default function MyProfile() {
  const [userData, setUserData] = useState<any>();
  const [userEditData, setUserEditData] = useState<any>();
  const { fetchUserDetail } = useFetch();
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      const idUser = sessionStorage.getItem("idUser") || "";
      const response = await fetchUserDetail(idUser);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userData);
  useEffect(() => {
    if (sessionStorage.getItem("idUser")) {
      fetchUserData();
    } else {
      router.push("/signin");
    }
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-8">
            <AvatarImage src={userData?.avatarUrl} alt="@johndoe" />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <div className="flex items-center mb-4">
              <h1 className="text-2xl font-bold mr-4">{userData?.username}</h1>
              <UserEditModal user={userData} />
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mb-4">
              <span>
                <strong>123</strong> posts
              </span>
              <span>
                <strong>1.5k</strong> followers
              </span>
              <span>
                <strong>1k</strong> following
              </span>
            </div>
            <div className="mb-4">
              <h2 className="font-bold">John Doe</h2>
              <p className="text-sm">
                📸 Photography enthusiast
                <br />
                🌍 Travel lover
                <br />
                🏋️‍♂️ Fitness freak
                <br />
                👨‍💻 Software Developer
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-center space-x-8 mb-4">
            <Button variant="ghost" className="text-xs">
              <Grid className="h-4 w-4 mr-2" />
              POSTS
            </Button>
            <Button variant="ghost" className="text-xs">
              <User className="h-4 w-4 mr-2" />
              TAGGED
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Post+${
                    i + 1
                  }`}
                  alt={`Post ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}
