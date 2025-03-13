export type PersonalConfig = {
  name: string
  position: string
  email: string
  company: string
  website: string | null
}

export type SocialOption = {
  label: string
  value: string
  icon: string
  color: string
}

export enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
export type TextAlignmentValue = `${TextAlignment}`
