- `npm install`
- `npm run build`
- `npm link`

# API Documentation

### Accordion

### Accordion.Panel
Property | Type | Required | Description
--- | --- | --- | ---
**title** | `string` | yes | The title of each accordion pannel

- Usage Exemple : 
```jsx
<Accordion>
    <Accordion.Panel title="Section 1">Content 1</Accordion.Panel>
    <Accordion.Panel title="Section 2">Content 2</Accordion.Panel>
    <Accordion.Panel title="Section 3">Content 3</Accordion.Panel>
</Accordion>
```
<hr/>

### Alert
Property | Type | Required | Description
--- | --- | --- | ---
**type** | `string` | yes | One of the following values : `info` / `warning` / `error` / `success` 
**classes** | `string` | no | Possible other classes
**onClose** | `() => void` | no | Callback function when component is closed   

- Usage exemple : 
```jsx
<Alert type="warning" onClose={() => {...}}>Attention !</Alert>
```
<hr/>

### AlertProvider
Context allowing to fire global alerts.

Usage : 
```javascript
const alertContext = useAlert();
... //other component logic
const someFunction = () => {
    ... //other function logic
    alertContext.fire('success', 'Operation done with success !')
    ... //other function logic
}
... //other component logic
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

- Usage exemple :

```jsx
<Avatar src="./my-image.jpg" size="medium" shadow/>
```
<hr/>

### AvatarGroup
Property | Type | Required | Description
--- | --- | --- | ---
**srcs** | `string[]` | yes | List of image sources
**limit** | `number` | no | Max number of avatars displayed
**size** | `string` | no | Avatar's size : `"small"` / `"medium"` / `"large"`

- Usage exemple :

```jsx 
<AvatarGroup srcs={['/test.jpg', '/oui.jpg', '/ok.jpg', '/yes.jpg', '/no.jpg']} 
    limit={4} 
    size="small"
/>
```
<hr/>

### Badge
Property | Type | Required | Description
--- | --- | --- | ---
**children** | `Required<React.ReactNode>` | yes | Required children content
**positionX** | `string` | no | Badge's x position : `"left"` / `"right"`
**positionY** | `string` | no | Badge's y position : `"top"` / `"bottom"`
**size** | `string` | no | Badge's size : `"small"` / `"medium"` / `"large"`
**content** | `string / number` | no | Badge's content itself

- Usage exemple :

```jsx 
<Badge size="small" positionX="right" positionY="top">
    <Avatar src="/profile-picture.jpg" size="medium" shadow/>
</Badge>
```
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
    buttons={{
        previous: <Button type="button" label="Previous"/>,
        next: <Button type="button" label="Next"/>,
        last:<Button label="Confirm" disabled={submitting} loading={submitting}/>
    }}
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

- Usage Exemple : 
```jsx
<Button filled label="Test button" disabled icon={<StarIcon/>} iconPosition="right"/>
```
<hr/>

### ButtonGroup
Property | Type | Required | Description
--- | --- | --- | ---
**buttons** | `Array<ButtonProps>` | yes | All the buttons to be displayed in group

- Usage exemple :
```jsx
<ButtonGroup 
    buttons={[
        {label: 'btn1', ...},
        {label: 'btn2', ...},
        {label: 'btn3', ...},
    ]}
/>
```
<hr/>

## Charts
### Chart.Linear
Property | Type | Required | Description
--- | --- | --- | ---
**datas** | `number[]` | yes | Datas to be displayed and linked
**xAxis** | `string` | no | Label for X's axis
**yAxis** | `string` | no | Label for Y's axis

- Usage exemple : 

```jsx
<Chart.Linear datas={[1,100,152,89,96,120]} xAxis="Temps" yAxis="Montant"/>
```
<hr/>

### Checkbox
Property | Type | Required | Description
--- | --- | --- | ---
**label** | `string` | no | Input's label
**checked** | `boolean` | no | If the input is default checked
**disabled** | `boolean` | no | If the input is disabled

- Usage exemple :

```jsx
<CheckBox 
    label="Acceptez-vous les conditions d'utilisation ?" 
    id="my-check-box" 
    value="agreement" 
    checked
/> 
```
<hr/>

## Form
### InputGroup
*not yet fully implemented*
<hr/>

### Grid & Grid.Item
Property | Type | Required | Description
--- | --- | --- | ---
**sm** | `number` | no | Number of item per row when window has a small size
**md** | `number` | no | Number of item per row when window has a medium size
**lg** | `number` | no | Number of item per row when window has a large size
**xl** | `number` | no | Number of item per row when window has a x-large size
**xxl** | `number` | no | Number of item per row when window has a xx-large size

- Usage exemple :

```jsx
<Grid sm={1} md={2} lg={3} xl={4} xxl={8}>
    <Grid.Item>grid item 1</Grid.Item>
    <Grid.Item>grid item 2</Grid.Item>
    <Grid.Item>grid item 3</Grid.Item>
    <Grid.Item>grid item 4</Grid.Item>
    <Grid.Item>grid item 5</Grid.Item>
</Grid>
```
<hr/>

### Label
Property | Type | Required | Description
--- | --- | --- | ---
**required** | `boolean` | no | Whether the label have to display a '*' to mean the field is required

- Usage exemple :

```jsx
<Label required>My label</Label>
```
<hr/>

### Loader & BackdropLoader

`BackdropLoader` is a global version of the `Loader` component that displays a global loader on all the page's size with a backdrop in background.
Both components have the same properties.

Property | Type | Required | Description
--- | --- | --- | ---
**size** | `number` | no | The loader size in `rem`
**borderSize** | `number` | no | The loader border's size in `px`

`Loader` default size is `1rem` and default border's size is `2px`.

`BackdropLoader` default size is `3rem` and default border's size is `4px`.

- Usage exemple :

```jsx
<Loader/>
```
```jsx
<BackdropLoader borderSize={3}/>
```
<hr/>

### Modal
Property | Type | Required | Description
--- | --- | --- | ---
**opened** | `boolean` | yes | Whether the Modal is opened of not
**onClose** | `callback` | yes | Function which is triggered when the Modal is closed

- Usage exemple :

```jsx
function MyComponent(){
    const [isModalOpened, setIsModalOpened] = useState(false);
    return(
        <>
            <button onClick={() => setIsModalOpened(true)}>open modal</button>
            <Modal opened={isModalOpened} onClose={() => setIsModalOpened(false)}>
                My modal content
            </Modal>
        </>
    );
}
```
<hr/>

### Progress
Property | Type | Required | Description
--- | --- | --- | ---
**value** | `string` or `number` | yes | The actual progress bar's value
**max** | `string` or `number` | no | The progress bar's max value (default `100`)
**classes** | `string` | no | The progress bar's extra classes
**height** | `string` | no | The progress bar's height (default `0.5rem`)

- Usage exemple :

```jsx
<Progress value={20} height="1rem"/>
```
<hr/>

### RadioButton
Property | Type | Required | Description
--- | --- | --- | ---
**label** | `string` | yes | The label which will be displayed next to the radio input
**selected** | `boolean` | yes | The label which will be displayed next to the radio input
**onChange** | `callback` | yes | Function which is triggered when the input's value is changed

- Usage exemple :

```jsx
<RadioButton 
    label="Test radio" 
    selected={false} 
    onChange={(value: any) => {console.log(value)}} 
    id="my-radio-btn"
/>
```
<hr/>

### Rating
Property | Type | Required | Description
--- | --- | --- | ---
**max** | `string` | no | Total number of stars (default `5`)
**value** | `string` | no | Actual number of selected stars (default `0`)
**onChange** | `callback` | no | Callback function triggered when rating's value changes.

- Usage exemple :

```jsx
<Rating value={2} onChange={(value) => {console.log(value)}}/>
```
<hr/>

## Select

Property | Type | Required | Description
--- | --- | --- | ---
**label** | `string` | yes | Displayed select's label

### Select.Option

Property | Type | Required | Description
--- | --- | --- | ---
**value** | `string` | yes | Option's value

### Select.Group

Property | Type | Required | Description
--- | --- | --- | ---
**label** | `string` | yes | Group's label

- Usage exemple :

```jsx
<Select label="My select" id="my-select">
    <Select.Group label="sure-values">
        <Select.Option value="yes">Yes</Select.Option>
        <Select.Option value="no">No</Select.Option>
    </Select.Group>
    <Select.Option value="maybe">Maybe</Select.Option>
</Select>
```
<hr/>

### SpeedDial

Property | Type | Required | Description
--- | --- | --- | ---
**children** | `Required<React.ReactNode>` | yes | Required content

### SpeedDial.Item

Property | Type | Required | Description
--- | --- | --- | ---
**icon** | `React.ReactNode` | no | The html icon
**onClick** | `callback` | no | Function triggered on item click

- Usage exemple :

```jsx
<SpeedDial>
    <SpeedDial.Item icon={<StarIcon/>} onClick={() => ...}/>
    <SpeedDial.Item icon={<HomeIcon/>} onClick={() => ...}/>
    <SpeedDial.Item icon={<BookIcon/>} onClick={() => ...}/>
</SpeedDial>
```
<hr/>

### Table

Sub components : 
- `Table.Thead`, `Table.Thead.Tr`, `Table.Thead.Tr.Th`, `Table.Thead.Tr.Td`
- `Table.Tbody`, `Table.Tbody.Tr`, `Table.Tbody.Tr.Th`, `Table.Tbody.Tr.Td`

Usage exemple :

```jsx
<Table>
    <Table.Thead>
        <Table.Thead.Tr>
            <Table.Thead.Tr.Th>ID</Table.Thead.Tr.Th>
            <Table.Thead.Tr.Th>Label</Table.Thead.Tr.Th>
            <Table.Thead.Tr.Th>Description</Table.Thead.Tr.Th>
        </Table.Thead.Tr>
    </Table.Thead>
    <Table.Tbody>
        <Table.Tbody.Tr>
            <Table.Tbody.Tr.Td>1</Table.Tbody.Tr.Td>
            <Table.Tbody.Tr.Td>label 1</Table.Tbody.Tr.Td>
            <Table.Tbody.Tr.Td>description 1</Table.Tbody.Tr.Td>
        </Table.Tbody.Tr>
        <Table.Tbody.Tr>
            <Table.Tbody.Tr.Td>2</Table.Tbody.Tr.Td>
            <Table.Tbody.Tr.Td>label 2</Table.Tbody.Tr.Td>
            <Table.Tbody.Tr.Td>description 2</Table.Tbody.Tr.Td>
        </Table.Tbody.Tr>
    </Table.Tbody>
</Table>
```
<hr/>

