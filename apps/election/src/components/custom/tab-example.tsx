import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/custom/tabs'

export const TabsExample = () => {
  return (
    <Tabs defaultValue="account" className="relative grow h-full">
      <div className="w-full border-b flex justify-start h-10 shrink-0 z-10">
        <TabsList className="w-full justify-start p-0">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}
