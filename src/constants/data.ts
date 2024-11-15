import { NavItemadmin, NavItem } from '@/types'
import { on } from 'events'

export type User = {
  _id: string
  username: string
  email: string
  role: string
  status: string
}

export type Employee = {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  gender: string
  date_of_birth: string // Consider using a proper date type if possible
  street: string
  city: string
  state: string
  country: string
  zipcode: string
  longitude?: number // Optional field
  latitude?: number // Optional field
  job: string
  profile_picture?: string | null // Profile picture can be a string (URL) or null (if no picture)
}

export const navItemadmin: NavItemadmin[] = [
  {
    title: 'Add Episode',
    href: '/admin/addepisode',
    icon: 'user',
    label: 'User',
  },
  {
    title: 'Subcribers',
    href: '/admin/subcribers',
    icon: 'user',
    label: 'Settings',
  },
  {
    title: 'addCards',
    href: '/admin/addCards',
    icon: 'user',
    label: 'Settings',
  },
]

export const navItem: NavItem[] = [
  //customer view
  {
    title: 'Overview',
    href: '/employee/overview',
    icon: 'dashboard',
    label: 'overview',
  },

  {
    title: 'Interviews',
    href: '/employee/interviews',
    icon: 'spinner',
    label: 'profile',
  },
  {
    title: 'Jobs',
    href: '/employee/jobs',
    icon: 'spinner',
    label: 'profile',
  },
  {
    title: 'Support',
    href: '/employee/support',
    icon: 'media',
    label: 'profile',
  },
  {
    title: 'Recomanded jobs',
    href: '/employee/recomandadjobs',
    icon: 'profile',
    label: 'profile',
  },

  {
    title: 'Settings',
    href: '/employee/settings',
    icon: 'car',
    label: 'settings',
  },
]

export const navItemempy: NavItem[] = [
  //employer view
  {
    title: 'overview',
    href: '/employer/overview',
    icon: 'dashboard',
    label: 'overview',
  },

  {
    title: 'Hiring',
    subItems: [
      { title: 'Jobs', href: '/employer/hiring/jobs' },
      { title: 'Candidates', href: '/employer/hiring/candidates' },
    ],

    icon: 'spinner',
  },

  {
    title: 'Interviews',
    href: '/employer/interview',
    icon: 'spinner',
    label: 'profile',
  },
  {
    title: 'Manage',
    href: '/employer/manage',
    icon: 'spinner',
    label: 'profile',
  },
  {
    title: 'Support',
    href: '/employer/support',
    icon: 'media',
    label: 'profile',
  },

  {
    title: 'Settings',
    href: '/employer/settings',
    icon: 'car',
    label: 'settings',
  },
]
