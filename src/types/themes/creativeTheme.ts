import { FONT_OPTIONS } from '@/types/fontOptions.ts'
import { TextAlignment } from '@/types/configurator.ts'

export default {
  styles: {
    fontFamily: FONT_OPTIONS.TrebuchetMS,
    backgroundColor: '#ffffff',
    textColor: '#333333',
    accentColor: '#ff6b6b',
    fontSize: 14,
    alignment: TextAlignment.LEFT,
  },
  additional: {
    disclaimer: {
      color: '#777777',
    },
  },
}
