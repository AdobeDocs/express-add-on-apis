[@add-on-hlapi-sdk](../overview.md) / PageList

# Class: PageList

PageList represents an ordered list of PageNodes, all of which are children of the root node of the document's "scenegraph"
artwork tree. A page contains one or more artboards, representing "scenes" in a linear timeline sequence. Those artboards
in turn contain all the visual content of the document.

PageList also provides APIs for adding/removing pages from the document. PageList is never empty: it is illegal to
remove the last remaining page from the list.

## Hierarchy

- [`ReadOnlyItemList`](ReadOnlyitem-list.md)<[`PageNode`](page-node.md)\>

  ↳ **`PageList`**

## Table of contents

### Accessors

- [first](page-list.md#first)
- [last](page-list.md#last)
- [length](page-list.md#length)

### Methods

- [[iterator]](page-list.md#[iterator])
- [addPage](page-list.md#addPage)
- [item](page-list.md#item)
- [toArray](page-list.md#toArray)

## Accessors

### <a id="first" name="first"></a> first

• `get` **first**(): `undefined` \| `T`

First item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

#### Inherited from

ReadOnlyItemList.first

___

### <a id="last" name="last"></a> last

• `get` **last**(): `undefined` \| `T`

Last item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

#### Inherited from

ReadOnlyItemList.last

___

### <a id="length" name="length"></a> length

• `get` **length**(): `number`

Number of items in this list.

#### Returns

`number`

#### Inherited from

ReadOnlyItemList.length

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `Iterator`<[`PageNode`](page-node.md), `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<[`PageNode`](page-node.md), `any`, `undefined`\>

#### Inherited from

[ReadOnlyItemList](ReadOnlyitem-list.md).[[iterator]](ReadOnlyitem-list.md#[iterator])

___

### <a id="addPage" name="addPage"></a> addPage

▸ **addPage**(`geometry`): [`PageNode`](page-node.md)

Create a new page containing a single empty artboard, and add it to the end of the list. The artboard is configured
with the same defaults as in [addArtboard](artboard-list.md#addArtboard). The page's artboard becomes the default target for
newly inserted content ([insertionParent](context.md#insertionParent)) and the viewport switches to display this artboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`RectangleGeometry`](../interfaces/rectangle-geometry.md) | The size of the new page. |

#### Returns

[`PageNode`](page-node.md)

___

### <a id="item" name="item"></a> item

▸ **item**(`index`): `undefined` \| [`PageNode`](page-node.md)

Returns item at the given index, or undefined if index is out of range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Zero-based index |

#### Returns

`undefined` \| [`PageNode`](page-node.md)

#### Inherited from

[ReadOnlyItemList](ReadOnlyitem-list.md).[item](ReadOnlyitem-list.md#item)

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly [`PageNode`](page-node.md)[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly [`PageNode`](page-node.md)[]

#### Inherited from

[ReadOnlyItemList](ReadOnlyitem-list.md).[toArray](ReadOnlyitem-list.md#toArray)
