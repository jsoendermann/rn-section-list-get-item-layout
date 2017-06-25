const sectionListGetItemLayout = require('./dist').default

test('Empty sections', () => {
  const getItemLayout = sectionListGetItemLayout(
    () => 3,
    () => 5,
    () => 7,
  )
  const data = [
    { data: [] },
    { data: [] },
    { data: [null] },
  ]
  expect(getItemLayout(data, 0)).toEqual({ length: 3, offset: 0, index: 0 })
  expect(getItemLayout(data, 2)).toEqual({ length: 3, offset: 6, index: 2 })
})

test('First row', () => {
  const getItemLayout = sectionListGetItemLayout(
    () => 3,
    () => 5,
    () => 7,
  )
  const data = [
    { data: [null, null, null] },
    { data: [null, null, null] },
  ]
  expect(getItemLayout(data, 1)).toEqual({ length: 7, offset: 3, index: 1 })
})

test('Last row', () => {
  const getItemLayout = sectionListGetItemLayout(
    () => 3,
    () => 5,
    () => 7,
  )
  const data = [
    { data: [null] },
    { data: [null, null] },
  ]
  expect(getItemLayout(data, 4)).toEqual({ length: 7, offset: 25, index: 4 })
})
