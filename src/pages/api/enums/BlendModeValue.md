[@add-on-hlapi-sdk](../overview.md) / BlendModeValue

# Enumeration: BlendModeValue

<InlineAlert slots="text" variant="warning"/>
*Do not depend on the literal numeric values of these constants*, as they may change. Always reference the enum identifiers in your code.

Determines how a scenende is composited on top of the content rendered below it.

If a node is inside a container whose blend mode anything other than [passThrough](BlendModeValue.md#passThrough), then the node's blend mode only
interacts with other siblings within the same container. See documentation below for details.

## Table of contents

### Enumeration Members

- [color](BlendModeValue.md#color)
- [colorBurn](BlendModeValue.md#colorBurn)
- [colorDodge](BlendModeValue.md#colorDodge)
- [darken](BlendModeValue.md#darken)
- [difference](BlendModeValue.md#difference)
- [exclusion](BlendModeValue.md#exclusion)
- [hardLight](BlendModeValue.md#hardLight)
- [hue](BlendModeValue.md#hue)
- [lighten](BlendModeValue.md#lighten)
- [luminosity](BlendModeValue.md#luminosity)
- [multiply](BlendModeValue.md#multiply)
- [normal](BlendModeValue.md#normal)
- [overlay](BlendModeValue.md#overlay)
- [passThrough](BlendModeValue.md#passThrough)
- [saturation](BlendModeValue.md#saturation)
- [screen](BlendModeValue.md#screen)
- [softLight](BlendModeValue.md#softLight)

## Enumeration Members

### <a id="color" name="color"></a> color

• **color** = ``16``

___

### <a id="colorBurn" name="colorBurn"></a> colorBurn

• **colorBurn** = ``5``

___

### <a id="colorDodge" name="colorDodge"></a> colorDodge

• **colorDodge** = ``8``

___

### <a id="darken" name="darken"></a> darken

• **darken** = ``4``

___

### <a id="difference" name="difference"></a> difference

• **difference** = ``12``

___

### <a id="exclusion" name="exclusion"></a> exclusion

• **exclusion** = ``13``

___

### <a id="hardLight" name="hardLight"></a> hardLight

• **hardLight** = ``11``

___

### <a id="hue" name="hue"></a> hue

• **hue** = ``14``

___

### <a id="lighten" name="lighten"></a> lighten

• **lighten** = ``6``

___

### <a id="luminosity" name="luminosity"></a> luminosity

• **luminosity** = ``17``

___

### <a id="multiply" name="multiply"></a> multiply

• **multiply** = ``3``

___

### <a id="normal" name="normal"></a> normal

• **normal** = ``2``

The normal, default blend mode for leaf nodes.

Note: Group nodes default to using `passThrough` blend mode instead. See below.

___

### <a id="overlay" name="overlay"></a> overlay

• **overlay** = ``9``

___

### <a id="passThrough" name="passThrough"></a> passThrough

• **passThrough** = ``1``

This blend mode only applies to container nodes with children; for leaf nodes, it is treated the same as `normal`.

In this mode, the container has no particular blend mode of its own, but rather each individual child of the container
will be individually composited onto the background using its own specific blend mode. In *any other* blend mode, the
children are first rendered in an "isolation mode" and then the flattened result is composited onto other content
below it using solely the container's own blend mode.

Group nodes are set to `passThrough` by default.

___

### <a id="saturation" name="saturation"></a> saturation

• **saturation** = ``15``

___

### <a id="screen" name="screen"></a> screen

• **screen** = ``7``

___

### <a id="softLight" name="softLight"></a> softLight

• **softLight** = ``10``
