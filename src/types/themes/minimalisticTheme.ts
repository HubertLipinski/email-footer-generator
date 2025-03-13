import { FONT_OPTIONS } from '@/types/fontOptions.ts'
import { TextAlignment } from '@/types/configurator.ts'

export default {
  styles: {
    fontFamily: FONT_OPTIONS.Georgia,
    backgroundColor: '#ffffff',
    textColor: '#0f172a',
    accentColor: '#0f172a',
    fontSize: 14,
    alignment: TextAlignment.LEFT,
  },
  additional: {
    disclaimer: {
      color: '#7f8c8d',
    },
  },
}
