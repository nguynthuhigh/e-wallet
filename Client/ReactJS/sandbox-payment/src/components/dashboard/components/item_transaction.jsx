import formatUtils from "../../../utils/format"
export function ItemTransaction({item}){
  return(
    <tr>
    <td class="py-3 ps-4">
      <div class="flex items-center h-5">
        <input id="hs-table-pagination-checkbox-3" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
        <label for="hs-table-pagination-checkbox-3" class="sr-only">Checkbox</label>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 flex text-[20px]">{formatUtils.formatCurrency(item.amount,"VND")} <div className="mx-2 bg-green-300 text-green-700 p-1 rounded-lg text-[12px]">Succeeded</div></td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">66864a916bb586f64e86e9e4</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Nguyn</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{formatUtils.formatTime(item.createdAt)}</td>
  </tr>
  )
}