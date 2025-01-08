[@add-on-hlapi-sdk](../overview.md) / ArtboardNode

# Class: ArtboardNode

An ArtboardNode represents an artboard object in the scenegraph. All user visual content must be contained on an artboard.

When multiple artboards exist on a page, the artboards represent "scenes" in a linear timeline sequence.

## Hierarchy

- [`ContainerNode`](container-node.md)

  ↳ **`ArtboardNode`**

## Implements

- [`IRectangularNode`](../interfaces/i-rectangular-node.md)
- [`IStrokableNode`](../interfaces/Istrokable-node.md)

## Table of contents

### Accessors

- [absoluteRotation](artboard-node.md#absoluteRotation)
- [absoluteTransform](artboard-node.md#absoluteTransform)
- [allChildren](artboard-node.md#allChildren)
- [blendMode](artboard-node.md#blendMode)
- [children](artboard-node.md#children)
- [fill](artboard-node.md#fill)
- [height](artboard-node.md#height)
- [locked](artboard-node.md#locked)
- [opacity](artboard-node.md#opacity)
- [parent](artboard-node.md#parent)
- [relativeRotation](artboard-node.md#relativeRotation)
- [relativeTransform](artboard-node.md#relativeTransform)
- [strokes](artboard-node.md#strokes)
- [translateX](artboard-node.md#translateX)
- [translateY](artboard-node.md#translateY)
- [type](artboard-node.md#type)
- [width](artboard-node.md#width)

### Methods

- [removeFromParent](artboard-node.md#removeFromParent)

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute (global) rotation angle in degrees – includes any cumulative rotation from the node's parent containers.

#### Returns

`number`

#### Inherited from

ContainerNode.absoluteRotation

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

ContainerNode.absoluteRotation

<hr />

### absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

ContainerNode.absoluteTransform

<hr />

### allChildren

• `get` **allChildren**(): `Readonly`<`Iterable`<[`Node`](node.md)\>\>

Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or
GroupNode also provide a mutable [children](container-node.md#children) list. Other nodes with a more specific structure can
hold children in various discrete "slots"; this `allChildren` list includes *all* such children and reflects their
overall display z-order.

#### Returns

`Readonly` `Iterable` [`Node`](node.md)

#### Inherited from

ContainerNode.allChildren

<hr />

### blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/blend-mode-value.md)

Blend mode determines how a node is composited onto the content below it. The default value is
[normal](../enums/blend-mode-value.md#normal) for most nodes, and [passThrough](../enums/blend-mode-value.md#passThrough) for GroupNodes.

#### Returns

[`BlendModeValue`](../enums/blend-mode-value.md)

#### Inherited from

ContainerNode.blendMode

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/blend-mode-value.md) |

#### Returns

`void`

#### Inherited from

ContainerNode.blendMode

<hr />

### children

• `get` **children**(): [`ItemList`](item-list.md)<[`Node`](node.md)\>

The node's children. Use the methods on this ItemList object to get, add, and remove children.

#### Returns

[`ItemList`](item-list.md)<[`Node`](node.md)\>

#### Inherited from

ContainerNode.children

<hr />

### fill

• `get` **fill**(): [`Fill`](../interfaces/fill.md)

The background fill of the artboard.

#### Returns

[`Fill`](../interfaces/fill.md)

• `set` **fill**(`fill`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | [`Fill`](../interfaces/fill.md) |

#### Returns

`void`

<hr />

### height

• `get` **height**(): `number`

The height of the artboard.

#### Returns

`number`

#### Implementation of

[IRectangularNode](../interfaces/i-rectangular-node.md).[height](../interfaces/i-rectangular-node.md#height)

<hr />

### locked

• `get` **locked**(): `boolean`

The node's lock/unlock state. Locked nodes are excluded from the selection (see [selection](context.md#selection)), and
cannot be edited by the user unless they are unlocked first.

#### Returns

`boolean`

#### Inherited from

ContainerNode.locked

• `set` **locked**(`locked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locked` | `boolean` |

#### Returns

`void`

#### Inherited from

ContainerNode.locked

<hr />

### opacity

• `get` **opacity**(): `number`

The node's opacity, from 0.0 to 1.0

#### Returns

`number`

#### Inherited from

ContainerNode.opacity

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

#### Inherited from

ContainerNode.opacity

<hr />

### parent

• `get` **parent**(): `undefined` \| [`PageNode`](page-node.md)

The node's parent. Undefined if the node is an orphan.

#### Returns

`undefined` \| [`PageNode`](page-node.md)

#### Overrides

ContainerNode.parent

<hr />

### <a id="relativeRotation" name="relativeRotation"></a> relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees, relative to its parent's axes. Modifying this value will also adjust the
node's x & y translation such that the node's center is in the same location after the rotation – i.e. this setter
rotates the node about its bounding box's center, not its origin.

#### Returns

`number`

#### Inherited from

ContainerNode.relativeRotation

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

ContainerNode.relativeRotation

<hr />

### relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

ContainerNode.relativeTransform

<hr />

### strokes

• `get` **strokes**(): [`ItemList`](item-list.md) [`Stroke`](../interfaces/stroke.md)

Any strokes(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](item-list.md) [`Stroke`](../interfaces/stroke.md) 

#### Implementation of

[IStrokableNode](../interfaces/Istrokable-node.md).[strokes](../interfaces/Istrokable-node.md#strokes)

<hr />

### translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis.

#### Returns

`number`

#### Inherited from

ContainerNode.translateX

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

ContainerNode.translateX

<hr />

### translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis.

#### Returns

`number`

#### Inherited from

ContainerNode.translateY

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

ContainerNode.translateY

<hr />

### type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

ContainerNode.type

<hr />

### width

• `get` **width**(): `number`

The width of the artboard.

#### Returns

`number`

#### Implementation of

[IRectangularNode](../interfaces/i-rectangular-node.md).[width](../interfaces/i-rectangular-node.md#width)

## Methods

### removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[ContainerNode](container-node.md).[removeFromParent](container-node.md#removeFromParent)
