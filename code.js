figma.showUI(__html__, { height: 250 })

figma.ui.onmessage = (filterValues) => {
  for (const node of figma.currentPage.selection) {
    const fill = node.fills ? node.fills[0] : null

    if (fill && fill.type === 'IMAGE') {
      const newFill = JSON.parse(JSON.stringify(fill))
      newFill.filters = filterValues
      node.fills = [newFill]
    }
  }
}
