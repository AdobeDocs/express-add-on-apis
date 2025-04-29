[@add-on-hlapi-sdk](../overview.md) / PathNode

# Class: PathNode

A PathNode represents a generic vector path shape in the scenegraph. Paths cannot be created or edited through this API
yet, only read.

## Hierarchy

- [`FillableNode`](fillable-node.md)

  ↳ **`PathNode`**

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](path-node.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](path-node.md#absoluteRotation)
- [absoluteTransform](path-node.md#absoluteTransform)
- [allChildren](path-node.md#allChildren)
- [blendMode](path-node.md#blendMode)
- [fillRule](path-node.md#fillRule)
- [fills](path-node.md#fills)
- [locked](path-node.md#locked)
- [opacity](path-node.md#opacity)
- [parent](path-node.md#parent)
- [path](path-node.md#path)
- [relativeRotation](path-node.md#relativeRotation)
- [relativeTransform](path-node.md#relativeTransform)
- [strokes](path-node.md#strokes)
- [translateX](path-node.md#translateX)
- [translateY](path-node.md#translateY)
- [type](path-node.md#type)

### Methods

- [removeFromParent](path-node.md#removeFromParent)

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

### <a id="fillRule" name="fillRule"></a> fillRule

• `get` **fillRule**(): [`FillRuleValue`](../enums/fill-rule-value.md)

The fill rule specifies how the interior area of a path is determined in cases where the path is self-intersecting or
has multiple disjoint parts. This value is read-only and cannot be modified via this API yet.

#### Returns

[`FillRuleValue`](../enums/fill-rule-value.md)

___

### <a id="fills" name="fills"></a> fills

• `get` **fills**(): [`ItemList`](item-list.md)<[`Fill`](../interfaces/fill.md)\>

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](item-list.md)<[`Fill`](../interfaces/fill.md)\>

#### Inherited from

FillableNode.fills

___

### <a id="locked" name="locked"></a> locked

• `get` **locked**(): `boolean`

The node's lock/unlock state. Locked nodes are excluded from the selection (see [selection](context.md#selection)), and
cannot be edited by the user unless they are unlocked first.

#### Returns

`boolean`
