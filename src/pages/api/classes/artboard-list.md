[@add-on-hlapi-sdk](../overview.md) / ArtboardList

# Class: ArtboardList

ArtboardList represents an ordered list of ArtboardNodes arranged in a timeline sequence, where they are called "scenes."
All items in the list are children of a single PageNode.

ArtboardList also provides APIs for adding/removing artboards from the page. ArtboardList is never empty: it is illegal to
remove the last remaining artboard from the list.

## Hierarchy

- [`ReadOnlyItemList`](ReadOnlyitem-list.md)<[`ArtboardNode`](artboard-node.md)\>

  ↳ **`ArtboardList`**

## Table of contents

### Accessors

- [first](artboard-list.md#first)
- [last](artboard-list.md#last)
- [length](artboard-list.md#length)

### Methods

- [[iterator]](artboard-list.md#[iterator])
- [addArtboard](artboard-list.md#addArtboard)
- [item](artboard-list.md#item)
- [remove](artboard-list.md#remove)
- [toArray](artboard-list.md#toArray)

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

▸ **[iterator]**(): `Iterator`<[`ArtboardNode`](artboard-node.md), `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<[`ArtboardNode`](artboard-node.md), `any`, `undefined`\>

#### Inherited from

[ReadOnlyItemList](ReadOnlyitem-list.md).[[iterator]](ReadOnlyitem-list.md#[iterator])

___

### <a id="addArtboard" name="addArtboard"></a> addArtboard

▸ **addArtboard**(): [`ArtboardNode`](artboard-node.md)

Create a new artboard and add it to the end of the list. The artboard size is the same as others on this page. The
artboard background is set to default fill color DEFAULT_ARTBOARD_FILL_COLOR.

#### Returns

[`ArtboardNode`](artboard-node.md)

the newly added artboard.

___

### <a id="item" name="item"></a> item

▸ **item**(`index`): `undefined` \| [`ArtboardNode`](artboard-node.md)

Returns item at the given index, or undefined if index is out of range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Zero-based index |

#### Returns

`undefined` \| [`ArtboardNode`](artboard-node.md)

#### Inherited from

[ReadOnlyItemList](ReadOnlyitem-list.md).[item](ReadOnlyitem-list.md#item)

___

### <a id="remove" name="remove"></a> remove

▸ **remove**(...`items`): `void`

Remove the items from the list.

**`Throws`**

An error if any of the items are not in the list or if removing the
items would cause the list to be empty. If one of these errors occurs, the list
is not modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | [`ArtboardNode`](artboard-node.md)[] |

#### Returns

`void`

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly [`ArtboardNode`](artboard-node.md)[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly [`ArtboardNode`](artboard-node.md)[]

#### Inherited from

[ReadOnlyItemList](ReadOnlyitem-list.md).[toArray](ReadOnlyitem-list.md#toArray)
