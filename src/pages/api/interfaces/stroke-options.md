[@add-on-hlapi-sdk](../overview.md) / StrokeOptions

# Interface: StrokeOptions

Properties that can be provided to create a stroke.

## Hierarchy

- **`StrokeOptions`**

  ↳ [`Stroke`](stroke.md)

## Table of contents

### Properties

- [color](stroke-options.md#color)
- [dashOffset](stroke-options.md#dashOffset)
- [dashPattern](stroke-options.md#dashPattern)
- [width](stroke-options.md#width)

## Properties

### <a id="color" name="color"></a> color

• `Readonly` **color**: [`Color`](../classes/color.md)

The color of a stroke.

___

### <a id="dashOffset" name="dashOffset"></a> dashOffset

• `Readonly` **dashOffset**: `number`

Number of pixels the beginning of dash pattern should be offset along the stroke.

___

### <a id="dashPattern" name="dashPattern"></a> dashPattern

• `Readonly` **dashPattern**: `number`[]

If empty, this is a solid stroke.
If non-empty, the values alternate between length of a rendered and blank segment,
repeated along the length of the stroke. The first value represents the first solid segment.

___

### <a id="width" name="width"></a> width

• `Readonly` **width**: `number`

The thickness of a stroke. Must be from MIN_STROKE_WIDTH to MAX_STROKE_WIDTH.
