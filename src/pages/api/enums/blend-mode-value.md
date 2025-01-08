[@add-on-hlapi-sdk](../overview.md) / BlendModeValue

# Enumeration: BlendModeValue

<InlineAlert slots="text" variant="warning"/>
*Do not depend on the literal numeric values of these constants*, as they may change. Always reference the enum identifiers in your code.

Determines how a scenende is composited on top of the content rendered below it.

If a node is inside a container whose blend mode anything other than [passThrough](blend-mode-value.md#passThrough), then the node's blend mode only
interacts with other siblings within the same container. See documentation below for details.

## Table of contents

### Enumeration Members

- [color](blend-mode-value.md#color)
- [colorBurn](blend-mode-value.md#colorBurn)
- [colorDodge](blend-mode-value.md#colorDodge)
- [darken](blend-mode-value.md#darken)
- [difference](blend-mode-value.md#difference)
- [exclusion](blend-mode-value.md#exclusion)
- [hardLight](blend-mode-value.md#hardLight)
- [hue](blend-mode-value.md#hue)
- [lighten](blend-mode-value.md#lighten)
- [luminosity](blend-mode-value.md#luminosity)
- [multiply](blend-mode-value.md#multiply)
- [normal](blend-mode-value.md#normal)
- [overlay](blend-mode-value.md#overlay)
- [passThrough](blend-mode-value.md#passThrough)
- [saturation](blend-mode-value.md#saturation)
- [screen](blend-mode-value.md#screen)
- [softLight](blend-mode-value.md#softLight)

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
