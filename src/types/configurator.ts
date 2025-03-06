export type PersonalConfig = {
  name: string
  position: string
  email: string
  company: string
  website: string | null
}

export type SocialOption = {
  label: unknown
  placeholder: string
  component: unknown
  defaultColor?: string
}

export interface SocialOptions {
  [k: string]: SocialOption
}

export enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
