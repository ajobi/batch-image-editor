// figma.showUI(__html__)

for (const node of figma.currentPage.selection) {
  const fill = node.fills[0]

  if (fill && fill.type === 'IMAGE') {
    const newFill = JSON.parse(JSON.stringify(fill))

    newFill.filters.exposure = 0.15
    newFill.filters.contrast = 0.45
    newFill.filters.temperature = -0.25

    node.fills = [newFill]
  }
}

figma.closePlugin()
