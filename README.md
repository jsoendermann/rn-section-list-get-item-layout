# React Native SectionList getItemLayout

This package provides a function that helps you construct the `getItemLayout` function for your `SectionList`s. For an explanation of why this exists, see [this post](https://medium.com/@jsoendermann/sectionlist-and-getitemlayout-2293b0b916fb). It's meant to be used like this:

```javascript
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.getItemLayout = sectionListGetItemLayout({
      // The height of the row with rowData at the given sectionIndex and rowIndex
      getItemHeight: (rowData, sectionIndex, rowIndex) => sectionIndex === 0 ? 100 : 50,

      // These four properties are optional
      getSeparatorHeight: () => 1 / PixelRatio.get(), // The height of your separators
      getSectionHeaderHeight: () => 20, // The height of your section headers
      getSectionFooterHeight: () => 10, // The height of your section footers
      listHeaderHeight: 40, // The height of your list header
    })
  }

  render() {
    return (
      <SectionList
        {...otherStuff}
        getItemLayout={this.getItemLayout}
      />
    )
  }
}
```
