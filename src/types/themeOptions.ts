import defaultTheme from '@/types/themes/defaultTheme.ts'
import corporateTheme from '@/types/themes/corporateTheme.ts'
import creativeTheme from '@/types/themes/creativeTheme.ts'
import minimalisticTheme from '@/types/themes/minimalisticTheme.ts'
import luxuryTheme from '@/types/themes/luxuryTheme.ts'

export const THEME_OPTIONS = {
  Default: 'default',
  Corporate: 'corporate',
  Creative: 'creative',
  Minimalistic: 'minimalistic',
  Luxury: 'luxury',
  Modern: 'modern',
}

export type ThemeOption = (typeof THEME_OPTIONS)[keyof typeof THEME_OPTIONS]

export const TEMPLATE_TO_STYLES = {
  [THEME_OPTIONS.Default]: defaultTheme,
  [THEME_OPTIONS.Corporate]: corporateTheme,
  [THEME_OPTIONS.Creative]: creativeTheme,
  [THEME_OPTIONS.Minimalistic]: minimalisticTheme,
  [THEME_OPTIONS.Luxury]: luxuryTheme,
  // [THEME_OPTIONS.Modern]: modernTheme,
} as const
