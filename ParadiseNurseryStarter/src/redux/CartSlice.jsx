import {createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({
name:'cart',
initialState:[],
reducers:{
addItem:(state,action)=>{state.push(action.payload)},
removeItem:(state,action)=>state.filter(i=>i.id!==action.payload),
updateQuantity:(state,action)=>{
const item=state.find(i=>i.id===action.payload.id);
if(item){item.quantity=action.payload.quantity;}
}
}
});
export const {addItem,removeItem,updateQuantity}=cartSlice.actions;
export default cartSlice.reducer;