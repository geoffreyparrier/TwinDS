- `npm install`
- `npm run build`
- `npm link`

# API

### Accordion

### Accordion.Panel
Property | Type | Required | Description
--- | --- | --- | ---
**title** | `string` | yes | The title of each accordion pannel
<hr/>

### Alert
Property | Type | Required | Description
--- | --- | --- | ---
**type** | `string` | yes | One of the following values : `info` / `warning` / `error` / `success` 
**classes** | `string` | no | Possible other classes
**onClose** | `() => void` | no | Callback function when component is closed   
<hr/>

### AlertProvider
Context allowing to fire global alerts.

Usage : 
```
const alertContext = useAlert();
...
const someFunction = () => {
    ...
    alertContext.fire('success', 'Operation done with success !')
    ...
}
...
``` 
<hr/>

### Autocomplete
Property | Type | Required | Description
--- | --- | --- | ---
**idList** | `string` | yes | List's id 
**idInput** | `string` | yes | Input's name and id
**placeholder** | `string` | no | The input's placeholder
**values** | `string[]` | yes | The value list
<hr/>

### Avatar
Property | Type | Required | Description
--- | --- | --- | ---
**src** | `string` | yes | Image's source
**size** | `string` | no | Avatar's size : `"small"` / `"medium"` / `"large"`
**shadow** | `boolean` | no | If the component displays a shadow below itself
**outline** | `boolean` | no | If the component is outlined
<hr/>

### AvatarGroup
Property | Type | Required | Description
--- | --- | --- | ---
**srcs** | `string[]` | yes | List of image sources
**limit** | `number` | no | Max number of avatars
**size** | `string` | no | Avatar's size : `"small"` / `"medium"` / `"large"`
<hr/>

### Badge
Property | Type | Required | Description
--- | --- | --- | ---
**children** | `Required<React.ReactNode>` | yes | Required children content
**positionX** | `string` | no | Badge's x position : `"left"` / `"right"`
**positionY** | `string` | no | Badge's y position : `"top"` / `"bottom"`
**size** | `string` | no | Badge's size : `"small"` / `"medium"` / `"large"`
**content** | `string / number` | no | Badge's content itself

<hr/>

### Breadcrum
Property | Type | Required | Description
--- | --- | --- | ---
**children** | `Required<ReactNode>`| yes | The different tabs that will be displayed. For each element of the given array, a tab is created
**action** | `string` | no | The value which will be put in the `action` html property of the `<form>` tag.
**buttons** | `object` | no | The 3 possibles buttons in the component : `previous`, `next` and `last`.
**colors** | `object` | no | The different colors available in the component : `main`, `background` and `progress`. You can give them any valid css color value
**encType** | `string` | no | The value which will be put in the `enctype` html property of the `<form>` tag.
**onSubmit** | `callback` | no | The callback used when the form is submitted
**submitting** | `boolean` | no | Say if the form is submitting

- Usage Exemple : 
```jsx
...
<Breadcrum 
    action="/path/to/submit" 
    buttons={{ previous : <>Custom Previous</>, ...}}
    colors={{ main : "#fefefe", ...}}
    encType="multipart/form-data"
    onSubmit={(e) => { e.preventDefault(); alert('submitted'); }}
    submitting={false}
>
    <Breadcrum.Item>Tab 1</Breadcrum.Item>
    <Breadcrum.Item>Tab 2</Breadcrum.Item>
    <Breadcrum.Item>Tab 3</Breadcrum.Item>
</Breadcrum>
...
```
<hr/>

### Button
Property | Type | Required | Description
--- | --- | --- | ---
**label** | `string` | no | Button's text
**icon** | `ReactNode` | no | Button's icon
**iconPosition** | `string` | no | Icon's position (`left`or `right`)
**filled** | `boolean` | no | If button background is filled
**loading** | `boolean` | no | If button is loading
**rounded** | `boolean` | no | If button's angles are rounded


### ButtonGroup
### Chart
### Checkboxes
### From
### Grid
### Label
### Loader
### Modal
### Progress
### RadioButton
### Rating
### Select
### SpeedDial
### Table

