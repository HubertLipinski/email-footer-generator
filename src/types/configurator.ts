export type PersonalConfig = {
  name: string
  position: string
  email: string
  company: string
  website: string | null
}

export type SocialOption = {
  label: unknown
  placeholder: string,
  component: unknown,
}

export interface SocialOptions {
  [k: string]: SocialOption
}
