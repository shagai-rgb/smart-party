import { Suspense, lazy } from 'react'

const GroupTable = lazy(() => import('./components/group/group-table'))

export default function GroupsPage() {
  return (
    <Suspense>
      <GroupTable />
    </Suspense>
  )
}
