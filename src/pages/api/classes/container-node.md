[@add-on-hlapi-sdk](../overview.md) / ContainerNode

# Class: ContainerNode

Base class for a Node that contains an entirely generic collection of children. Some ContainerNode subclasses may host
*additional* children in other specific "slots," such as background or mask layers; and non-ContainerNode classes may
also hold children in specified "slots." Use [allChildren](node.md#allChildren) for read access to children regardless of node type.

## Hierarchy

- [`Node`](node.md)

  ↳ **`ContainerNode`**

  ↳↳ [`ArtboardNode`](artboard-node.md)

  ↳↳ [`GroupNode`](group-node.md)

## Table of contents

### Accessors

- [absoluteRotation](container-node.md#absoluteRotation)
- [absoluteTransform](container-node.md#absoluteTransform)
- [allChildren](container-node.md#allChildren)
- [blendMode](container-node.md#blendMode)
- [children](container-node.md#children)
- [locked](container-node.md#locked)
- [opacity](container-node.md#opacity)
- [parent](container-node.md#parent)
- [relativeRotation](container-node.md#relativeRotation)
- [relativeTransform](container-node.md#relativeTransform)
- [translateX](container-node.md#translateX)
- [translateY](container-node.md#translateY)
- [type](container-node.md#type)

### Methods

- [removeFromParent](container-node.md#removeFromParent)

## Accessors

### absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute (global) rotation angle in degrees – includes any cumulative rotation from the node's parent containers.

#### Returns

`number`

#### Inherited from

Node.absoluteRotation

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.absoluteRotation

<hr />

### absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

Node.absoluteTransform

<hr />

### allChildren

• `get` **allChildren**(): `Readonly` `Iterable` [`Node`](node.md) 

Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or
GroupNode also provide a mutable [children](container-node.md#children) list. Other nodes with a more specific structure can
hold children in various discrete "slots"; this `allChildren` list includes *all* such children and reflects their
overall display z-order.

#### Returns

`Readonly` `Iterable` [`Node`](node.md) 

#### Inherited from

Node.allChildren

<hr />

### blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/blend-mode-value.md)

Blend mode determines how a node is composited onto the content below it. The default value is
[normal](../enums/blend-mode-value.md#normal) for most nodes, and [passThrough](../enums/blend-mode-value.md#passThrough) for GroupNodes.

#### Returns

[`BlendModeValue`](../enums/blend-mode-value.md)

#### Inherited from

Node.blendMode

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/blend-mode-value.md) |

#### Returns

`void`

#### Inherited from

Node.blendMode

<hr />

### children

• `get` **children**(): [`ItemList`](item-list.md) [`Node`](node.md) 

The node's children. Use the methods on this ItemList object to get, add, and remove children.

#### Returns

[`ItemList`](item-list.md) [`Node`](node.md) 

<hr />

### locked

• `get` **locked**(): `boolean`

The node's lock/unlock state. Locked nodes are excluded from the selection (see [selection](context.md#selection)), and
cannot be edited by the user unless they are unlocked first.

#### Returns

`boolean`

#### Inherited from

Node.locked

• `set` **locked**(`locked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locked` | `boolean` |

#### Returns

`void`

#### Inherited from

Node.locked

<hr />

### opacity

• `get` **opacity**(): `number`

The node's opacity, from 0.0 to 1.0

#### Returns

`number`

#### Inherited from

Node.opacity

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

#### Inherited from

Node.opacity

<hr />

### parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

#### Inherited from

Node.parent

<hr />

### relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees, relative to its parent's axes. Modifying this value will also adjust the
node's x & y translation such that the node's center is in the same location after the rotation – i.e. this setter
rotates the node about its bounding box's center, not its origin.

#### Returns

`number`

#### Inherited from

Node.relativeRotation

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.relativeRotation

<hr />

### relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

Node.relativeTransform

<hr />

### translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis.

#### Returns

`number`

#### Inherited from

Node.translateX

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.translateX

<hr />

### translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis.

#### Returns

`number`

#### Inherited from

Node.translateY

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.translateY

<hr />

### type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

Node.type

## Methods

### removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[Node](node.md).[removeFromParent](node.md#removeFromParent)
