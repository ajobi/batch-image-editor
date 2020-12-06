figma.showUI(__html__)

figma.ui.onmessage = (filterValues) => {
  for (const node of figma.currentPage.selection) {
    const fill = node.fills[0]

    if (fill && fill.type === 'IMAGE') {
      const newFill = JSON.parse(JSON.stringify(fill))
      newFill.filters = filterValues
      node.fills = [newFill]
    }
  }
}
