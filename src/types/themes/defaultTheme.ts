import { FONT_OPTIONS } from '@/types/fontOptions.ts'
import { TextAlignment } from '@/types/configurator.ts'

export default {
  styles: {
    fontFamily: FONT_OPTIONS.Arial,
    backgroundColor: '#ffffff',
    textColor: '#000000',
    accentColor: '#0047e1',
    fontSize: 14,
    alignment: TextAlignment.LEFT,
  },
  additional: {
    disclaimer: {
      color: '#787878',
    },
  },
}
