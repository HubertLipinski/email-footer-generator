import { FONT_OPTIONS } from '@/types/fontOptions.ts'
import { TextAlignment } from '@/types/configurator.ts'

export default {
  styles: {
    fontFamily: FONT_OPTIONS.Tahoma,
    backgroundColor: '#f8f9fA',
    textColor: '#2c3e50',
    accentColor: '#3498db',
    fontSize: 14,
    alignment: TextAlignment.LEFT,
  },
  additional: {
    disclaimer: {
      color: '#7f8c8d',
    },
  },
}
