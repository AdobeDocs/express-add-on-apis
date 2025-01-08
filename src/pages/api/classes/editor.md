[@add-on-hlapi-sdk](../overview.md) / Editor

# Class: Editor

Entry point for APIs that read or modify the document's content.

## Hierarchy

- `ProxyLiveObject`

  ↳ **`Editor`**

## Table of contents

### Accessors

- [context](editor.md#context)
- [documentRoot](editor.md#documentRoot)

### Methods

- [createColorFill](editor.md#createColorFill)
- [createEllipse](editor.md#createEllipse)
- [createGroup](editor.md#createGroup)
- [createImageContainer](editor.md#createImageContainer)
- [createLine](editor.md#createLine)
- [createRectangle](editor.md#createRectangle)
- [createStroke](editor.md#createStroke)
- [createText](editor.md#createText)
- [loadBitmapImage](editor.md#loadBitmapImage)

## Accessors

### <a id="context" name="context"></a> context

• `get` **context**(): [`Context`](context.md)

User's current selection context

#### Returns

[`Context`](context.md)

___

### <a id="documentRoot" name="documentRoot"></a> documentRoot

• `get` **documentRoot**(): [`ExpressRootNode`](express-root-node.md)

#### Returns

[`ExpressRootNode`](express-root-node.md)

the root of the document.

## Methods

### <a id="createColorFill" name="createColorFill"></a> createColorFill

▸ **createColorFill**(`color`): [`ColorFill`](../interfaces/color-fill.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](color.md) | The color to use for the fill. |

#### Returns

[`ColorFill`](../interfaces/color-fill.md)

a solid color fill.

___

### <a id="createEllipse" name="createEllipse"></a> createEllipse

▸ **createEllipse**(): [`EllipseNode`](ellipse-node.md)

#### Returns

[`EllipseNode`](ellipse-node.md)

an ellipse node with default x/y radii, and *no* initial stroke or fill.
Transform values default to 0.

___

### <a id="createGroup" name="createGroup"></a> createGroup

▸ **createGroup**(): [`GroupNode`](group-node.md)

#### Returns

[`GroupNode`](group-node.md)

a group node.

___

### <a id="createImageContainer" name="createImageContainer"></a> createImageContainer

▸ **createImageContainer**(`bitmapData`, `options?`): [`MediaContainerNode`](Mediacontainer-node.md)

Creates a bitmap image, represented as a multi-node MediaContainerNode structure. Always creates a "full-frame,"
uncropped image initially, but cropping can be changed after it is created by modifying the properties of the
container's mediaRectangle and maskShape children.

Image creation involves some asynchronous steps. The image will be visible in this client almost instantly, but will
render as a gray placeholder on other clients until it has been uploaded to storage and then downloaded by those clients.
This local client will act as having unsaved changes until the upload has finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | [`BitmapImage`](../interfaces/bitmap-image.md) | BitmapImage resource (e.g. returned from loadBitmapImage()). |
| `options` | `Object` | Additional configuration: |
| `options.initialSize?` | [`RectangleGeometry`](../interfaces/rectangle-geometry.md) | Size the image is displayed at. Must have the same aspect ratio as bitmapData. Defaults to the        size the image would be created at by a UI drag-drop gesture (typically the image's full size, but scaled down        if needed to stay below an application-defined size cap). |

#### Returns

[`MediaContainerNode`](Mediacontainer-node.md)

MediaContainerNode representing the top container node of the multi-node structure.

___

### <a id="createLine" name="createLine"></a> createLine

▸ **createLine**(): [`LineNode`](line-node.md)

#### Returns

[`LineNode`](line-node.md)

a line node with default start point and end point and a default stroke.
Transform values default to 0.

___

### <a id="createRectangle" name="createRectangle"></a> createRectangle

▸ **createRectangle**(): [`RectangleNode`](rectangle-node.md)

#### Returns

[`RectangleNode`](rectangle-node.md)

a rectangle node with default width and height, and *no* initial stroke or fill.
Transform values default to 0.

___

### <a id="createStroke" name="createStroke"></a> createStroke

▸ **createStroke**(`options?`): [`Stroke`](../interfaces/stroke.md)

See [StrokeOptions](../interfaces/stroke-options.md) for more details on the `options` fields. Defaults:

- `color` has default value DEFAULT_STROKE_COLOR if none is provided.
- `width` has default value DEFAULT_STROKE_WIDTH if none is provided.
- `dashPattern` has default value [] if none is provided. Array must be
  of even length. Values cannot be negative.
- `dashOffset` has default value 0 if none is provided. This options field is ignored
  if no `dashPattern` was provided.

The stroke's `position` field cannot be specified via options yet because only
[center](../enums/stroke-position-value.md#center) is supported.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`StrokeOptions`](../interfaces/stroke-options.md)\> |

#### Returns

[`Stroke`](../interfaces/stroke.md)

a stroke configured with the given options.

___

### <a id="createText" name="createText"></a> createText

▸ **createText**(): [`TextNode`](text-node.md)

#### Returns

[`TextNode`](text-node.md)

a text node with default styles. The text content is initially empty, so the text node will be
invisible until its `text` property is set. Creates point text, so the node's width will automatically
adjust to accommodate whatever text is set.

___

### <a id="loadBitmapImage" name="loadBitmapImage"></a> loadBitmapImage

▸ **loadBitmapImage**(`bitmapData`): `Promise`<[`BitmapImage`](../interfaces/bitmap-image.md)\>

Creates a bitmap image resource in the document, which can be displayed in the scenegraph by passing it to [createImageContainer](editor.md#createImageContainer)
to create a MediaContainerNode. The same BitmapImage can be used to create multiple MediaContainerNodes.

Note: image resources that are unused will be automatically cleaned up after the document is closed.

Async steps to upload image resource data continue in the background after this call's Promise resolves, but the BitmapImage
return value can be used immediately. The local client will act as having unsaved changes until the upload has finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | `Blob` | Encoded image data in PNG or JPEG format. |

#### Returns

`Promise`<[`BitmapImage`](../interfaces/bitmap-image.md)\>
