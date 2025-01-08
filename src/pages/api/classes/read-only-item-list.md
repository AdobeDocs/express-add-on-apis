[@add-on-hlapi-sdk](../overview.md) / ReadOnlyItemList

# Class: ReadOnlyItemList<T\>

ReadOnlyItemList represents an ordered list of API objects, representing items that are all children of the
same parent node. (The reverse is not necessarily true, however: this list might not include all
children that exist in the parent node. See [allChildren](node.md#allChildren) for details).

Items in a bare ReadOnlyItemList cannot be added, removed, or reordered. Subclasses like ItemList may add these capabilities, however.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ListItem`](../interfaces/list-item.md) |

## Hierarchy

- `TemplatizedProxyLiveObject`

  ↳ **`ReadOnlyItemList`**

  ↳↳ [`ArtboardList`](artboard-list.md)

  ↳↳ [`ItemList`](item-list.md)

  ↳↳ [`PageList`](page-list.md)

## Table of contents

### Accessors

- [first](ReadOnlyitem-list.md#first)
- [last](ReadOnlyitem-list.md#last)
- [length](ReadOnlyitem-list.md#length)

### Methods

- [[iterator]](ReadOnlyitem-list.md#[iterator])
- [item](ReadOnlyitem-list.md#item)
- [toArray](ReadOnlyitem-list.md#toArray)

## Accessors

### <a id="first" name="first"></a> first

• `get` **first**(): `undefined` \| `T`

First item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

___

### <a id="last" name="last"></a> last

• `get` **last**(): `undefined` \| `T`

Last item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

___

### <a id="length" name="length"></a> length

• `get` **length**(): `number`

Number of items in this list.

#### Returns

`number`

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

___

### <a id="item" name="item"></a> item

▸ **item**(`index`): `undefined` \| `T`

Returns item at the given index, or undefined if index is out of range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Zero-based index |

#### Returns

`undefined` \| `T`

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly `T`[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly `T`[]
