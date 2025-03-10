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

export const FONT_OPTIONS = [
  'Arial',
  'Helvetica',
  'Tahoma',
  'Verdana',
  'Trebuchet MS',
  'Geneva',
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Courier New',
  'Lucida Console',
  'Monaco',
] as const
export type FontOption = (typeof FONT_OPTIONS)[number]
