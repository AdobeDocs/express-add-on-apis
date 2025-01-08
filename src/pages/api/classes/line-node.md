[@add-on-hlapi-sdk](../overview.md) / LineNode

# Class: LineNode

A LineNode represents a simple line object in the scenegraph – a single straight-line segment.

## Hierarchy

- [`StrokableNode`](strokable-node.md)

  ↳ **`LineNode`**

## Table of contents

### Properties

- [DEFAULT\_END\_X](line-node.md#DEFAULT_END_X)
- [DEFAULT\_END\_Y](line-node.md#DEFAULT_END_Y)
- [DEFAULT\_START\_X](line-node.md#DEFAULT_START_X)
- [DEFAULT\_START\_Y](line-node.md#DEFAULT_START_Y)
- [DEFAULT\_STROKE\_WIDTH](line-node.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](line-node.md#absoluteRotation)
- [absoluteTransform](line-node.md#absoluteTransform)
- [allChildren](line-node.md#allChildren)
- [blendMode](line-node.md#blendMode)
- [endArrowHeadType](line-node.md#endArrowHeadType)
- [endX](line-node.md#endX)
- [endY](line-node.md#endY)
- [locked](line-node.md#locked)
- [opacity](line-node.md#opacity)
- [parent](line-node.md#parent)
- [relativeRotation](line-node.md#relativeRotation)
- [relativeTransform](line-node.md#relativeTransform)
- [startArrowHeadType](line-node.md#startArrowHeadType)
- [startX](line-node.md#startX)
- [startY](line-node.md#startY)
- [strokes](line-node.md#strokes)
- [translateX](line-node.md#translateX)
- [translateY](line-node.md#translateY)
- [type](line-node.md#type)

### Methods

- [removeFromParent](line-node.md#removeFromParent)
- [setEndPoints](line-node.md#setEndPoints)

## Properties

### DEFAULT\_END\_X

▪ `Static` `Readonly` **DEFAULT\_END\_X**: ``100``

<hr />

### DEFAULT\_END\_Y

▪ `Static` `Readonly` **DEFAULT\_END\_Y**: ``100``

<hr />

### DEFAULT\_START\_X

▪ `Static` `Readonly` **DEFAULT\_START\_X**: ``0``

<hr />

### DEFAULT\_START\_Y

▪ `Static` `Readonly` **DEFAULT\_START\_Y**: ``0``

<hr />

### DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

[StrokableNode](strokable-node.md).[DEFAULT_STROKE_WIDTH](strokable-node.md#DEFAULT_STROKE_WIDTH)

## Accessors

### absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute (global) rotation angle in degrees – includes any cumulative rotation from the node's parent containers.

#### Returns

`number`

#### Inherited from

StrokableNode.absoluteRotation

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.absoluteRotation

<hr />

### absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

StrokableNode.absoluteTransform

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

StrokableNode.allChildren

<hr />

### blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/blend-mode-value.md)

Blend mode determines how a node is composited onto the content below it. The default value is
[normal](../enums/blend-mode-value.md#normal) for most nodes, and [passThrough](../enums/blend-mode-value.md#passThrough) for GroupNodes.

#### Returns

[`BlendModeValue`](../enums/blend-mode-value.md)

#### Inherited from

StrokableNode.blendMode

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/blend-mode-value.md) |

#### Returns

`void`

#### Inherited from

StrokableNode.blendMode

<hr />

### endArrowHeadType

• `get` **endArrowHeadType**(): [`ArrowHeadType`](../enums/arrow-head-type.md)

The shape encapsulating the end of a line. The size and color of the arrowhead
depends on the first available stroke's weight and color assigned to the node.
Removal of all strokes on this line leads to the arrowhead's removal.

The getter returns [none](../enums/arrow-head-type.md#none) when there are no strokes on the line
or no arrowhead on the first stroke of the line.

#### Returns

[`ArrowHeadType`](../enums/arrow-head-type.md)

• `set` **endArrowHeadType**(`type`): `void`

The setter creates a default stroke for the line when there are no strokes on the line,
and updates the arrowhead on only the first stroke of the line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ArrowHeadType`](../enums/arrow-head-type.md) |

#### Returns

`void`

<hr />

### endX

• `get` **endX**(): `number`

The end point on the x-axis in the parent's coordinate system. Modify using `setEndPoints()`.

#### Returns

`number`

<hr />

### endY

• `get` **endY**(): `number`

The end point on the y-axis in the parent's coordinate system. Modify using `setEndPoints()`.

#### Returns

`number`

<hr />

### locked

• `get` **locked**(): `boolean`

The node's lock/unlock state. Locked nodes are excluded from the selection (see [selection](context.md#selection)), and
cannot be edited by the user unless they are unlocked first.

#### Returns

`boolean`

#### Inherited from

StrokableNode.locked

• `set` **locked**(`locked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locked` | `boolean` |

#### Returns

`void`

#### Inherited from

StrokableNode.locked

<hr />

### opacity

• `get` **opacity**(): `number`

The node's opacity, from 0.0 to 1.0

#### Returns

`number`

#### Inherited from

StrokableNode.opacity

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.opacity

<hr />

### parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

#### Inherited from

StrokableNode.parent

<hr />

### relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees, relative to its parent's axes. Modifying this value will also adjust the
node's x & y translation such that the node's center is in the same location after the rotation – i.e. this setter
rotates the node about its bounding box's center, not its origin.

#### Returns

`number`

#### Inherited from

StrokableNode.relativeRotation

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.relativeRotation

<hr />

### relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

StrokableNode.relativeTransform

<hr />

### startArrowHeadType

• `get` **startArrowHeadType**(): [`ArrowHeadType`](../enums/arrow-head-type.md)

The shape encapsulating the start of a line. The size and color of the arrowhead
depends on the first available stroke's weight and color assigned to the node.
Removal of all strokes on this line leads to the arrowhead's removal.

The getter returns [none](../enums/arrow-head-type.md#none) when there are no strokes on the line
or no arrowhead on the first stroke of the line.

#### Returns

[`ArrowHeadType`](../enums/arrow-head-type.md)

• `set` **startArrowHeadType**(`type`): `void`

The setter creates a default stroke for the line when there are no strokes on the line,
and updates the arrowhead on only the first stroke of the line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ArrowHeadType`](../enums/arrow-head-type.md) |

#### Returns

`void`

<hr />

### startX

• `get` **startX**(): `number`

The start point on the x-axis in the parent's coordinate system. Modify using `setEndPoints()`.

#### Returns

`number`

<hr />

### startY

• `get` **startY**(): `number`

The start point on the y-axis in the parent's coordinate system. Modify using `setEndPoints()`.

#### Returns

`number`

<hr />

### strokes

• `get` **strokes**(): [`ItemList`](item-list.md) [`Stroke`](../interfaces/stroke.md) 

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](item-list.md) [`Stroke`](../interfaces/stroke.md) 

#### Inherited from

StrokableNode.strokes

<hr />

### translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis.

#### Returns

`number`

#### Inherited from

StrokableNode.translateX

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.translateX

<hr />

### translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis.

#### Returns

`number`

#### Inherited from

StrokableNode.translateY

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.translateY

<hr />

### type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

StrokableNode.type

## Methods

### removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[StrokableNode](strokable-node.md).[removeFromParent](strokable-node.md#removeFromParent)

<hr />

### setEndPoints

▸ **setEndPoints**(`startX`, `startY`, `endX`, `endY`): `void`

Set the start and end points of the line in its local coordinate space (which may
differ from its parent's coordinate space based on `relativeTransform`, i.e.
`relativeRotation` and `translateX`/`Y`). The values passed in may be normalized
by this setter, shifting the node's translation and counter-shifting the start/end
points. Therefore, the start/end getters may return values different from the values
you passed into this setter, even though the line's visual bounds and appearance are
the same. Rotation is preserved.

#### Parameters

| Name | Type |
| :------ | :------ |
| `startX` | `number` |
| `startY` | `number` |
| `endX` | `number` |
| `endY` | `number` |

#### Returns

`void`
