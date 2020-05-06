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
      getSeparatorHeight: () => 1 / PixelRatio.get(), // The height of your separators, default = 0
      getSectionHeaderHeight: () => 20, // The height of your section headers, default = 0
      getSectionFooterHeight: () => 10, // The height of your section footers, default = 0
      listHeaderHeight: 40, // The height of your list header, default = 0
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

Other example with a Function Component using TypeScript:

```tsx
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

interface ExampleItem {
  title: string
  isBig: boolean
}

const getItemLayout = sectionListGetItemLayout<ExampleItem>({
  getItemHeight: (rowData, sectionIndex, rowIndex) => rowData.isBig ? 120: 80,
  // additional optional config params: see above
})

const MyComponent: React.FC = () => {
  return (
    <SectionList<ExampleItem>
      {...otherStuff}
      getItemLayout={getItemLayout}
    />
  )
}
```
