[@add-on-hlapi-sdk](../overview.md) / FillableNode

# Class: FillableNode

Base class for a Node that can have its own fill and stroke.

## Hierarchy

- [`StrokableNode`](strokable-node.md)

  ↳ **`FillableNode`**

  ↳↳ [`EllipseNode`](ellipse-node.md)

  ↳↳ [`PathNode`](path-node.md)

  ↳↳ [`RectangleNode`](rectangle-node.md)

## Implements

- [`IFillableNode`](../interfaces/Ifillable-node.md)

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](fillable-node.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](fillable-node.md#absoluteRotation)
- [absoluteTransform](fillable-node.md#absoluteTransform)
- [allChildren](fillable-node.md#allChildren)
- [blendMode](fillable-node.md#blendMode)
- [fills](fillable-node.md#fills)
- [locked](fillable-node.md#locked)
- [opacity](fillable-node.md#opacity)
- [parent](fillable-node.md#parent)
- [relativeRotation](fillable-node.md#relativeRotation)
- [relativeTransform](fillable-node.md#relativeTransform)
- [strokes](fillable-node.md#strokes)
- [translateX](fillable-node.md#translateX)
- [translateY](fillable-node.md#translateY)
- [type](fillable-node.md#type)

### Methods

- [removeFromParent](fillable-node.md#removeFromParent)

## Properties

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

[StrokableNode](strokable-node.md).[DEFAULT_STROKE_WIDTH](strokable-node.md#DEFAULT_STROKE_WIDTH)

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

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

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

StrokableNode.absoluteTransform

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

StrokableNode.allChildren

___

### <a id="blendMode" name="blendMode"></a> blendMode

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

___

### <a id="fills" name="fills"></a> fills

• `get` **fills**(): [`ItemList`](item-list.md)<[`Fill`](../interfaces/fill.md)\>

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](item-list.md)<[`Fill`](../interfaces/fill.md)\>

#### Implementation of

[IFillableNode](../interfaces/Ifillable-node.md).[fills](../interfaces/Ifillable-node.md#fills)

___

### <a id="locked" name="locked"></a> locked

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

___

### <a id="opacity" name="opacity"></a> opacity

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

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

#### Inherited from

StrokableNode.parent

___

### <a id="relativeRotation" name="relativeRotation"></a> relativeRotation

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

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

StrokableNode.relativeTransform

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](item-list.md)<[`Stroke`](../interfaces/stroke.md)\>

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](item-list.md)<[`Stroke`](../interfaces/stroke.md)\>

#### Inherited from

StrokableNode.strokes

___

### <a id="translateX" name="translateX"></a> translateX

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

___

### <a id="translateY" name="translateY"></a> translateY

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

___

### <a id="type" name="type"></a> type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

StrokableNode.type

## Methods

### <a id="removeFromParent" name="removeFromParent"></a> removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[StrokableNode](strokable-node.md).[removeFromParent](strokable-node.md#removeFromParent)
