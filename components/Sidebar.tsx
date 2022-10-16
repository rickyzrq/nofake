import React from 'react'
import { 
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  ListBulletIcon,
  EllipsisHorizontalCircleIcon,
  ArchiveBoxIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'
import {useSession, signIn, signOut} from 'next-auth/react'


function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className = "flex flex-col col-span-2 items-left px-4 md:item-start">
      <img className = "mt-10 m-3 h-15 w-40" src='./images/NOFAKE_LOGO_3.png' alt="" />

      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Exlore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={ArchiveBoxIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={ListBulletIcon} title="Lists" />
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out':'Sign In'} />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />

    </div>
  )
}

export default Sidebar