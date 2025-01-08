[@add-on-hlapi-sdk](../overview.md) / GroupNode

# Class: GroupNode

A GroupNode represents a Group object in the scenegraph, which has a collection of generic children as well as a separate,
optional vector mask child.

## Hierarchy

- [`ContainerNode`](container-node.md)

  ↳ **`GroupNode`**

## Table of contents

### Accessors

- [absoluteRotation](group-node.md#absoluteRotation)
- [absoluteTransform](group-node.md#absoluteTransform)
- [allChildren](group-node.md#allChildren)
- [blendMode](group-node.md#blendMode)
- [children](group-node.md#children)
- [locked](group-node.md#locked)
- [maskShape](group-node.md#maskShape)
- [opacity](group-node.md#opacity)
- [parent](group-node.md#parent)
- [relativeRotation](group-node.md#relativeRotation)
- [relativeTransform](group-node.md#relativeTransform)
- [translateX](group-node.md#translateX)
- [translateY](group-node.md#translateY)
- [type](group-node.md#type)

### Methods

- [removeFromParent](group-node.md#removeFromParent)

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

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's absolute (global) transform matrix.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

ContainerNode.absoluteTransform

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

ContainerNode.allChildren

___

### <a id="blendMode" name="blendMode"></a> blendMode

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

___

### <a id="children" name="children"></a> children

• `get` **children**(): [`ItemList`](item-list.md)<[`Node`](node.md)\>

The Group's regular children. Does not include the maskShape if one is present.
Use the methods on this ItemList object to get, add, and remove children.

#### Returns

[`ItemList`](item-list.md)<[`Node`](node.md)\>

#### Overrides

ContainerNode.children

___

### <a id="locked" name="locked"></a> locked

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

___

### <a id="maskShape" name="maskShape"></a> maskShape

• `get` **maskShape**(): `undefined` \| [`FillableNode`](fillable-node.md)

A vector shape that acts as a clipping mask for the content of this group. The mask node is separate from the Group's
generic 'children' collection, though both are part of the overall 'allChildren' of this Group.

#### Returns

`undefined` \| [`FillableNode`](fillable-node.md)

undefined if no mask is set on this group.

• `set` **maskShape**(`mask`): `void`

If set to a vector shape, adds a mask or replaces the exsiting mask on this Group.
If set to undefined, removes any mask that was previously set on this Group.

**`Throws`**

if the given node type cannot be used as a vector mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `undefined` \| [`FillableNode`](fillable-node.md) |

#### Returns

`void`

___

### <a id="opacity" name="opacity"></a> opacity

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

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](node.md)

#### Inherited from

ContainerNode.parent

___

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

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): [`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

The node's transform matrix relative to its parent.

#### Returns

[`mat2d`](https://glmatrix.net/docs/module-mat2d.html)

#### Inherited from

ContainerNode.relativeTransform

___

### <a id="translateX" name="translateX"></a> translateX

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

___

### <a id="translateY" name="translateY"></a> translateY

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

___

### <a id="type" name="type"></a> type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/scene-node-type-value-id.md)

#### Inherited from

ContainerNode.type

## Methods

### <a id="removeFromParent" name="removeFromParent"></a> removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[ContainerNode](container-node.md).[removeFromParent](container-node.md#removeFromParent)
