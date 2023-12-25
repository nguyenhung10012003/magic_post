import Datepicker from "react-tailwindcss-datepicker";
import {subDays} from "@/utils/date";
import MultipleSelect from "@/components/selectors/MultipleSelect";
import {TagIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export default function TableFilter(props: any) {
  const {dateRange, setDateRange, statusSelections, statusSelected, setStatusSelected} = props;
  const handleStatusCheckboxChange = (index: number) => {
    // Sao chép mảng hiện tại để không làm thay đổi trực tiếp state
    const newState = [...statusSelected];

    // Đảo ngược trạng thái của checkbox tại index được chọn
    newState[index] = !newState[index];

    // Nếu thẻ đầu tiên được chọn, thiết lập tất cả các thẻ khác
    if (index === 0) {
      for (let i = 1; i < newState.length; i++) {
        newState[i] = newState[index];
      }
    }

    // Nếu tất cả các thẻ khác đều là true, thiết lập thẻ đầu tiên là true
    if (newState.slice(1).every((isChecked) => isChecked)) {
      newState[0] = true;
    } else {
      // Nếu có ít nhất một thẻ là false, thiết lập thẻ đầu tiên là false
      newState[0] = false;
    }

    // Cập nhật state mới
    setStatusSelected(newState);
  };
  return (
    <div className="flex flex-row gap-3 my-3">
      <Datepicker
        containerClassName="w-full rounded-lg text-sm relative
                 bg-primary border-borderColor4 border-2 text-textColor1 align-middle"
        toggleClassName="text-textColor1 px-3 absolute right-0 top-1/2 -translate-y-1/2"
        inputClassName="w-full bg-transparent align-middle py-2 z-2 placeholder-textColor1 focus-visible:outline-0 pl-3 pr-6"
        useRange={false}
        value={dateRange}
        onChange={(value) => setDateRange(value)}
        popoverDirection={"down"}
        placeholder={"Khoảng thời gian"}
        minDate={subDays(new Date(), 365)}
        maxDate={new Date()}
      />
      <MultipleSelect
        selections={statusSelections.map((s: any, index: number) => {
          return (
            <div key={index} className={"px-1.5 pt-1.5 flex flex-row font-sm text-sm w-full"}>
              <input type="checkbox" checked={statusSelected[index]} id={`select${index}`}
                     onChange={() => handleStatusCheckboxChange(index)}
              />
              <label htmlFor={`select${index}`} className="px-3">{s}</label>
            </div>
          )
        })}
        button={
          <div className={"flex flex-row w-full"}>
            <TagIcon className={"h-5 w-5"}/>
            <span className={"pl-2 pr-4"}>Trạng thái</span>
            <ChevronDownIcon className={"h-5 w-5"}/>
          </div>
        }
        selectMenuClassName={"bg-primary"}
      />

    </div>
  )
}