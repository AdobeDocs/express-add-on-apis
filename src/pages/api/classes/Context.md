[@express-document-sdk](../overview.md) / Context

# Class: Context

Contains the user's current selection state, indicating the content they are focused on.

## Hierarchy

- `ProxyLiveObject`

  ↳ **`Context`**

## Table of contents

### Accessors

- [hasSelection](Context.md#hasSelection)
- [insertionParent](Context.md#insertionParent)
- [selection](Context.md#selection)
- [selectionIncludingNonEditable](Context.md#selectionIncludingNonEditable)

## Accessors

### <a id="hasSelection" name="hasSelection"></a> hasSelection

• `get` **hasSelection**(): `boolean`

#### Returns

`boolean`

false if the current editable selection does not contain any nodes, otherwise true.

___

### <a id="insertionParent" name="insertionParent"></a> insertionParent

• `get` **insertionParent**(): [`ContainerNode`](ContainerNode.md)

#### Returns

[`ContainerNode`](ContainerNode.md)

the preferred parent to insert newly added content into.

___

### <a id="selection" name="selection"></a> selection

• `get` **selection**(): readonly [`Node`](Node.md)[]

#### Returns

readonly [`Node`](Node.md)[]

the current selection. Nodes that are locked or otherwise non-editable are never included in the selection.

___

### <a id="selectionIncludingNonEditable" name="selectionIncludingNonEditable"></a> selectionIncludingNonEditable

• `get` **selectionIncludingNonEditable**(): readonly [`Node`](Node.md)[]

#### Returns

readonly [`Node`](Node.md)[]

the current selection *and* any locked nodes the user has attempted to select at the same time. This can
happen for example if the user clicks on a locked node or if the user drags a selection marquee that overlaps
locked nodes in addition to regular unlocked nodes.
