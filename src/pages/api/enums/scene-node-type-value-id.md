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

### <a id="artboard" name="artboard"></a> artboard

• **artboard** = ``"ab:Artboard"``

___

### <a id="artworkRoot" name="artworkRoot"></a> artworkRoot

• **artworkRoot** = ``"ArtworkRoot"``

___

### <a id="ellipse" name="ellipse"></a> ellipse

• **ellipse** = ``"Ellipse"``

___

### <a id="group" name="group"></a> group

• **group** = ``"Group"``

___

### <a id="imageRectangle" name="imageRectangle"></a> imageRectangle

• **imageRectangle** = ``"ImageRectangle"``

Type of MediaContainerNode's "media rectangle" child when it is holding an image

___

### <a id="line" name="line"></a> line

• **line** = ``"Line"``

___

### <a id="linkedAsset" name="linkedAsset"></a> linkedAsset

• **linkedAsset** = ``"LinkedAsset"``

___

### <a id="mediaContainer" name="mediaContainer"></a> mediaContainer

• **mediaContainer** = ``"MediaContainer"``

Type of MediaContainerNode, representing the top-level container of the multi-node construct used to display images or video.

___

### <a id="page" name="page"></a> page

• **page** = ``"Page"``

Type of PageNode

___

### <a id="path" name="path"></a> path

• **path** = ``"Path"``

___

### <a id="polygon" name="polygon"></a> polygon

• **polygon** = ``"artgr:Polygon"``

___

### <a id="rectangle" name="rectangle"></a> rectangle

• **rectangle** = ``"Rectangle"``

___

### <a id="text" name="text"></a> text

• **text** = ``"Text"``
