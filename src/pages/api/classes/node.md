[@add-on-hlapi-sdk](../overview.md) / Node

# Class: Node

A Node represents an object in the scenegraph, the document's visual content tree.

## Hierarchy

- `ProxyLiveObject`

  ↳ **`Node`**

  ↳↳ [`ContainerNode`](container-node.md)

  ↳↳ [`ExpressRootNode`](express-root-node.md)

  ↳↳ [`ImageRectangleNode`](image-rectangle-node.md)

  ↳↳ [`MediaContainerNode`](Mediacontainer-node.md)

  ↳↳ [`PageNode`](page-node.md)

  ↳↳ [`StrokableNode`](strokable-node.md)

  ↳↳ [`TextNode`](text-node.md)

## Table of contents

### Accessors

- [absoluteRotation](node.md#absoluteRotation)
- [absoluteTransform](node.md#absoluteTransform)
- [allChildren](node.md#allChildren)
- [blendMode](node.md#blendMode)
- [locked](node.md#locked)
- [opacity](node.md#opacity)
- [parent](node.md#parent)
- [relativeRotation](node.md#relativeRotation)
- [relativeTransform](node.md#relativeTransform)
- [translateX](node.md#translateX)
- [translateY](node.md#translateY)
- [type](node.md#type)

### Methods

- [removeFromParent](node.md#removeFromParent)

## Accessors

### absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute (global) rotation angle in degrees – includes any cumulative rotation from the node's parent containers.

#### Returns

`number`

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

<hr />

### absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

<hr />

### allChildren

• `get` **allChildren**(): `Readonly` `Iterable` [`Node`](node.md) 

Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or
GroupNode also provide a mutable [children](container-node.md#children) list. Other nodes with a more specific structure can
hold children in various discrete "slots"; this `allChildren` list includes *all* such children and reflects their
overall display z-order.

#### Returns

`Readonly` `Iterable` [`Node`](node.md) 

<hr />

### blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/blend-mode-value.md)

Blend mode determines how a node is composited onto the content below it. The default value is
[normal](../enums/blend-mode-value.md#normal) for most nodes, and [passThrough](../enums/blend-mode-value.md#passThrough) for GroupNodes.

#### Returns

[`BlendModeValue`](../enums/blend-mode-value.md)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/blend-mode-value.md) |

#### Returns

`void`

<hr />

### locked

• `get` **locked**(): `boolean`

The node's lock/unlock state. Locked nodes are excluded from the selection (see [selection](context.md#selection)), and
cannot be edited by the user unless they are unlocked first.

#### Returns

`boolean`

• `set` **locked**(`locked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locked` | `boolean` |

#### Returns

`void`

<hr />

### opacity

• `get` **opacity**(): `number`

The node's opacity, from 0.0 to 1.0

#### Returns

`number`

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

<hr />

### parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

<hr />

### relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees, relative to its parent's axes. Modifying this value will also adjust the
node's x & y translation such that the node's center is in the same location after the rotation – i.e. this setter
rotates the node about its bounding box's center, not its origin.

#### Returns

`number`

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

<hr />

###  relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

<hr />

### translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis.

#### Returns

`number`

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

<hr />

### translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis.

#### Returns

`number`

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

<hr />

### type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

## Methods

### removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`
