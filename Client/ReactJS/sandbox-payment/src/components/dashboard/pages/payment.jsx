import Header from '../../header/header_dashboard'
import { ItemTransaction } from '../components/item_transaction'
import partnerAPI from '../../../api/partner.api'
import { useEffect, useState } from "react"
export default function Payment(){
    const [isLoading,setIsLoading] = useState(true)
    const [transactionData,setTransactionData] = useState(null)
    useEffect(()=>{
      const fetchData =async ()=>{
        const response = await partnerAPI.getTransactions(1,10)
        if(response.status === 200){
          setIsLoading(false)
          setTransactionData(response.data.data)
        }
      }
      fetchData()
    },[])
    return(<div>
        <Header></Header>
        <div className='max-w-[1200px] mx-auto'>
        <div class=" overflow-x-auto p-8 border-[1px] border-r-2 border-y-0  w-[99%]">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <div class="py-3 px-4">
                  <div class="relative max-w-xs">
                    <label class="sr-only">Search</label>
                    <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search for items"/>
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                      <svg class="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead class="bg-gray-50 dark:bg-neutral-700">
                      <tr>
                        <th scope="col" class="py-3 px-4 pe-0">
                          <div class="flex items-center h-5">
                            <input id="hs-table-pagination-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                            <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                          </div>
                        </th>
                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Amount</th>
                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Payment method</th>
                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Description</th>
                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Customer</th>
                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">DATE</th>


                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  
                    {isLoading ? '...loading' : transactionData.map((item)=>(
                      <ItemTransaction item={item}></ItemTransaction>
                    ))}
                    </tbody>
                  </table>
                </div>
           
              </div>
            </div>
          </div>
        </div>
    </div>)
}