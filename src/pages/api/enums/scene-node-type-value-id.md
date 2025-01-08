[@add-on-hlapi-sdk](../overview.md) / SceneNodeTypeValueID

# Enumeration: SceneNodeTypeValueID

<InlineAlert slots="text" variant="warning"/>

*Do not depend on the literal string values of these constants*, as they may change. Always reference the enum identifiers in your code.

<InlineAlert slots="text" variant="warning"/>

*Additional node types may be added in the future.* If your code has different branches or cases depending on node type,
always have a default/fallback case to handle any unknown values you may encounter.

## Table of contents

### Enumeration Members

- [artboard](scene-node-type-value-id.md#artboard)
- [artworkRoot](scene-node-type-value-id.md#artworkRoot)
- [ellipse](scene-node-type-value-id.md#ellipse)
- [group](scene-node-type-value-id.md#group)
- [imageRectangle](scene-node-type-value-id.md#imageRectangle)
- [line](scene-node-type-value-id.md#line)
- [linkedAsset](scene-node-type-value-id.md#linkedAsset)
- [mediaContainer](scene-node-type-value-id.md#mediaContainer)
- [page](scene-node-type-value-id.md#page)
- [path](scene-node-type-value-id.md#path)
- [polygon](scene-node-type-value-id.md#polygon)
- [rectangle](scene-node-type-value-id.md#rectangle)
- [text](scene-node-type-value-id.md#text)

## Enumeration Members

### artboard

• **artboard** = ``"ab:Artboard"``

<hr />

### artworkRoot

• **artworkRoot** = ``"ArtworkRoot"``

<hr />

### ellipse

• **ellipse** = ``"Ellipse"``

<hr />

### group

• **group** = ``"Group"``

<hr />

### imageRectangle

• **imageRectangle** = ``"ImageRectangle"``

Type of MediaContainerNode's "media rectangle" child when it is holding an image

<hr />

### line

• **line** = ``"Line"``

<hr />

### linkedAsset

• **linkedAsset** = ``"LinkedAsset"``

<hr />

### mediaContainer

• **mediaContainer** = ``"MediaContainer"``

Type of MediaContainerNode, representing the top-level container of the multi-node construct used to display images or video.

<hr />

### page

• **page** = ``"Page"``

Type of PageNode

<hr />

### path

• **path** = ``"Path"``

<hr />

### polygon

• **polygon** = ``"artgr:Polygon"``

<hr />

### rectangle

• **rectangle** = ``"Rectangle"``

<hr />

### text

• **text** = ``"Text"``
