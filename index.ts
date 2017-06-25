export type SectionListDataProp = {
  title: string
  data: any[]
}[]

export default (
  getSectionHeaderHeight: (sectionIndex: number) => number,
  getSeparatorHeight: (sectionIndex: number, rowIndex: number) => number,
  getItemHeight: (rowData: any, sectionIndex: number, rowIndex: number) => number,
) => (data: SectionListDataProp, index: number) => {
  let i = 0, sectionIndex = 0, rowIndex = null, offset = 0

  while (i < index) {
    // If rowIndex is null, we are currently pointing at this section's section header
    if (rowIndex === null) {
      offset += getSectionHeaderHeight(sectionIndex)

      const sectionData = data[sectionIndex].data
      // If this section is empty, we go right to the next section...
      if (sectionData.length === 0) {
        sectionIndex += 1
      // ...otherwise we make rowIndex point at the first row in this section
      } else {
        rowIndex = 0
      }
    } else {
      const sectionData = data[sectionIndex].data
      offset += getItemHeight(sectionData[rowIndex], sectionIndex, rowIndex)
      rowIndex += 1

      if (rowIndex >= sectionData.length) {
        sectionIndex += 1
        rowIndex = null
      // If this is not the last row in the section, we have to account for the
      // row separator
      } else {
        offset += getSeparatorHeight(sectionIndex, rowIndex)
      }
    }

    i += 1
  }

  let length
  if (rowIndex === null) {
    length = getSectionHeaderHeight(sectionIndex)
  } else {
    length = getItemHeight(data[sectionIndex].data[rowIndex], sectionIndex, rowIndex)
  }
  
  return { length, offset, index }
}
