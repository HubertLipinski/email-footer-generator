import { FONT_OPTIONS } from '@/types/fontOptions.ts'
import { TextAlignment } from '@/types/configurator.ts'

export default {
  styles: {
    fontFamily: FONT_OPTIONS.BodoniMT,
    backgroundColor: '#ffffff',
    textColor: '#333333',
    accentColor: '#d4af37',
    fontSize: 14,
    alignment: TextAlignment.CENTER,
  },
  additional: {
    disclaimer: {
      color: '#7f8c8d',
    },
  },
}
