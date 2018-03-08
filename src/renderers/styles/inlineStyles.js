export default (props) => {

  const colorStyles = {}
  const bgColorStyles = {}
  const fontSizeStyles = {}
  const fontFamilyStyles = {}
  const lineHeightStyles = {}
  const letterSpacingtStyles = {}
  const indentStyles = {}
  const splitLineStyles = {}

  props.colors.forEach((color) => {
    let color_id = color.replace('#', '').toUpperCase()
    colorStyles['COLOR-' + color_id] = { color }
    bgColorStyles['BGCOLOR-' + color_id] = { backgroundColor: color }
  })

  props.fontSizes.forEach((fontSize) => {
    fontSizeStyles['FONTSIZE-' + fontSize] = { fontSize: fontSize }
  })

  props.fontFamilies.forEach((fontFamily) => {
    fontFamilyStyles['FONTFAMILY-' + fontFamily.name.toUpperCase()] = {
      fontFamily: fontFamily.family
    }
  })

  props.lineHeights.forEach((lineHeight) => {
    lineHeightStyles['LINEHEIGHT-' + lineHeight] = { lineHeight: lineHeight }
  })

  props.letterSpacings.forEach((letterSpacing) => {
    letterSpacingtStyles['LETTERSPACING-' + letterSpacing] = { letterSpacing: letterSpacing }
  })
  props.indents.forEach((indent) => {
    indentStyles['INDENT-' + indent] = { paddingLeft: indent, paddingRight: indent}
  })

  props.splitLines.forEach((splitLine) => {
    splitLineStyles['SPLITLINE-' + splitLine] = { border: '1px ' + splitLine.toLowerCase() + ' #666',display: 'block'}
  })
  
  return {
    'SUPERSCRIPT': {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    'SUBSCRIPT': {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    },
    ...colorStyles,
    ...bgColorStyles,
    ...fontSizeStyles,
    ...fontFamilyStyles,
    ...lineHeightStyles,
    ...letterSpacingtStyles,
    ...indentStyles,
    ...splitLineStyles
  }

}