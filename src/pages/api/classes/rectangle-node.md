[@add-on-hlapi-sdk](../overview.md) / RectangleNode

# Class: RectangleNode

A RectangleNode represents a rectangle object in the scenegraph.

## Hierarchy

- [`FillableNode`](fillable-node.md)

  ↳ **`RectangleNode`**

## Implements

- [`IRectangularNode`](../interfaces/i-rectangular-node.md)

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](rectangle-node.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](rectangle-node.md#absoluteRotation)
- [absoluteTransform](rectangle-node.md#absoluteTransform)
- [allChildren](rectangle-node.md#allChildren)
- [blendMode](rectangle-node.md#blendMode)
- [bottomLeftRadius](rectangle-node.md#bottomLeftRadius)
- [bottomRightRadius](rectangle-node.md#bottomRightRadius)
- [fills](rectangle-node.md#fills)
- [height](rectangle-node.md#height)
- [locked](rectangle-node.md#locked)
- [opacity](rectangle-node.md#opacity)
- [parent](rectangle-node.md#parent)
- [relativeRotation](rectangle-node.md#relativeRotation)
- [relativeTransform](rectangle-node.md#relativeTransform)
- [strokes](rectangle-node.md#strokes)
- [topLeftRadius](rectangle-node.md#topLeftRadius)
- [topRightRadius](rectangle-node.md#topRightRadius)
- [translateX](rectangle-node.md#translateX)
- [translateY](rectangle-node.md#translateY)
- [type](rectangle-node.md#type)
- [width](rectangle-node.md#width)

### Methods

- [getUniformCornerRadius](rectangle-node.md#getUniformCornerRadius)
- [removeFromParent](rectangle-node.md#removeFromParent)
- [setUniformCornerRadius](rectangle-node.md#setUniformCornerRadius)

## Properties

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

[FillableNode](fillable-node.md).[DEFAULT_STROKE_WIDTH](fillable-node.md#DEFAULT_STROKE_WIDTH)

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

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

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

FillableNode.absoluteTransform

___

### <a id="allChildren" name="allChildren"></a> allChildren

• `get` **allChildren**(): `Readonly`<`Iterable`<[`Node`](node.md)\>\>

Returns a read-only list of all children of the node. General-purpose content containers such as ArtboardNode or
GroupNode also provide a mutable [children](container-node.md#children) list. Other nodes with a more specific structure can
hold children in various discrete "slots"; this `allChildren` list includes *all* such children and reflects their
overall display z-order.

#### Returns

`Readonly`<`Iterable`<[`Node`](node.md)\>\>

#### Inherited from

FillableNode.allChildren

___

### <a id="blendMode" name="blendMode"></a> blendMode

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

___

### <a id="bottomLeftRadius" name="bottomLeftRadius"></a> bottomLeftRadius

• `get` **bottomLeftRadius**(): `number`

The radius of the bottom left corner, or 0 if the corner is not rounded.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Returns

`number`

• `set` **bottomLeftRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### <a id="bottomRightRadius" name="bottomRightRadius"></a> bottomRightRadius

• `get` **bottomRightRadius**(): `number`

The radius of the bottom right corner, or 0 if the corner is not rounded.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Returns

`number`

• `set` **bottomRightRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### <a id="fills" name="fills"></a> fills

• `get` **fills**(): [`ItemList`](item-list.md)<[`Fill`](../interfaces/fill.md)\>

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](item-list.md)<[`Fill`](../interfaces/fill.md)\>

#### Inherited from

FillableNode.fills

___

### <a id="height" name="height"></a> height

• `get` **height**(): `number`

The height of the node.
Must be at least MIN_DIMENSION.

#### Returns

`number`

#### Implementation of

[IRectangularNode](../interfaces/i-rectangular-node.md).[height](../interfaces/i-rectangular-node.md#height)

• `set` **height**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IRectangularNode](../interfaces/i-rectangular-node.md).[height](../interfaces/i-rectangular-node.md#height)

___

### <a id="locked" name="locked"></a> locked

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

___

### <a id="opacity" name="opacity"></a> opacity

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

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

#### Inherited from

FillableNode.parent

___

### <a id="relativeRotation" name="relativeRotation"></a> relativeRotation

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

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

FillableNode.relativeTransform

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](item-list.md)<[`Stroke`](../interfaces/stroke.md)\>

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](item-list.md)<[`Stroke`](../interfaces/stroke.md)\>

#### Inherited from

FillableNode.strokes

___

### <a id="topLeftRadius" name="topLeftRadius"></a> topLeftRadius

• `get` **topLeftRadius**(): `number`

The radius of the top left corner, or 0 if the corner is not rounded.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Returns

`number`

• `set` **topLeftRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### <a id="topRightRadius" name="topRightRadius"></a> topRightRadius

• `get` **topRightRadius**(): `number`

The radius of the top right corner, or 0 if the corner is not rounded.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Returns

`number`

• `set` **topRightRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### <a id="translateX" name="translateX"></a> translateX

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

___

### <a id="translateY" name="translateY"></a> translateY

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

___

### <a id="type" name="type"></a> type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

FillableNode.type

___

### <a id="width" name="width"></a> width

• `get` **width**(): `number`

The width of the node.
Must be at least MIN_DIMENSION.

#### Returns

`number`

#### Implementation of

[IRectangularNode](../interfaces/i-rectangular-node.md).[width](../interfaces/i-rectangular-node.md#width)

• `set` **width**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IRectangularNode](../interfaces/i-rectangular-node.md).[width](../interfaces/i-rectangular-node.md#width)

## Methods

### <a id="getUniformCornerRadius" name="getUniformCornerRadius"></a> getUniformCornerRadius

▸ **getUniformCornerRadius**(): `undefined` \| `number`

If all corners have the same rounding radius value, returns that value (or 0 if all corners are not rounded).
If the corner radii differ, returns undefined.

#### Returns

`undefined` \| `number`

___

### <a id="removeFromParent" name="removeFromParent"></a> removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[FillableNode](fillable-node.md).[removeFromParent](fillable-node.md#removeFromParent)

___

### <a id="setUniformCornerRadius" name="setUniformCornerRadius"></a> setUniformCornerRadius

▸ **setUniformCornerRadius**(`radius`): `void`

Set all corner radii to the same value. Set to 0 to make the corners non-rounded.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`
