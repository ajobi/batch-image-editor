figma.showUI(__html__, { width: 300, height: 250 })

let pluginFilters = null

const applyFilters = () => {
  for (const node of figma.currentPage.selection) {
    const fill = node.fills && node.fills.length === 1 ? node.fills[0] : null

    if (fill && fill.type === 'IMAGE') {
      const newFill = JSON.parse(JSON.stringify(fill))
      newFill.filters = pluginFilters
      node.fills = [newFill]
    }
  }
}

figma.ui.onmessage = filterValues => {
  pluginFilters = filterValues
  applyFilters()
}

figma.on("selectionchange", applyFilters)
