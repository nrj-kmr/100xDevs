import React from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button";

const Signin = () => {
     return (
          <div className="flex flex-col items-center mt-36">
               <Tabs defaultValue="Login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                         <TabsTrigger value="Login">Login</TabsTrigger>
                         <TabsTrigger value="Signup">Signup</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Login">
                         <Card>
                              <CardHeader className="text-center">
                                   <CardTitle>Login</CardTitle>
                                   <CardDescription>
                                        Login to your account.
                                   </CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                   <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="email@email.com" />
                                   </div>
                                   <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" placeholder="password@123" />
                                   </div>
                              </CardContent>
                              <CardFooter>
                                   <Button className="w-full">Login</Button>
                              </CardFooter>
                         </Card>
                    </TabsContent>
                    <TabsContent value="Signup">
                         <Card>
                              <CardHeader className="text-center">
                                   <CardTitle>Signup</CardTitle>
                                   <CardDescription>
                                        Register for a new account here.
                                   </CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                   <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" type="text" placeholder="Narendra Modi" />
                                   </div>
                                   <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="text" placeholder="damodar@das.com" />
                                   </div>
                                   <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="wah modi ji wah ❤️‍🔥" />
                                   </div>
                              </CardContent>
                              <CardFooter>
                                   <Button className="w-full">Register</Button>
                              </CardFooter>
                         </Card>
                    </TabsContent>
               </Tabs>
          </div>
     );
}

export default Signin;