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

### color

• **color** = ``16``

<hr />

### colorBurn

• **colorBurn** = ``5``

<hr />

### colorDodge

• **colorDodge** = ``8``

<hr />

### darken

• **darken** = ``4``

<hr />

### difference

• **difference** = ``12``

<hr />

### exclusion

• **exclusion** = ``13``

<hr />

### hardLight

• **hardLight** = ``11``

<hr />

### hue

• **hue** = ``14``

<hr />

### lighten

• **lighten** = ``6``

<hr />

### luminosity

• **luminosity** = ``17``

<hr />

### multiply

• **multiply** = ``3``

<hr />

### normal

• **normal** = ``2``

The normal, default blend mode for leaf nodes.

Note: Group nodes default to using `passThrough` blend mode instead. See below.

<hr />

### overlay

• **overlay** = ``9``

<hr />

### passThrough

• **passThrough** = ``1``

This blend mode only applies to container nodes with children; for leaf nodes, it is treated the same as `normal`.

In this mode, the container has no particular blend mode of its own, but rather each individual child of the container
will be individually composited onto the background using its own specific blend mode. In *any other* blend mode, the
children are first rendered in an "isolation mode" and then the flattened result is composited onto other content
below it using solely the container's own blend mode.

Group nodes are set to `passThrough` by default.

<hr />

### saturation

• **saturation** = ``15``

<hr />

### screen

• **screen** = ``7``

<hr />

### softLight

• **softLight** = ``10``
