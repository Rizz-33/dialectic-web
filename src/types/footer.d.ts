import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

export interface IFooterlinks {
  id: number
  icon: React.ComponentType<ILucideIcon>
  link: string
}
