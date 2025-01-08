[@add-on-hlapi-sdk](../overview.md) / EllipseNode

# Class: EllipseNode

An EllipseNode represents an ellipse object in the scenegraph.

## Hierarchy

- [`FillableNode`](fillable-node.md)

  ↳ **`EllipseNode`**

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](ellipse-node.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](ellipse-node.md#absoluteRotation)
- [absoluteTransform](ellipse-node.md#absoluteTransform)
- [allChildren](ellipse-node.md#allChildren)
- [blendMode](ellipse-node.md#blendMode)
- [fills](ellipse-node.md#fills)
- [locked](ellipse-node.md#locked)
- [opacity](ellipse-node.md#opacity)
- [parent](ellipse-node.md#parent)
- [relativeRotation](ellipse-node.md#relativeRotation)
- [relativeTransform](ellipse-node.md#relativeTransform)
- [rx](ellipse-node.md#rx)
- [ry](ellipse-node.md#ry)
- [strokes](ellipse-node.md#strokes)
- [translateX](ellipse-node.md#translateX)
- [translateY](ellipse-node.md#translateY)
- [type](ellipse-node.md#type)

### Methods

- [removeFromParent](ellipse-node.md#removeFromParent)

## Properties

### DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

[FillableNode](fillable-node.md).[DEFAULT_STROKE_WIDTH](fillable-node.md#DEFAULT_STROKE_WIDTH)

## Accessors

### absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute (global) rotation angle in degrees – includes any cumulative rotation from the node's parent containers.

#### Returns

`number`

#### Inherited from

FillableNode.absoluteRotation

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

FillableNode.absoluteRotation

<hr />

### absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

FillableNode.absoluteTransform

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

FillableNode.allChildren

<hr />

### blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/blend-mode-value.md)

Blend mode determines how a node is composited onto the content below it. The default value is
[normal](../enums/blend-mode-value.md#normal) for most nodes, and [passThrough](../enums/blend-mode-value.md#passThrough) for GroupNodes.

#### Returns

[`BlendModeValue`](../enums/blend-mode-value.md)

#### Inherited from

FillableNode.blendMode

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/blend-mode-value.md) |

#### Returns

`void`

#### Inherited from

FillableNode.blendMode

<hr />

### fills

• `get` **fills**(): [`ItemList`](item-list.md) [`Fill`](../interfaces/fill.md)

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](item-list.md) [`Fill`](../interfaces/fill.md) 

#### Inherited from

FillableNode.fills

<hr />

### locked

• `get` **locked**(): `boolean`

The node's lock/unlock state. Locked nodes are excluded from the selection (see [selection](context.md#selection)), and
cannot be edited by the user unless they are unlocked first.

#### Returns

`boolean`

#### Inherited from

FillableNode.locked

• `set` **locked**(`locked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locked` | `boolean` |

#### Returns

`void`

#### Inherited from

FillableNode.locked

<hr />

### opacity

• `get` **opacity**(): `number`

The node's opacity, from 0.0 to 1.0

#### Returns

`number`

#### Inherited from

FillableNode.opacity

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

#### Inherited from

FillableNode.opacity

<hr />

### parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

#### Inherited from

FillableNode.parent

<hr />

### relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees, relative to its parent's axes. Modifying this value will also adjust the
node's x & y translation such that the node's center is in the same location after the rotation – i.e. this setter
rotates the node about its bounding box's center, not its origin.

#### Returns

`number`

#### Inherited from

FillableNode.relativeRotation

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

FillableNode.relativeRotation

<hr />

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

FillableNode.relativeTransform

<hr />

### rx

• `get` **rx**(): `number`

The radius of the ellipse on the x-axis.

#### Returns

`number`

• `set` **rx**(`value`): `void`

Set the ellipse radius on the x-axis.
Must be at least MIN_DIMENSION / 2.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

<hr />

### ry

• `get` **ry**(): `number`

The radius of the ellipse on the y-axis.

#### Returns

`number`

• `set` **ry**(`value`): `void`

Set the ellipse radius on the y-axis.
Must be at least MIN_DIMENSION / 2.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

<hr />

### strokes

• `get` **strokes**(): [`ItemList`](item-list.md) [`Stroke`](../interfaces/stroke.md) 

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](item-list.md) [`Stroke`](../interfaces/stroke.md) 

#### Inherited from

FillableNode.strokes

<hr />

### translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis.

#### Returns

`number`

#### Inherited from

FillableNode.translateX

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

FillableNode.translateX

<hr />

### translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis.

#### Returns

`number`

#### Inherited from

FillableNode.translateY

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

FillableNode.translateY

<hr />

### type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

FillableNode.type

## Methods

### removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[FillableNode](fillable-node.md).[removeFromParent](fillable-node.md#removeFromParent)
