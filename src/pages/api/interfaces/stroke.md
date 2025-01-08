[@add-on-hlapi-sdk](../overview.md) / Stroke

# Interface: Stroke

Represents a stroke in the scenegraph. See [StrokableNode](../classes/strokable-node.md).

## Hierarchy

- [`StrokeOptions`](stroke-options.md)

  ↳ **`Stroke`**

## Table of contents

### Properties

- [color](stroke.md#color)
- [dashOffset](stroke.md#dashOffset)
- [dashPattern](stroke.md#dashPattern)
- [position](stroke.md#position)
- [width](stroke.md#width)

## Properties

### color

• `Readonly` **color**: [`Color`](../classes/color.md)

The color of a stroke.

#### Inherited from

[StrokeOptions](stroke-options.md).[color](stroke-options.md#color)

<hr />

### dashOffset

• `Readonly` **dashOffset**: `number`

Number of pixels the beginning of dash pattern should be offset along the stroke.

#### Inherited from

[StrokeOptions](stroke-options.md).[dashOffset](stroke-options.md#dashOffset)

<hr />

### dashPattern

• `Readonly` **dashPattern**: `number`[]

If empty, this is a solid stroke.
If non-empty, the values alternate between length of a rendered and blank segment,
repeated along the length of the stroke. The first value represents the first solid segment.

#### Inherited from

[StrokeOptions](stroke-options.md).[dashPattern](stroke-options.md#dashPattern)

<hr />

### position

• `Readonly` **position**: [`StrokePositionValue`](../enums/stroke-position-value.md)

The position of the stroke relative to the outline of the shape.

<hr />

### width

• `Readonly` **width**: `number`

The thickness of a stroke. Must be from MIN_STROKE_WIDTH to MAX_STROKE_WIDTH.

#### Inherited from

[StrokeOptions](stroke-options.md).[width](stroke-options.md#width)
