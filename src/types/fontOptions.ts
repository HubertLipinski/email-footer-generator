export const FONT_OPTIONS = {
  Arial: 'Arial',
  Helvetica: 'Helvetica',
  Tahoma: 'Tahoma',
  Verdana: 'Verdana',
  TrebuchetMS: 'Trebuchet MS',
  Geneva: 'Geneva',
  TimesNewRoman: 'Times New Roman',
  Georgia: 'Georgia',
  Garamond: 'Garamond',
  CourierNew: 'Courier New',
  LucidaConsole: 'Lucida Console',
  Monaco: 'Monaco',
  BodoniMT: 'Bodoni MT',
} as const

export type FontOption = (typeof FONT_OPTIONS)[keyof typeof FONT_OPTIONS]
