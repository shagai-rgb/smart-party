import { HEADER_HEIGHT } from '@/shared/constants/layout'

import { Skeleton } from '../ui/skeleton'

export const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4 w-full max-w-[240px] py-2 pl-2">
      <Skeleton className="rounded-xl p-2" style={{ height: HEADER_HEIGHT }} />
      <div className="flex flex-col gap-1 justify-between h-full">
        <div className="space-y-1 px-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
        <Skeleton className="w-full rounded-xl mb-2 h-12 mx-2" />
      </div>
    </div>
  )
}
