import { Extension } from '@tiptap/core'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontFamily: {
      setFontFamily: (font: string) => ReturnType
    }
  }
}

export const FontFamily = Extension.create({
  name: 'fontFamily',

  addGlobalAttributes() {
    return [
      {
        types: ['textStyle'],
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: el => el.style.fontFamily,
            renderHTML: attrs => {
              if (!attrs.fontFamily) return {}
              return { style: `font-family: ${attrs.fontFamily}` }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontFamily:
        font =>
        ({ chain }) =>
          chain().setMark('textStyle', { fontFamily: font }).run(),
    }
  },
})
