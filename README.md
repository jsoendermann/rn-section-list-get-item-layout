# React Native SectionList getItemLayout

This package provides a function that helps you construct the `getItemLayout` function for your `SectionList`s. For an explanation of why this exists, see [this post](https://medium.com/@jsoendermann/sectionlist-and-getitemlayout-2293b0b916fb). This package is meant to be used like this:

```javascript
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.getItemLayout = sectionListGetItemLayout(
      () => 20, // The height of your section headers
      () => 1 / PixelRatio.get(), // The height of your separators
      // The height of the row with rowData at the given sectionIndex and rowIndex
      (rowData, sectionIndex, rowIndex) => sectionIndex === 0 ? 100 : 50,
    )
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