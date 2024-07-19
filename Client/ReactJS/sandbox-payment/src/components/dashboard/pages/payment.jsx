import MenuBar from "../components/menu-bar"
import Header from "../../header/header_dashboard"
const Item = ()=>{
  return(
    <tr>
    <td class="py-3 ps-4">
      <div class="flex items-center h-5">
        <input id="hs-table-pagination-checkbox-3" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
        <label for="hs-table-pagination-checkbox-3" class="sr-only">Checkbox</label>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 flex text-[20px]">10,000 VND <div className="mx-2 bg-green-300 text-green-700 p-1 rounded-lg text-[12px]">Succeeded</div></td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">66864a916bb586f64e86e9e4</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Nguyn</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">2024-07-04</td>
  </tr>
  )
}

export default function Payment(){
    return(<>
      <div class="flex   mx-auto px-4">
          <MenuBar></MenuBar>
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
                  
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>

                    

                     

                    
                    </tbody>
                  </table>
                </div>
                <div class="py-1 px-4">
                  <nav class="flex items-center space-x-1">
                    <button type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">
                      <span aria-hidden="true">«</span>
                      <span class="sr-only">Previous</span>
                    </button>
                    <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10" aria-current="page">1</button>
                    <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">2</button>
                    <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">3</button>
                    <button type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">
                      <span class="sr-only">Next</span>
                      <span aria-hidden="true">»</span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
       
    )
}