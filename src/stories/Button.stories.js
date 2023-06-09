import {Button} from "../components/Button";

export default {
    title:'Button',
    component:Button,
}
const Template = args => <Button {...args}/>
export const Red = Template.bind({})
Red.args = {
    backgroundColor:'red',
    width:'300px',
    height:'50px',
    text:'new text',
    fontWeight:'600'
}