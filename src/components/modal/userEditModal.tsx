"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFetch } from "@/api/tool";
import Loader from "../loading/Loader";

export interface UserEditData {
  name: string;
  username: string;
  email: string;
}

export default function UserEditModal({
  user: initialUser,
}: {
  user: UserEditData;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { editUserDetail } = useFetch();
  const idUser = sessionStorage.getItem("idUser") || "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your API
    try {
      setIsLoading(true);
      const response = await editUserDetail(idUser, user);
      if (response) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);

        window.location.reload();
      }

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    console.log("Updated user:", user);
    setIsOpen(false);
  };
  console.log(user);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={user?.name}
              onChange={handleInputChange}
              placeholder={user?.name}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={user?.username}
              onChange={handleInputChange}
              placeholder={user?.username}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={user?.email}
              onChange={handleInputChange}
              placeholder={user?.email}
            />
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </DialogContent>
      {isLoading && <Loader />}
    </Dialog>
  );
}
