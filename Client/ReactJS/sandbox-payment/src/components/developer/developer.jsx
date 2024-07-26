import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Header from '../header/header'
const Component = ({...props}) => {
    const codeString = props.stringcode;

    return (
      <div>
        <h1 className='font-bold text-xl py-2'>{props.api_url}</h1>
        <SyntaxHighlighter language={props.language} style={docco} className="rounded-xl">
        {codeString}
      </SyntaxHighlighter>
      </div>
    );
  };
  const Description = ({...props})=>{
    return(
        <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-lg antialiased font-normal leading-normal text-blue-gray-900">
            {props.properties}
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-lg antialiased font-normal leading-normal text-blue-gray-900">
          {props.description}
          </p>
        </td>
      </tr>
    )
  }
export default function Developer(){
    return(
      <div>
        <Header color={true}></Header>
        <div className="max-w-[1200px] pt-20 mx-auto">
          <div className='flex '>
            <div className='w-[70%] my-5'>
              <h1 className='font-bold text-4xl '>
                API Reference
              </h1>
              <div className='space-y-3 my-2'>
                <h1>The pressPay API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.</h1>
                <p>You can use the pressPay API in test mode, which doesn’t affect your live data or interact with the banking networks.</p>
                <p>The pressPay API doesn’t support bulk updates. You can work on only one object per request.</p>
              </div>

            </div>
            <div className='ml-auto'>
              <Component language="http" api_url="BASE URL" stringcode={`https://presspay-api.azurewebsites.net`}></Component>
            </div>
          </div>
          <Component language="javascript" api_url={"POST /api/v1/payment"} stringcode={
`{
    "private_key":"pk_presspay_62849c1e70084b1d3372ad5a8913f918fab3d64324a9de6a7b4adbbfdcf8e70d",
    "amount":"20000",
    "currency":"VND",
    "message":"Product's name",
    "userID":"668fd2abaa7b610a6e7089ee",
    "OrderID":"Order001"
    "return_url":"your.domain.com/order?id={orderID}",
    
}`}>    
          </Component>
          <Component language="javascript" api_url={"Response"} stringcode={
`{
    "message":"Redirect to url",
    "data":{
        "url":"https://presspay.vercel.app/payment-gateway?token={token}"
    }
}`}>    
          </Component>
          <div className='mt-10'>
        
            <Component language="javascript" api_url={"POST /api/v1/refund"} stringcode={
`{
    "receiver":"668fd2abaa7b610a6e7089ee",
    "amount":"2200",
    "message":"refund money",
    "currency":"VND",
    "private_key":"pk_presspay_62849c1e70084b1d3372ad5a8913f918fab3d64324a9de6a7b4adbbfdcf8e70d"
}`}>    
            </Component>
            <Component language="javascript" api_url={"Response"} stringcode={
`{
  "message":"Hoàn tiền thành công"
}`}>    
            </Component>
          </div>
        </div>
      </div>
   )
}
const A = ()=>{
  <div class="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
  <table class="w-full text-left table-auto min-w-max">
  <thead>
  <tr>
  <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
      Name
    </p>
  </th>
  <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
      Job
    </p>
  </th>
  </tr>
  </thead>
  <tbody>
  <Description properties="private_key" description=""></Description>
  </tbody>
  </table>
  </div>
}