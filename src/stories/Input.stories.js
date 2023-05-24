import {Input} from "../components/Input";

export default {
    title:'Input',
    component:Input,
}
const Template = args => <Input {...args}/>
export const Standart = Template.bind({})
Standart.args = {
    type:'text',
    borderRadius:'10px',
    width:'200px',
    height:'50px',
    borderColor:'green',
    color:'#000'
}